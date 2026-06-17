import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getStats(): Promise<{
        totalVillas: number;
        totalBookings: number;
        revenue: number;
        newBookings: number;
    }>;
}
