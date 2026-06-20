/*
  Warnings:

  - The primary key for the `villa_amenities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `villa_amenities` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `villa_amenities` table. All the data in the column will be lost.
  - Added the required column `amenityId` to the `villa_amenities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
DELETE FROM "villa_amenities";
ALTER TABLE "villa_amenities" DROP CONSTRAINT "villa_amenities_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "amenityId" TEXT NOT NULL,
ADD CONSTRAINT "villa_amenities_pkey" PRIMARY KEY ("villaId", "amenityId");

-- CreateTable
CREATE TABLE "amenities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "amenities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "villa_amenities" ADD CONSTRAINT "villa_amenities_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Seed amenities
INSERT INTO amenities (id, name, icon, category) VALUES
  ('garden', 'Sân vườn', 'TreePine', 'Tiện nghi ngoài trời'),
  ('bbq', 'Khu BBQ', 'Flame', 'Tiện nghi ngoài trời'),
  ('wifi', 'WiFi tốc độ cao', 'Wifi', 'Tiện nghi trong nhà'),
  ('ac', 'Máy lạnh', 'Wind', 'Tiện nghi trong nhà'),
  ('kitchen', 'Bếp đầy đủ', 'CookingPot', 'Tiện nghi trong nhà'),
  ('parking', 'Bãi đỗ xe', 'Car', 'Tiện nghi chung'),
  ('security', 'An ninh 24/7', 'Shield', 'Tiện nghi chung'),
  ('karaoke', 'Phòng karaoke', 'Music', 'Giải trí'),
  ('gym', 'Phòng gym', 'Dumbbell', 'Giải trí'),
  ('jacuzzi', 'Jacuzzi', 'Bath', 'Tiện nghi trong nhà'),
  ('tv', 'Smart TV', 'Tv', 'Tiện nghi trong nhà'),
  ('washer', 'Máy giặt', 'WashingMachine', 'Tiện nghi trong nhà'),
  ('elevator', 'Thang máy', 'ArrowUpDown', 'Tiện nghi chung'),
  ('beach-access', 'Gần biển', 'Umbrella', 'Vị trí'),
  ('billiards', 'Phòng Billiards', 'CircleDot', 'Giải trí'),
  ('waterfall-pool', 'Hồ bơi thác nước', 'Droplets', 'Tiện nghi ngoài trời');
