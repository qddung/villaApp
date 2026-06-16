import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ImagesService } from '../images/images.service';
import type { Villa } from '../shared/types';

const villaIncludes = {
  areaObj: true,
  images: { orderBy: { order: 'asc' as const }, select: { id: true, isMain: true, order: true } },
  amenities: true,
  highlights: { orderBy: { order: 'asc' as const } },
  policies: { orderBy: { order: 'asc' as const } },
  reviews: true,
};

/** Map a Prisma villa (with relations) to the frontend Villa shape */
function toVillaDto(dbVilla: any): Villa {
  return {
    id: dbVilla.id,
    slug: dbVilla.slug,
    name: dbVilla.name,
    tagline: dbVilla.tagline,
    description: dbVilla.description,
    area: dbVilla.areaObj?.name || 'Unknown',
    areaSlug: dbVilla.areaObj?.slug || 'unknown',
    address: dbVilla.address,
    images: dbVilla.images.map((img: any) => ({
      id: img.id,
      url: `/api/villa-image/${img.id}`,
      isMain: img.isMain,
    })),
    bedrooms: dbVilla.bedrooms,
    bathrooms: dbVilla.bathrooms,
    maxGuests: dbVilla.maxGuests,
    size: dbVilla.size,
    pricePerNight: dbVilla.pricePerNight,
    priceWeekend: dbVilla.priceWeekend,
    priceHoliday: dbVilla.priceHoliday,
    amenities: dbVilla.amenities.map((a: any) => a.name),
    highlights: dbVilla.highlights.map((h: any) => h.text),
    rating: dbVilla.rating,
    reviewCount: dbVilla.reviewCount,
    reviews: dbVilla.reviews.map((r: any) => ({
      id: r.id,
      author: r.author,
      avatar: r.avatar,
      date: r.date,
      rating: r.rating,
      comment: r.comment,
    })),
    rules: {
      checkIn: dbVilla.checkIn,
      checkOut: dbVilla.checkOut,
      policies: dbVilla.policies.map((p: any) => p.text),
    },
    coordinates: { lat: dbVilla.lat, lng: dbVilla.lng },
    featured: dbVilla.featured,
  };
}

@Injectable()
export class VillasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imagesService: ImagesService,
  ) {}

  async findAll(): Promise<Villa[]> {
    const villas = await this.prisma.villa.findMany({
      include: villaIncludes,
      orderBy: { createdAt: 'desc' },
    });
    return villas.map(toVillaDto);
  }

  async getDefaultFilters() {
    const areasDb = await this.prisma.area.findMany({
      include: {
        _count: {
          select: { villas: true },
        },
      },
    });

    const areas = areasDb.map((a) => ({
      slug: a.slug,
      name: a.name,
      villaCount: a._count.villas,
    }));

    const amenitiesDb = await this.prisma.villaAmenity.groupBy({
      by: ['name'],
    });
    const amenities = amenitiesDb.map((a) => a.name).sort();

    const priceRanges = [
      { label: 'Dưới 5 triệu', min: 0, max: 5000000 },
      { label: '5 - 8 triệu', min: 5000000, max: 8000000 },
      { label: '8 - 12 triệu', min: 8000000, max: 12000000 },
      { label: 'Trên 12 triệu', min: 12000000, max: 999999999 },
    ];

    const bedroomOptions = [1, 2, 3, 4, 5];

    return {
      areas,
      amenities,
      priceRanges,
      bedroomOptions,
    };
  }

  async findOne(slug: string): Promise<Villa> {
    const villa = await this.prisma.villa.findUnique({
      where: { slug },
      include: villaIncludes,
    });
    if (!villa) {
      throw new NotFoundException(`Villa with slug ${slug} not found`);
    }
    return toVillaDto(villa);
  }

  async save(villa: Villa): Promise<Villa> {
    const areaRecord = await this.prisma.area.findUnique({
      where: { slug: villa.areaSlug },
    });
    
    if (!areaRecord) {
      throw new Error(`Area with slug ${villa.areaSlug} not found. Please create it first.`);
    }

    // Process image tags from frontend
    const newImageIds = (villa.images || [])
      .filter((img) => img.tag === 'new')
      .map((img) => img.id);
    
    const deleteImageIds = (villa.images || [])
      .filter((img) => img.tag === 'delete')
      .map((img) => img.id);

    const data = {
      slug: villa.slug,
      name: villa.name,
      tagline: villa.tagline,
      description: villa.description,
      areaId: areaRecord.id,
      address: villa.address,
      bedrooms: villa.bedrooms,
      bathrooms: villa.bathrooms,
      maxGuests: villa.maxGuests,
      size: villa.size,
      pricePerNight: villa.pricePerNight,
      priceWeekend: villa.priceWeekend,
      priceHoliday: villa.priceHoliday,
      rating: villa.rating,
      reviewCount: villa.reviewCount,
      checkIn: villa.rules?.checkIn ?? '14:00',
      checkOut: villa.rules?.checkOut ?? '12:00',
      featured: villa.featured,
      lat: villa.coordinates?.lat ?? 10.35,
      lng: villa.coordinates?.lng ?? 107.08,
    };

    const saved = await this.prisma.villa.upsert({
      where: { id: villa.id || '' },
      create: {
        id: villa.id || undefined,
        ...data,
        amenities: {
          create: (villa.amenities || []).map((name) => ({ name })),
        },
        highlights: {
          create: (villa.highlights || []).map((text, i) => ({ text, order: i })),
        },
        policies: {
          create: (villa.rules?.policies || []).map((text, i) => ({ text, order: i })),
        },
        reviews: {
          create: (villa.reviews || []).map((r) => ({
            id: r.id || undefined,
            author: r.author,
            avatar: r.avatar,
            date: r.date,
            rating: r.rating,
            comment: r.comment,
          })),
        },
      },
      update: {
        ...data,
        amenities: {
          deleteMany: {},
          create: (villa.amenities || []).map((name) => ({ name })),
        },
        highlights: {
          deleteMany: {},
          create: (villa.highlights || []).map((text, i) => ({ text, order: i })),
        },
        policies: {
          deleteMany: {},
          create: (villa.rules?.policies || []).map((text, i) => ({ text, order: i })),
        },
        reviews: {
          deleteMany: {},
          create: (villa.reviews || []).map((r) => ({
            id: r.id || undefined,
            author: r.author,
            avatar: r.avatar,
            date: r.date,
            rating: r.rating,
            comment: r.comment,
          })),
        },
      },
      include: villaIncludes,
    });

    // Sync images: attach new ones, delete removed ones
    await this.imagesService.syncVillaImages(saved.id, newImageIds, deleteImageIds);

    // Re-fetch to get updated images
    const result = await this.prisma.villa.findUnique({
      where: { id: saved.id },
      include: villaIncludes,
    });

    return toVillaDto(result);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.villa.delete({ where: { id } });
  }
}
