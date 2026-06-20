/*
  Warnings:
  - The primary key for the `amenities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `amenities` table would be dropped and recreated. This will lead to data loss.
  - The primary key for the `villa_amenities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[slug]` on the table `amenities` will be added. If there are existing duplicate values, this will fail.
*/
-- DropForeignKey

DELETE FROM  "villa_amenities";
ALTER TABLE "villa_amenities" DROP CONSTRAINT "villa_amenities_amenityId_fkey";

-- AlterTable
ALTER TABLE "amenities" DROP CONSTRAINT "amenities_pkey";
ALTER TABLE "amenities" RENAME COLUMN "id" TO "slug";
ALTER TABLE "amenities" ADD COLUMN "id" SERIAL NOT NULL;
ALTER TABLE "amenities" ADD CONSTRAINT "amenities_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "amenities_slug_key" ON "amenities"("slug");

-- AlterTable
ALTER TABLE "villa_amenities" DROP CONSTRAINT "villa_amenities_pkey";
ALTER TABLE "villa_amenities" DROP COLUMN "amenityId";
ALTER TABLE "villa_amenities" ADD COLUMN "amenityId" INTEGER NOT NULL;
ALTER TABLE "villa_amenities" ADD CONSTRAINT "villa_amenities_pkey" PRIMARY KEY ("villaId", "amenityId");

-- AddForeignKey
ALTER TABLE "villa_amenities" ADD CONSTRAINT "villa_amenities_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "amenities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
