import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(identifier: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    updateProfile(id: string, data: {
        fullName?: string;
        phone?: string;
    }): Promise<User>;
}
