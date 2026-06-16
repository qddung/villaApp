const { PrismaClient } = require('./node_modules/@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
  const images = await prisma.villaImage.findMany();
  for (const img of images) {
    console.log(`Image ${img.id}: size=${img.data.length}`);
    fs.writeFileSync(`test-${img.id}.jpg`, img.data);
  }
  console.log("Done");
}
main().finally(() => prisma.$disconnect());
