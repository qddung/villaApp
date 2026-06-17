import { PrismaService } from '../prisma/prisma.service';
export declare class AreasService {
    private prisma;
    constructor(prisma: PrismaService);
    getFamousAreas(): Promise<{
        name: string;
        slug: string;
    }[]>;
}
