const { PrismaClient } = require('./node_modules/@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const villas = await prisma.villa.findMany();
  console.log(villas.map(v => ({ id: v.id, slug: v.slug })));
}
main().finally(() => prisma.$disconnect());
