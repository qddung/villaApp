const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE villa_amenities CASCADE');
  await prisma.$executeRawUnsafe('TRUNCATE TABLE amenities CASCADE');
  console.log("Truncated");
}

run().catch(console.error).finally(() => prisma.$disconnect());
