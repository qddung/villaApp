import { Injectable, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

const VILLA_DATA_DIR = path.join(process.cwd(), 'src/image/villa_data');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function isImage(filename: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

@Injectable()
export class ImagesService {
  constructor() {
    if (!fs.existsSync(VILLA_DATA_DIR)) {
      fs.mkdirSync(VILLA_DATA_DIR, { recursive: true });
    }
  }

  getImagesForVilla(slug: string) {
    if (!slug) throw new BadRequestException('slug required');

    const villaDir = path.join(VILLA_DATA_DIR, slug);
    const result: { main: string | null; details: string[] } = { main: null, details: [] };

    if (!fs.existsSync(villaDir)) {
      return result;
    }

    const rootFiles = fs.readdirSync(villaDir);
    const mainFile = rootFiles.find((f) => f.startsWith('main') && isImage(f));
    if (mainFile) {
      result.main = `/api/villa-image/${slug}/${mainFile}`;
    }

    const detailsDir = path.join(villaDir, 'details');
    if (fs.existsSync(detailsDir)) {
      result.details = fs
        .readdirSync(detailsDir)
        .filter(isImage)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((f) => `/api/villa-image/${slug}/details/${f}`);
    }

    return result;
  }

  uploadImage(slug: string, type: string, file: Express.Multer.File) {
    if (!slug || !file) {
      throw new BadRequestException('slug and file required');
    }

    const villaDir = path.join(VILLA_DATA_DIR, slug);
    const detailsDir = path.join(villaDir, 'details');

    fs.mkdirSync(villaDir, { recursive: true });
    fs.mkdirSync(detailsDir, { recursive: true });

    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';

    if (type === 'main') {
      const existing = fs.readdirSync(villaDir).filter((f) => f.startsWith('main') && isImage(f));
      for (const f of existing) {
        fs.unlinkSync(path.join(villaDir, f));
      }
      const filename = `main${ext}`;
      fs.writeFileSync(path.join(villaDir, filename), file.buffer);
      return { url: `/api/villa-image/${slug}/${filename}` };
    } else {
      const filename = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
      fs.writeFileSync(path.join(detailsDir, filename), file.buffer);
      return { url: `/api/villa-image/${slug}/details/${filename}` };
    }
  }

  deleteImage(slug: string, imageUrl: string) {
    if (!slug || !imageUrl) {
      throw new BadRequestException('slug and imageUrl required');
    }

    const villaDir = path.join(VILLA_DATA_DIR, slug);
    const prefix = `/api/villa-image/${slug}/`;
    
    if (!imageUrl.startsWith(prefix)) {
      throw new BadRequestException('invalid imageUrl');
    }

    const relativePath = imageUrl.slice(prefix.length);
    const fullPath = path.resolve(path.join(villaDir, relativePath));

    if (!fullPath.startsWith(path.resolve(villaDir))) {
      throw new ForbiddenException('forbidden');
    }

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }

    return { success: true };
  }

  serveImage(imagePath: string): { buffer: Buffer; contentType: string } {
    const filePath = path.join(VILLA_DATA_DIR, imagePath);
    const resolved = path.resolve(filePath);

    if (!resolved.startsWith(path.resolve(VILLA_DATA_DIR))) {
      throw new ForbiddenException('Forbidden');
    }

    if (!fs.existsSync(resolved)) {
      throw new NotFoundException('Not found');
    }

    const ext = path.extname(resolved).toLowerCase();
    const MIME_TYPES: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.avif': 'image/avif',
    };
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const buffer = fs.readFileSync(resolved);
    return { buffer, contentType };
  }
}
