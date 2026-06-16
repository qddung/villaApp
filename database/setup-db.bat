@echo off
echo Starting MySQL Docker container...
docker-compose up -d

echo Waiting for MySQL to initialize (15 seconds)...
timeout /t 15

echo Generating full initial Prisma migration...
call npx prisma migrate dev --name init

echo Seeding database...
call npx prisma db seed

echo Done!
