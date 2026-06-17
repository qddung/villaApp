import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<{
        token: string;
        user: any;
    }>;
    register(registerDto: Record<string, any>): Promise<{
        success: boolean;
        token?: string;
        user?: any;
    }>;
}
