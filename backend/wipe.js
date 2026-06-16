const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.tenant.deleteMany({});
  console.log('Wiped all users and tenants');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
