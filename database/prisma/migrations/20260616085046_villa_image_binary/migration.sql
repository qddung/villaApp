/*
  Warnings:

  - You are about to drop the column `url` on the `villa_images` table. All the data in the column will be lost.
  - You are about to drop the column `area` on the `villas` table. All the data in the column will be lost.
  - You are about to drop the column `areaSlug` on the `villas` table. All the data in the column will be lost.
  - Added the required column `data` to the `villa_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "villa_images" DROP COLUMN "url",
ADD COLUMN     "data" BYTEA NOT NULL,
ADD COLUMN     "isMain" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mimeType" TEXT NOT NULL DEFAULT 'image/jpeg',
ALTER COLUMN "villaId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "villas" DROP COLUMN "area",
DROP COLUMN "areaSlug",
ADD COLUMN     "areaId" TEXT,
ALTER COLUMN "tagline" DROP DEFAULT,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "address" DROP DEFAULT,
ALTER COLUMN "bedrooms" DROP DEFAULT,
ALTER COLUMN "bathrooms" DROP DEFAULT,
ALTER COLUMN "maxGuests" DROP DEFAULT,
ALTER COLUMN "size" DROP DEFAULT,
ALTER COLUMN "pricePerNight" DROP DEFAULT,
ALTER COLUMN "pricePerNight" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "priceWeekend" DROP DEFAULT,
ALTER COLUMN "priceWeekend" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "priceHoliday" DROP DEFAULT,
ALTER COLUMN "priceHoliday" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "rating" DROP DEFAULT,
ALTER COLUMN "reviewCount" DROP DEFAULT,
ALTER COLUMN "checkIn" DROP DEFAULT,
ALTER COLUMN "checkOut" DROP DEFAULT,
ALTER COLUMN "featured" DROP DEFAULT,
ALTER COLUMN "lat" DROP DEFAULT,
ALTER COLUMN "lng" DROP DEFAULT;

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL,
    "bookingConfirmationTemplate" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "villaId" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "note" TEXT,
    "checkIn" TEXT NOT NULL,
    "checkOut" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "priceAtBooking" DOUBLE PRECISION,
    "bookingType" TEXT NOT NULL DEFAULT 'APP',
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "fullName" TEXT,
    "phone" TEXT,
    "role" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isFamous" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "areas_slug_key" ON "areas"("slug");

-- AddForeignKey
ALTER TABLE "villas" ADD CONSTRAINT "villas_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
