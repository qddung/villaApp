const { PrismaClient } = require('./node_modules/@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const buf = Buffer.from('hello world');
    const image = await prisma.villaImage.create({
      data: {
        data: buf,
        mimeType: 'text/plain',
        isMain: false,
      }
    });
    console.log("Created successfully:", image.id);
  } catch (e) {
    console.error("Error creating:", e);
  }
}
main().finally(() => prisma.$disconnect());
