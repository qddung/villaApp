import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) { }

  async getStats(tenantId: string) {
    const totalVillas = await this.prisma.villa.count({
      where: { tenantId }
    });

    const totalBookings = await this.prisma.booking.count({
      where: { tenantId }
    });

    const revenueResult = await this.prisma.booking.aggregate({
      _sum: {
        total: true
      },
      where: {
        tenantId,
        status: 'CONFIRMED'
      }
    });

    const revenue = revenueResult._sum.total || 0;

    // Mock occupancy rate for now
    const occupancyRate = totalVillas > 0 ? Math.min(Math.round((totalBookings * 2 / (totalVillas * 30)) * 100), 100) : 0;

    return {
      totalVillas,
      totalBookings,
      revenue,
      occupancyRate
    };
  }
}
