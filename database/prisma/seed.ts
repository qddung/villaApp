import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface VillaJson {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  area: string;
  areaSlug: string;
  address: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  size: number;
  pricePerNight: number;
  priceWeekend: number;
  priceHoliday: number;
  amenities: string[];
  highlights: string[];
  rating: number;
  reviewCount: number;
  reviews: {
    id: string;
    author: string;
    avatar: string;
    date: string;
    rating: number;
    comment: string;
  }[];
  rules: {
    checkIn: string;
    checkOut: string;
    policies: string[];
  };
  coordinates: { lat: number; lng: number };
  featured: boolean;
}

async function main() {
  console.log('🌱 Seeding database...');

  // Read the existing JSON data
  const dataPath = path.join(__dirname, '..', '..', 'backend', 'src', 'data', 'villas.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const villas: VillaJson[] = JSON.parse(raw);

  for (const villa of villas) {
    console.log(`  → Seeding villa: ${villa.name}`);

    await prisma.villa.create({
      data: {
        id: villa.id,
        slug: villa.slug,
        name: villa.name,
        tagline: villa.tagline,
        description: villa.description,
        area: villa.area,
        areaSlug: villa.areaSlug,
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
        checkIn: villa.rules.checkIn,
        checkOut: villa.rules.checkOut,
        featured: villa.featured,
        lat: villa.coordinates.lat,
        lng: villa.coordinates.lng,

        images: {
          create: villa.images.map((url, index) => ({
            url,
            order: index,
          })),
        },

        amenities: {
          create: villa.amenities.map((name) => ({
            name,
          })),
        },

        highlights: {
          create: villa.highlights.map((text, index) => ({
            text,
            order: index,
          })),
        },

        policies: {
          create: villa.rules.policies.map((text, index) => ({
            text,
            order: index,
          })),
        },

        reviews: {
          create: villa.reviews.map((review) => ({
            id: review.id,
            author: review.author,
            avatar: review.avatar,
            date: review.date,
            rating: review.rating,
            comment: review.comment,
          })),
        },
      },
    });
  }

  console.log(`✅ Seeded ${villas.length} villas successfully!`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
