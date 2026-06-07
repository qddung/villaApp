import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const VILLA_DATA_DIR = path.join(process.cwd(), "src/image/villa_data");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function isImage(filename: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

// GET: list images for a villa
export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const villaDir = path.join(VILLA_DATA_DIR, slug);
  const result: { main: string | null; details: string[] } = { main: null, details: [] };

  if (!fs.existsSync(villaDir)) {
    return NextResponse.json(result);
  }

  // Find main image
  const rootFiles = fs.readdirSync(villaDir);
  const mainFile = rootFiles.find((f) => f.startsWith("main") && isImage(f));
  if (mainFile) {
    result.main = `/api/villa-image/${slug}/${mainFile}`;
  }

  // Find detail images
  const detailsDir = path.join(villaDir, "details");
  if (fs.existsSync(detailsDir)) {
    result.details = fs
      .readdirSync(detailsDir)
      .filter(isImage)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/api/villa-image/${slug}/details/${f}`);
  }

  return NextResponse.json(result);
}

// POST: upload images
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const slug = formData.get("slug") as string;
  const type = formData.get("type") as string; // "main" or "detail"
  const file = formData.get("file") as File;

  if (!slug || !file) {
    return NextResponse.json({ error: "slug and file required" }, { status: 400 });
  }

  const villaDir = path.join(VILLA_DATA_DIR, slug);
  const detailsDir = path.join(villaDir, "details");

  // Ensure directories exist
  fs.mkdirSync(villaDir, { recursive: true });
  fs.mkdirSync(detailsDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name).toLowerCase() || ".jpg";

  if (type === "main") {
    // Remove existing main image(s)
    const existing = fs.readdirSync(villaDir).filter((f) => f.startsWith("main") && isImage(f));
    for (const f of existing) {
      fs.unlinkSync(path.join(villaDir, f));
    }
    const filename = `main${ext}`;
    fs.writeFileSync(path.join(villaDir, filename), buffer);
    return NextResponse.json({ url: `/api/villa-image/${slug}/${filename}` });
  } else {
    const filename = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    fs.writeFileSync(path.join(detailsDir, filename), buffer);
    return NextResponse.json({ url: `/api/villa-image/${slug}/details/${filename}` });
  }
}

// DELETE: remove an image
export async function DELETE(request: NextRequest) {
  const { slug, imageUrl } = await request.json();
  if (!slug || !imageUrl) {
    return NextResponse.json({ error: "slug and imageUrl required" }, { status: 400 });
  }

  const villaDir = path.join(VILLA_DATA_DIR, slug);

  // Extract relative path from URL: /api/villa-image/slug/... -> ...
  const prefix = `/api/villa-image/${slug}/`;
  if (!imageUrl.startsWith(prefix)) {
    return NextResponse.json({ error: "invalid imageUrl" }, { status: 400 });
  }

  const relativePath = imageUrl.slice(prefix.length);
  const fullPath = path.resolve(path.join(villaDir, relativePath));

  // Security check
  if (!fullPath.startsWith(path.resolve(villaDir))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }

  return NextResponse.json({ success: true });
}
