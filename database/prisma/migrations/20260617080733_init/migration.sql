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
CREATE TABLE "villas" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "areaId" TEXT,
    "address" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "maxGuests" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "pricePerNight" DOUBLE PRECISION NOT NULL,
    "priceWeekend" DOUBLE PRECISION NOT NULL,
    "priceHoliday" DOUBLE PRECISION NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "checkIn" TEXT NOT NULL,
    "checkOut" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "villas_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "villa_images" (
    "id" TEXT NOT NULL,
    "villaId" TEXT,
    "data" BYTEA NOT NULL,
    "mimeType" TEXT NOT NULL DEFAULT 'image/jpeg',
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "villa_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villa_amenities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "villaId" TEXT NOT NULL,

    CONSTRAINT "villa_amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villa_highlights" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "villaId" TEXT NOT NULL,

    CONSTRAINT "villa_highlights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villa_policies" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "villaId" TEXT NOT NULL,

    CONSTRAINT "villa_policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT '',
    "date" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "villaId" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
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
    "description" TEXT,
    "imageUrl" TEXT,
    "isFamous" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "villas_slug_key" ON "villas"("slug");

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

-- AddForeignKey
ALTER TABLE "villa_images" ADD CONSTRAINT "villa_images_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "villa_amenities" ADD CONSTRAINT "villa_amenities_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "villa_highlights" ADD CONSTRAINT "villa_highlights_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "villa_policies" ADD CONSTRAINT "villa_policies_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
