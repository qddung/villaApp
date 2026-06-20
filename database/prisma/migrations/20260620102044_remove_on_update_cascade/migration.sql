-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_villaId_fkey";

-- DropForeignKey
ALTER TABLE "image_areas" DROP CONSTRAINT "image_areas_areaId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_villaId_fkey";

-- DropForeignKey
ALTER TABLE "villa_amenities" DROP CONSTRAINT "villa_amenities_amenityId_fkey";

-- DropForeignKey
ALTER TABLE "villa_amenities" DROP CONSTRAINT "villa_amenities_villaId_fkey";

-- DropForeignKey
ALTER TABLE "villa_highlights" DROP CONSTRAINT "villa_highlights_villaId_fkey";

-- DropForeignKey
ALTER TABLE "villa_images" DROP CONSTRAINT "villa_images_villaId_fkey";

-- DropForeignKey
ALTER TABLE "villa_policies" DROP CONSTRAINT "villa_policies_villaId_fkey";

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "villa_images" ADD CONSTRAINT "villa_images_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "villa_amenities" ADD CONSTRAINT "villa_amenities_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "villa_amenities" ADD CONSTRAINT "villa_amenities_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "amenities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "villa_highlights" ADD CONSTRAINT "villa_highlights_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "villa_policies" ADD CONSTRAINT "villa_policies_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_villaId_fkey" FOREIGN KEY ("villaId") REFERENCES "villas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "image_areas" ADD CONSTRAINT "image_areas_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
