import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private prisma;
    constructor(usersService: UsersService, jwtService: JwtService, prisma: PrismaService);
    signIn(username: string, pass: string): Promise<{
        token: string;
        user: any;
    }>;
    register(data: any): Promise<{
        success: boolean;
        token?: string;
        user?: any;
    }>;
}
