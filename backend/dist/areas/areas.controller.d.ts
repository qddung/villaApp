import { AreasService } from './areas.service';
export declare class AreasController {
    private readonly areasService;
    constructor(areasService: AreasService);
    getFamousAreas(): Promise<{
        name: string;
        slug: string;
    }[]>;
}
