import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private readonly prisma: PrismaService) { }

  /**
   * Upload a single image → save binary to DB → return { id, isMain }
   */
  async uploadImage(file: Express.Multer.File, isMain: boolean = false) {
    if (!file) {
      throw new BadRequestException('file is required');
    }
    console.log(`[DEBUG] Uploading image. isMain=${isMain}, size=${file.size}, mimetype=${file.mimetype}`);

    // Create an isolated ArrayBuffer to prevent Prisma from reading the 8KB shared pool
    const isolatedCopy = new Uint8Array(new ArrayBuffer(file.buffer.length));
    isolatedCopy.set(new Uint8Array(file.buffer.buffer, file.buffer.byteOffset, file.buffer.length));

    const image = await this.prisma.villaImage.create({
      data: {
        data: isolatedCopy,
        mimeType: file.mimetype || 'image/jpeg',
        isMain,
      },
      select: { id: true, isMain: true },
    });

    return image;
  }

  /**
   * Serve an image binary by its ID
   */
  async serveImage(id: string): Promise<{ buffer: Buffer; contentType: string }> {
    const image = await this.prisma.villaImage.findUnique({
      where: { id },
      select: { data: true, mimeType: true },
    });

    if (!image) {
      throw new NotFoundException('Image not found');
    }

    return {
      buffer: Buffer.from(image.data),
      contentType: image.mimeType,
    };
  }

  /**
   * Delete an image by ID
   */
  async deleteImage(id: string) {
    const image = await this.prisma.villaImage.findUnique({ where: { id } });
    if (!image) {
      throw new NotFoundException('Image not found');
    }
    await this.prisma.villaImage.delete({ where: { id } });
    return { success: true };
  }

  /**
   * Attach images to a villa. Called during villa save.
   * - newImageIds: IDs of newly uploaded images to attach
   * - deleteImageIds: IDs of images to remove
   */
  async syncVillaImages(villaId: string, newImageIds: string[], deleteImageIds: string[]) {
    // Delete marked images
    if (deleteImageIds.length > 0) {
      await this.prisma.villaImage.deleteMany({
        where: { id: { in: deleteImageIds } },
      });
    }

    // Attach new images to the villa
    if (newImageIds.length > 0) {
      await this.prisma.villaImage.updateMany({
        where: { id: { in: newImageIds } },
        data: { villaId },
      });
    }
  }

  /**
   * Get all images for a villa (returns id + isMain, no binary data)
   */
  async getImagesForVilla(villaId: string) {
    const images = await this.prisma.villaImage.findMany({
      where: { villaId },
      select: { id: true, isMain: true, order: true },
      orderBy: [{ isMain: 'desc' }, { order: 'asc' }],
    });

    return images.map((img) => ({
      id: img.id,
      url: `/api/villa-image/${img.id}`,
      isMain: img.isMain,
    }));
  }
}
