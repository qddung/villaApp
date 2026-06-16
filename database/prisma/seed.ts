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
        role: 'admin',
      },
    });
    console.log('Seeded initial admin user: admin / admin123');
  } else {
    console.log('Admin user already exists.');
  }

  // Seed predefined areas first
  const initialAreas = [
    { slug: 'bai-sau', name: 'Bãi Sau', isFamous: true },
    { slug: 'ho-tram', name: 'Hồ Tràm', isFamous: true },
    { slug: 'long-hai', name: 'Long Hải', isFamous: true },
    { slug: 'bai-truoc', name: 'Bãi Trước', isFamous: false },
  ];

  const areaMap = new Map<string, string>();

  for (const area of initialAreas) {
    const createdArea = await prisma.area.upsert({
      where: { slug: area.slug },
      update: {
        name: area.name,
        isFamous: area.isFamous,
      },
      create: {
        slug: area.slug,
        name: area.name,
        isFamous: area.isFamous,
      },
    });
    areaMap.set(area.slug, createdArea.id);
  }
  console.log(`✅ Seeded predefined areas successfully!`);

  // Read the existing JSON data
  const dataPath = path.join(__dirname, '..', '..', 'backend', 'src', 'data', 'villas.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const villas: VillaJson[] = JSON.parse(raw);

  for (const villa of villas) {
    console.log(`  → Seeding villa: ${villa.name}`);

    let areaId = areaMap.get(villa.areaSlug);
    if (!areaId) {
      // Create area if it doesn't exist
      const newArea = await prisma.area.upsert({
        where: { slug: villa.areaSlug },
        update: {},
        create: {
          slug: villa.areaSlug,
          name: villa.area,
        },
      });
      areaId = newArea.id;
      areaMap.set(villa.areaSlug, areaId);
    }

    await prisma.villa.upsert({
      where: { slug: villa.slug },
      update: {
        areaId: areaId
      },
      create: {
        id: villa.id,
        slug: villa.slug,
        name: villa.name,
        tagline: villa.tagline,
        description: villa.description,
        areaId: areaId,
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

        // Images: read from local files if available
        images: {
          create: await (async () => {
            const imgDir = path.join(__dirname, '..', '..', 'backend', 'public', 'img', 'villa_data', villa.slug);
            const results: any[] = [];
            
            if (fs.existsSync(imgDir)) {
              // Main image
              const mainFiles = fs.readdirSync(imgDir).filter(f => f.startsWith('main') && /\.(jpg|jpeg|png|webp)$/i.test(f));
              if (mainFiles.length > 0) {
                const mainPath = path.join(imgDir, mainFiles[0]);
                const ext = path.extname(mainFiles[0]).toLowerCase();
                const mimeMap: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
                results.push({ data: new Uint8Array(fs.readFileSync(mainPath)), mimeType: mimeMap[ext] || 'image/jpeg', isMain: true, order: 0 });
              }
              
              // Detail images
              const detailsDir = path.join(imgDir, 'details');
              if (fs.existsSync(detailsDir)) {
                const detailFiles = fs.readdirSync(detailsDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort();
                detailFiles.forEach((f, i) => {
                  const ext = path.extname(f).toLowerCase();
                  const mimeMap: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
                  results.push({ data: new Uint8Array(fs.readFileSync(path.join(detailsDir, f))), mimeType: mimeMap[ext] || 'image/jpeg', isMain: false, order: i + 1 });
                });
              }
            }
            
            return results;
          })(),
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
