import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<{
        profile: {
            id: string;
            email: string | null;
            full_name: string | null;
            phone: string | null;
            role: string;
            created_at: Date;
        };
    }>;
    updateProfile(req: any, updateData: {
        fullName?: string;
        phone?: string;
    }): Promise<{
        success: boolean;
    }>;
}
