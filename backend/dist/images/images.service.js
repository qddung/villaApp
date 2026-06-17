"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ImagesService = class ImagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async uploadImage(file, isMain = false) {
        if (!file) {
            throw new common_1.BadRequestException('file is required');
        }
        console.log(`[DEBUG] Uploading image. isMain=${isMain}, size=${file.size}, mimetype=${file.mimetype}`);
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
    async serveImage(id) {
        const image = await this.prisma.villaImage.findUnique({
            where: { id },
            select: { data: true, mimeType: true },
        });
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        return {
            buffer: Buffer.from(image.data),
            contentType: image.mimeType,
        };
    }
    async deleteImage(id) {
        const image = await this.prisma.villaImage.findUnique({ where: { id } });
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        await this.prisma.villaImage.delete({ where: { id } });
        return { success: true };
    }
    async syncVillaImages(villaId, newImageIds, deleteImageIds) {
        if (deleteImageIds.length > 0) {
            await this.prisma.villaImage.deleteMany({
                where: { id: { in: deleteImageIds } },
            });
        }
        if (newImageIds.length > 0) {
            await this.prisma.villaImage.updateMany({
                where: { id: { in: newImageIds } },
                data: { villaId },
            });
        }
    }
    async getImagesForVilla(villaId) {
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
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImagesService);
//# sourceMappingURL=images.service.js.map