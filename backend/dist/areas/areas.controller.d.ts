import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
export declare class AreasController {
    private readonly areasService;
    constructor(areasService: AreasService);
    findAll(): Promise<({
        _count: {
            villas: number;
        };
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        isFamous: boolean;
    })[]>;
    create(createAreaDto: CreateAreaDto): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        isFamous: boolean;
    }>;
    update(id: string, updateAreaDto: UpdateAreaDto): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        isFamous: boolean;
    }>;
    getFamousAreas(): Promise<{
        id: string;
        slug: string;
        name: string;
        description: string;
        image: string;
        villaCount: number;
    }[]>;
}
