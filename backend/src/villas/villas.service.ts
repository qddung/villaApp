import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ImagesService } from '../images/images.service';
import type { Villa, VillaBasic } from '../shared/types';

const villaIncludes = {
  areaObj: true,
  images: { orderBy: { order: 'asc' as const }, select: { id: true, isMain: true, order: true } },
  amenities: { include: { amenity: true } },
  highlights: { orderBy: { order: 'asc' as const } },
  policies: { orderBy: { order: 'asc' as const } },
  reviews: true,
};

const villaBasicSelect = {
  id: true,
  slug: true,
  name: true,
  tagline: true,
  address: true,
  bedrooms: true,
  bathrooms: true,
  maxGuests: true,
  size: true,
  pricePerNight: true,
  rating: true,
  reviewCount: true,
  featured: true,
  areaObj: { select: { name: true, slug: true } },
  amenities: { include: { amenity: true } },
  images: { where: { isMain: true }, select: { id: true, isMain: true, order: true }, take: 1 },
};

function toVillaBasicDto(dbVilla: any): VillaBasic {
  return {
    id: dbVilla.id,
    slug: dbVilla.slug,
    name: dbVilla.name,
    tagline: dbVilla.tagline,
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
    rating: dbVilla.rating,
    reviewCount: dbVilla.reviewCount,
    featured: dbVilla.featured,
    amenities: (dbVilla.amenities || []).map((a: any) => a.amenity),
  };
}

/** Map a Prisma villa (with relations) to the frontend Villa shape */
function toVillaDto(dbVilla: any): Villa {
  return {
    ...toVillaBasicDto(dbVilla),
    description: dbVilla.description,
    priceWeekend: dbVilla.priceWeekend,
    priceHoliday: dbVilla.priceHoliday,
    amenities: dbVilla.amenities.map((a: any) => a.amenity),
    highlights: dbVilla.highlights.map((h: any) => h.text),
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
  };
}

@Injectable()
export class VillasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imagesService: ImagesService,
  ) {}

  async findAll(): Promise<VillaBasic[]> {
    const villas = await this.prisma.villa.findMany({
      select: villaBasicSelect,
      orderBy: { createdAt: 'desc' },
    });
    return villas.map(toVillaBasicDto);
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

    const amenitiesDb = await this.prisma.amenity.findMany({
      orderBy: { name: 'asc' },
    });
    const amenities = amenitiesDb.map((a) => a.name);

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

  async create(villa: any): Promise<Villa> {
    const areaRecord = await this.prisma.area.findUnique({
      where: { slug: villa.areaSlug },
    });
    
    if (!areaRecord) {
      throw new Error(`Area with slug ${villa.areaSlug} not found. Please create it first.`);
    }

    const newImageIds = villa.newImages || [];

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

    const saved = await this.prisma.villa.create({
      data: {
        id: villa.id || undefined,
        ...data,
        amenities: {
          create: (villa.amenities || [])
            .map((item: any) => Number(typeof item === 'object' && item !== null ? item.id : item))
            .filter((id: number) => !isNaN(id) && id > 0)
            .map((amenityId: number) => ({ amenityId })),
        },
        highlights: {
          create: (villa.highlights || []).map((text: string, i: number) => ({ text, order: i })),
        },
        policies: {
          create: (villa.rules?.policies || []).map((text: string, i: number) => ({ text, order: i })),
        },
        reviews: {
          create: (villa.reviews || []).map((r: any) => ({
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

    await this.imagesService.syncVillaImages(saved.id, newImageIds, []);
    const result = await this.prisma.villa.findUnique({ where: { id: saved.id }, include: villaIncludes });
    return toVillaDto(result);
  }

  async update(id: string, villa: any): Promise<Villa> {
    const areaRecord = await this.prisma.area.findUnique({
      where: { slug: villa.areaSlug },
    });
    
    if (!areaRecord) {
      throw new Error(`Area with slug ${villa.areaSlug} not found. Please create it first.`);
    }

    const newImageIds = villa.newImages || [];
    const deleteImageIds = villa.deleteImages || [];

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

    const saved = await this.prisma.villa.update({
      where: { id },
      data: {
        ...data,
        amenities: {
          deleteMany: {},
          create: (villa.amenities || [])
            .map((item: any) => Number(typeof item === 'object' && item !== null ? item.id : item))
            .filter((id: number) => !isNaN(id) && id > 0)
            .map((amenityId: number) => ({ amenityId })),
        },
        highlights: {
          deleteMany: {},
          create: (villa.highlights || []).map((text: string, i: number) => ({ text, order: i })),
        },
        policies: {
          deleteMany: {},
          create: (villa.rules?.policies || []).map((text: string, i: number) => ({ text, order: i })),
        },
        reviews: {
          deleteMany: {},
          create: (villa.reviews || []).map((r: any) => ({
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

    await this.imagesService.syncVillaImages(saved.id, newImageIds, deleteImageIds);
    const result = await this.prisma.villa.findUnique({ where: { id: saved.id }, include: villaIncludes });
    return toVillaDto(result);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.villa.delete({ where: { id } });
  }
}
