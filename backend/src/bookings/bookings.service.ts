import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BookingCreateInput) {
    return this.prisma.booking.create({
      data,
      include: {
        villa: {
          select: { name: true, area: true }
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
          select: { name: true, area: true }
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

  async remove(id: string) {
    return this.prisma.booking.delete({
      where: { id }
    });
  }
}
