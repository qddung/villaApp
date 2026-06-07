import fs from "fs";
import path from "path";

const VILLA_DATA_DIR = path.join(process.cwd(), "src/image/villa_data");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/**
 * Get the main image URL for a villa.
 * Checks src/image/villa_data/{slug}/main.* first, falls back to the provided fallback URL.
 */
export function getVillaMainImage(slug: string, fallback: string): string {
  const villaDir = path.join(VILLA_DATA_DIR, slug);

  try {
    if (fs.existsSync(villaDir)) {
      const files = fs.readdirSync(villaDir);
      const mainFile = files.find(
        (f) =>
          f.startsWith("main") &&
          IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase())
      );
      if (mainFile) {
        return `/api/villa-image/${slug}/${mainFile}`;
      }
    }
  } catch {
    // fall through to fallback
  }

  return fallback;
}
