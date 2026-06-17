import { ImagesService } from './images.service';
import type { Response } from 'express';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    uploadImage(file: Express.Multer.File, isMain?: string): Promise<{
        id: string;
        isMain: boolean;
    }>;
    deleteImage(id: string): Promise<{
        success: boolean;
    }>;
    getImages(villaId: string): Promise<{
        id: string;
        url: string;
        isMain: boolean;
    }[]>;
    serveImage(id: string, res: Response): Promise<void>;
}
