import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PricingService {
  constructor(private prisma: PrismaService) {}

  async create(villaId: string, data: any, tenantId: string) {
    const villa = await this.prisma.villa.findFirst({
      where: { id: villaId, tenantId },
    });
    if (!villa) throw new NotFoundException('Villa not found');

    return this.prisma.seasonalPrice.create({
      data: {
        villaId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        price: data.price,
        type: data.type,
      },
    });
  }

  async findAll(villaId: string, tenantId: string) {
    const villa = await this.prisma.villa.findFirst({
      where: { id: villaId, tenantId },
    });
    if (!villa) throw new NotFoundException('Villa not found');

    return this.prisma.seasonalPrice.findMany({
      where: { villaId },
      orderBy: { startDate: 'asc' },
    });
  }

  async update(id: string, data: any, tenantId: string) {
    const price = await this.prisma.seasonalPrice.findUnique({
      where: { id },
      include: { villa: true },
    });
    if (!price || price.villa.tenantId !== tenantId) throw new NotFoundException('Seasonal price not found');

    return this.prisma.seasonalPrice.update({
      where: { id },
      data: {
        ...(data.startDate && { startDate: new Date(data.startDate) }),
        ...(data.endDate && { endDate: new Date(data.endDate) }),
        ...(data.price && { price: data.price }),
        ...(data.type && { type: data.type }),
      },
    });
  }

  async remove(id: string, tenantId: string) {
    const price = await this.prisma.seasonalPrice.findUnique({
      where: { id },
      include: { villa: true },
    });
    if (!price || price.villa.tenantId !== tenantId) throw new NotFoundException('Seasonal price not found');

    return this.prisma.seasonalPrice.delete({
      where: { id },
    });
  }
}
