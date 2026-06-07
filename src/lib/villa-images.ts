import fs from "fs";
import path from "path";

const VILLA_DATA_DIR = path.join(process.cwd(), "src/image/villa_data");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function isImage(filename: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

function findMainImage(villaDir: string): string | null {
  try {
    const files = fs.readdirSync(villaDir);
    const main = files.find(
      (f) => f.startsWith("main") && isImage(f)
    );
    return main || null;
  } catch {
    return null;
  }
}

function findDetailImages(villaDir: string): string[] {
  const detailsDir = path.join(villaDir, "details");
  try {
    const files = fs.readdirSync(detailsDir);
    return files
      .filter(isImage)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export interface VillaImages {
  main: string | null;
  details: string[];
  all: string[];
}

export function getVillaImages(slug: string): VillaImages {
  const villaDir = path.join(VILLA_DATA_DIR, slug);
  const mainFile = findMainImage(villaDir);
  const detailFiles = findDetailImages(villaDir);

  const basePath = `/api/villa-image/${slug}`;

  const main = mainFile ? `${basePath}/${mainFile}` : null;
  const details = detailFiles.map((f) => `${basePath}/details/${f}`);
  const all = main ? [main, ...details] : details;

  return { main, details, all };
}

export function getAllVillaSlugs(): string[] {
  try {
    return fs
      .readdirSync(VILLA_DATA_DIR)
      .filter((f) => fs.statSync(path.join(VILLA_DATA_DIR, f)).isDirectory());
  } catch {
    return [];
  }
}

export function hasLocalImages(slug: string): boolean {
  const images = getVillaImages(slug);
  return images.all.length > 0;
}
