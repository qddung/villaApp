/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `areas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "areas" DROP COLUMN "imageUrl";

-- CreateTable
CREATE TABLE "image_areas" (
    "id" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "data" BYTEA NOT NULL,
    "mimeType" TEXT NOT NULL DEFAULT 'image/jpeg',

    CONSTRAINT "image_areas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "image_areas_areaId_key" ON "image_areas"("areaId");

-- AddForeignKey
ALTER TABLE "image_areas" ADD CONSTRAINT "image_areas_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
