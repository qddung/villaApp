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

  // Create default tenant
  let tenant = await prisma.tenant.findFirst({
    where: { name: 'Villa Vung Tau Default' },
  });

  if (!tenant) {
    tenant = await prisma.tenant.create({
      data: {
        name: 'Villa Vung Tau Default',
        businessType: 'Villa Rental',
        status: 'active',
      },
    });
    console.log('Created default Tenant:', tenant.id);
  }

  // Insert initial admin user
  const adminExists = await prisma.user.findUnique({
    where: { username: 'admin' },
  });

  if (!adminExists) {
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
      data: {
        username: 'admin',
        email: 'admin@villavungtau.com',
        password: hashedPassword,
        fullName: 'System Admin',
        role: 'owner',
        tenantId: tenant.id,
      },
    });
    console.log('Seeded initial admin user: admin / admin123');
  } else {
    console.log('Admin user already exists.');
  }

  // Read the existing JSON data
  const dataPath = path.join(__dirname, '..', '..', 'backend', 'src', 'data', 'villas.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const villas: VillaJson[] = JSON.parse(raw);

  for (const villa of villas) {
    console.log(`  → Seeding villa: ${villa.name}`);

    await prisma.villa.upsert({
      where: { slug: villa.slug },
      update: {},
      create: {
        id: villa.id,
        tenantId: tenant.id,
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
