import fs from "fs";
import path from "path";

const VILLA_DATA_DIR = path.join(process.cwd(), "src/image/villa_data");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function isImage(filename: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

/**
 * Resolve images for a villa from src/image/villa_data/{slug}/
 * Structure:
 *   {slug}/main.{jpg|png|...}     -> main/cover image
 *   {slug}/details/{1.jpg, 2.png} -> detail gallery images
 *
 * Returns API URLs that serve these files, or null if no local images exist.
 */
export function resolveVillaImages(slug: string): string[] | null {
  const villaDir = path.join(VILLA_DATA_DIR, slug);

  if (!fs.existsSync(villaDir)) return null;

  const result: string[] = [];
  const basePath = `/api/villa-image/${slug}`;

  // Find main image
  try {
    const rootFiles = fs.readdirSync(villaDir);
    const mainFile = rootFiles.find((f) => f.startsWith("main") && isImage(f));
    if (mainFile) {
      result.push(`${basePath}/${mainFile}`);
    }
  } catch {
    // no root files
  }

  // Find detail images
  const detailsDir = path.join(villaDir, "details");
  try {
    if (fs.existsSync(detailsDir)) {
      const detailFiles = fs
        .readdirSync(detailsDir)
        .filter(isImage)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

      for (const f of detailFiles) {
        result.push(`${basePath}/details/${f}`);
      }
    }
  } catch {
    throw new Error(`No detail images found for villa ${slug}`);
    // no details
  }

  return result.length > 0 ? result : null;
}
