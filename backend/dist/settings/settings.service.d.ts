import { PrismaService } from '../prisma/prisma.service';
export declare class SettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    getSettings(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bookingConfirmationTemplate: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
    updateSettings(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bookingConfirmationTemplate: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
}
