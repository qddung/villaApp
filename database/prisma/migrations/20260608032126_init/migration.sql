-- CreateTable
CREATE TABLE "villas" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tagline" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "area" TEXT NOT NULL DEFAULT '',
    "areaSlug" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "bedrooms" INTEGER NOT NULL DEFAULT 3,
    "bathrooms" INTEGER NOT NULL DEFAULT 2,
    "maxGuests" INTEGER NOT NULL DEFAULT 8,
    "size" INTEGER NOT NULL DEFAULT 200,
    "pricePerNight" INTEGER NOT NULL DEFAULT 5000000,
    "priceWeekend" INTEGER NOT NULL DEFAULT 7000000,
    "priceHoliday" INTEGER NOT NULL DEFAULT 10000000,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "checkIn" TEXT NOT NULL DEFAULT '14:00',
    "checkOut" TEXT NOT NULL DEFAULT '12:00',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "lat" DOUBLE PRECISION NOT NULL DEFAULT 10.35,
    "lng" DOUBLE PRECISION NOT NULL DEFAULT 107.08,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "villas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villa_images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "villaId" TEXT NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "villas_slug_key" ON "villas"("slug");

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
