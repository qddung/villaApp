import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    getSettings(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bookingConfirmationTemplate: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
    updateSettings(updateData: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bookingConfirmationTemplate: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
}
