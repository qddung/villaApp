import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(): Promise<{
        totalVillas: number;
        totalBookings: number;
        revenue: number;
        newBookings: number;
    }>;
}
