-- Create a temporary column
ALTER TABLE "amenities" ADD COLUMN "categoryInt" INTEGER NOT NULL DEFAULT 6;

-- Map string values to integer values
UPDATE "amenities" SET "categoryInt" = 1 WHERE "category" = 'Tiện nghi trong nhà';
UPDATE "amenities" SET "categoryInt" = 2 WHERE "category" = 'Tiện nghi ngoài trời';
UPDATE "amenities" SET "categoryInt" = 3 WHERE "category" = 'Giải trí';
UPDATE "amenities" SET "categoryInt" = 4 WHERE "category" = 'Tiện nghi chung';
UPDATE "amenities" SET "categoryInt" = 5 WHERE "category" = 'Vị trí';
UPDATE "amenities" SET "categoryInt" = 6 WHERE "category" = 'Khác';

-- Drop the old column and rename
ALTER TABLE "amenities" DROP COLUMN "category";
ALTER TABLE "amenities" RENAME COLUMN "categoryInt" TO "category";
