import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AmenityCategory, AmenityCategoryDescriptions } from './enums/amenity-category.enum';

@Injectable()
export class AmenitiesService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.amenity.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ],
    });
  }

  getCategories() {
    return Object.keys(AmenityCategory)
      .filter((key) => !isNaN(Number(AmenityCategory[key as any])))
      .map((key) => {
        const id = Number(AmenityCategory[key as any]);
        return {
          id,
          name: AmenityCategoryDescriptions[id],
        };
      });
  }

  async create(data: any) {
    console.log("create data received:", data);
    const cat = data.category !== undefined ? parseInt(data.category, 10) : 6;
    return this.prisma.amenity.create({
      data: {
        slug: data.slug,
        name: data.name,
        icon: data.icon,
        category: isNaN(cat) ? 6 : cat,
      },
    });
  }

  async update(id: number, data: any) {
    if (data.slug) {
      const existing = await this.prisma.amenity.findUnique({ where: { slug: data.slug } });
      if (existing && existing.id !== id) {
        throw new Error("SLUG_EXISTS");
      }
    }

    const cat = data.category !== undefined ? parseInt(data.category, 10) : 6;
    return this.prisma.amenity.update({
      where: { id },
      data: {
        slug: data.slug,
        name: data.name,
        icon: data.icon,
        category: isNaN(cat) ? 6 : cat,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.amenity.delete({
      where: { id },
    });
  }
}

