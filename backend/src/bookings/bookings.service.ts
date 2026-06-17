import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../prisma/generated/client';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BookingCreateInput) {
    return this.prisma.booking.create({
      data,
      include: {
        villa: {
          select: { name: true, areaObj: { select: { name: true } } }
        }
      }
    });
  }

  async findAll() {
    return this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        villa: {
          select: { name: true }
        }
      }
    });
  }

  async findOne(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        villa: {
          select: { name: true, areaObj: { select: { name: true } } }
        }
      }
    });
    if (!booking) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }
    return booking;
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.booking.update({
      where: { id },
      data: { status }
    });
  }

  async update(id: string, data: { name?: string; email?: string; phone?: string; checkIn?: string; checkOut?: string; guests?: number; villaId?: string; note?: string; total?: number; priceAtBooking?: number }) {
    return this.prisma.booking.update({
      where: { id },
      data,
      include: {
        villa: {
          select: { name: true, areaObj: { select: { name: true } } }
        }
      }
    });
  }

  async remove(id: string) {
    return this.prisma.booking.delete({
      where: { id }
    });
  }
}
