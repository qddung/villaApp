import { PrismaService } from '../prisma/prisma.service';
import { ImagesService } from '../images/images.service';
import type { Villa, VillaBasic } from '../shared/types';
export declare class VillasService {
    private readonly prisma;
    private readonly imagesService;
    constructor(prisma: PrismaService, imagesService: ImagesService);
    findAll(): Promise<VillaBasic[]>;
    getDefaultFilters(): Promise<{
        areas: {
            slug: string;
            name: string;
            villaCount: number;
        }[];
        amenities: string[];
        priceRanges: {
            label: string;
            min: number;
            max: number;
        }[];
        bedroomOptions: number[];
    }>;
    findOne(slug: string): Promise<Villa>;
    create(villa: any): Promise<Villa>;
    update(id: string, villa: any): Promise<Villa>;
    delete(id: string): Promise<void>;
}
