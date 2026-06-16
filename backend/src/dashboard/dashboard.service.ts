import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) { }

  async getStats() {
    const totalVillas = await this.prisma.villa.count();

    const totalBookings = await this.prisma.booking.count();

    const revenueResult = await this.prisma.booking.aggregate({
      _sum: {
        total: true
      },
      where: {
        status: 'CONFIRMED'
      }
    });

    const revenue = revenueResult._sum.total || 0;

    const newBookings = await this.prisma.booking.count({
      where: {
        status: 'PENDING'
      }
    });

    return {
      totalVillas,
      totalBookings,
      revenue,
      newBookings
    };
  }
}
