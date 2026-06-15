import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AreasService {
  constructor(private prisma: PrismaService) { }

  async getFamousAreas() {
    return this.prisma.area.findMany({
      where: {
        isFamous: true,
      },
      select: {
        slug: true,
        name: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}
