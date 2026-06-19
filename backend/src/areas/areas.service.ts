import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    const areas = await this.prisma.area.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { villas: true }
        },
        image: {
          select: { id: true }
        }
      }
    });
    
    return areas.map(area => {
      const { image, ...rest } = area;
      return {
        ...rest,
        imageUrl: image ? `/api/areas/${area.id}/image` : null
      };
    });
  }

  async create(createAreaDto: CreateAreaDto, file?: Express.Multer.File) {
    const existing = await this.prisma.area.findUnique({
      where: { slug: createAreaDto.slug }
    });
    if (existing) {
      throw new ConflictException('Area with this slug already exists');
    }

    return this.prisma.area.create({
      data: {
        ...createAreaDto,
        image: file ? {
          create: {
            data: file.buffer as any,
            mimeType: file.mimetype
          }
        } : undefined
      }
    });
  }

  async update(id: string, updateAreaDto: UpdateAreaDto, file?: Express.Multer.File) {
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
      data: {
        ...updateAreaDto,
        image: file ? {
          upsert: {
            create: {
              data: file.buffer as any,
              mimeType: file.mimetype
            },
            update: {
              data: file.buffer as any,
              mimeType: file.mimetype
            }
          }
        } : undefined
      }
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
        image: { select: { id: true } },
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
      image: area.image ? `/api/areas/${area.id}/image` : '',
      villaCount: area._count.villas,
    }));
  }

  async getImage(areaId: string) {
    const imageArea = await this.prisma.imageArea.findUnique({
      where: { areaId }
    });
    if (!imageArea) {
      throw new NotFoundException('Image not found for this area');
    }
    return imageArea;
  }
}
