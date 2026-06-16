const { PrismaClient } = require('./node_modules/@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const saved = await prisma.villa.create({
      data: {
        id: undefined,
        slug: 'test-slug-' + Date.now(),
        name: 'Test',
        tagline: 'Test',
        description: 'Test',
        address: 'Test',
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 1,
        size: 1,
        pricePerNight: 1,
        priceWeekend: 1,
        priceHoliday: 1,
        rating: 5,
        reviewCount: 0,
        checkIn: '14:00',
        checkOut: '12:00',
        featured: false,
        lat: 1,
        lng: 1,
      }
    });
    console.log("Created successfully:", saved.id);
  } catch (e) {
    console.error("Error creating:", e);
  }
}
main().finally(() => prisma.$disconnect());
