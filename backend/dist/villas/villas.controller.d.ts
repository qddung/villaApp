import { VillasService } from './villas.service';
import type { Villa } from '../shared/types';
export declare class VillasController {
    private readonly villasService;
    constructor(villasService: VillasService);
    findAll(): Promise<import("../shared/types").VillaBasic[]>;
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
    create(villa: Villa): Promise<{
        success: boolean;
        villa: Villa;
    }>;
    update(id: string, villa: Villa): Promise<{
        success: boolean;
        villa: Villa;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
