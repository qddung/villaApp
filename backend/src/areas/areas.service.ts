import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.area.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { villas: true }
        }
      }
    });
  }

  async create(createAreaDto: CreateAreaDto) {
    const existing = await this.prisma.area.findUnique({
      where: { slug: createAreaDto.slug }
    });
    if (existing) {
      throw new ConflictException('Area with this slug already exists');
    }

    return this.prisma.area.create({
      data: createAreaDto
    });
  }

  async update(id: string, updateAreaDto: UpdateAreaDto) {
    const existing = await this.prisma.area.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException('Area not found');
    }

    if (updateAreaDto.slug && updateAreaDto.slug !== existing.slug) {
      const slugExists = await this.prisma.area.findUnique({
        where: { slug: updateAreaDto.slug }
      });
      if (slugExists) {
        throw new ConflictException('Area with this slug already exists');
      }
    }

    return this.prisma.area.update({
      where: { id },
      data: updateAreaDto
    });
  }

  async getFamousAreas() {
    const areas = await this.prisma.area.findMany({
      where: {
        isFamous: true,
      },
      select: {
        id: true,
        slug: true,
        name: true,
        description: true,
        imageUrl: true,
        _count: {
          select: { villas: true }
        }
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return areas.map(area => ({
      id: area.id,
      slug: area.slug,
      name: area.name,
      description: area.description || '',
      image: area.imageUrl || '',
      villaCount: area._count.villas,
    }));
  }
}
