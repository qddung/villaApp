import { PrismaService } from '../prisma/prisma.service';
export declare class ImagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    uploadImage(file: Express.Multer.File, isMain?: boolean): Promise<{
        id: string;
        isMain: boolean;
    }>;
    serveImage(id: string): Promise<{
        buffer: Buffer;
        contentType: string;
    }>;
    deleteImage(id: string): Promise<{
        success: boolean;
    }>;
    syncVillaImages(villaId: string, newImageIds: string[], deleteImageIds: string[]): Promise<void>;
    getImagesForVilla(villaId: string): Promise<{
        id: string;
        url: string;
        isMain: boolean;
    }[]>;
}
