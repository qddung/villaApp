"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VillasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const images_service_1 = require("../images/images.service");
const villaIncludes = {
    areaObj: true,
    images: { orderBy: { order: 'asc' }, select: { id: true, isMain: true, order: true } },
    amenities: true,
    highlights: { orderBy: { order: 'asc' } },
    policies: { orderBy: { order: 'asc' } },
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
    amenities: true,
    images: { where: { isMain: true }, select: { id: true, isMain: true, order: true }, take: 1 },
};
function toVillaBasicDto(dbVilla) {
    return {
        id: dbVilla.id,
        slug: dbVilla.slug,
        name: dbVilla.name,
        tagline: dbVilla.tagline,
        area: dbVilla.areaObj?.name || 'Unknown',
        areaSlug: dbVilla.areaObj?.slug || 'unknown',
        address: dbVilla.address,
        images: dbVilla.images.map((img) => ({
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
        amenities: (dbVilla.amenities || []).map((a) => a.name),
    };
}
function toVillaDto(dbVilla) {
    return {
        ...toVillaBasicDto(dbVilla),
        description: dbVilla.description,
        priceWeekend: dbVilla.priceWeekend,
        priceHoliday: dbVilla.priceHoliday,
        amenities: dbVilla.amenities.map((a) => a.name),
        highlights: dbVilla.highlights.map((h) => h.text),
        reviews: dbVilla.reviews.map((r) => ({
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
            policies: dbVilla.policies.map((p) => p.text),
        },
        coordinates: { lat: dbVilla.lat, lng: dbVilla.lng },
    };
}
let VillasService = class VillasService {
    prisma;
    imagesService;
    constructor(prisma, imagesService) {
        this.prisma = prisma;
        this.imagesService = imagesService;
    }
    async findAll() {
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
    async findOne(slug) {
        const villa = await this.prisma.villa.findUnique({
            where: { slug },
            include: villaIncludes,
        });
        if (!villa) {
            throw new common_1.NotFoundException(`Villa with slug ${slug} not found`);
        }
        return toVillaDto(villa);
    }
    async create(villa) {
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
            include: villaIncludes,
        });
        await this.imagesService.syncVillaImages(saved.id, newImageIds, []);
        const result = await this.prisma.villa.findUnique({ where: { id: saved.id }, include: villaIncludes });
        return toVillaDto(result);
    }
    async update(id, villa) {
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
        await this.imagesService.syncVillaImages(saved.id, newImageIds, deleteImageIds);
        const result = await this.prisma.villa.findUnique({ where: { id: saved.id }, include: villaIncludes });
        return toVillaDto(result);
    }
    async delete(id) {
        await this.prisma.villa.delete({ where: { id } });
    }
};
exports.VillasService = VillasService;
exports.VillasService = VillasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        images_service_1.ImagesService])
], VillasService);
//# sourceMappingURL=villas.service.js.map