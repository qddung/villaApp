-- CreateTable
CREATE TABLE `settings` (
    `id` VARCHAR(191) NOT NULL,
    `bookingConfirmationTemplate` VARCHAR(191) NULL,
    `contactEmail` VARCHAR(191) NULL,
    `contactPhone` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `villas` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tagline` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `areaId` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `bedrooms` INTEGER NOT NULL,
    `bathrooms` INTEGER NOT NULL,
    `maxGuests` INTEGER NOT NULL,
    `size` INTEGER NOT NULL,
    `pricePerNight` DOUBLE NOT NULL,
    `priceWeekend` DOUBLE NOT NULL,
    `priceHoliday` DOUBLE NOT NULL,
    `rating` DOUBLE NOT NULL,
    `reviewCount` INTEGER NOT NULL,
    `checkIn` VARCHAR(191) NOT NULL,
    `checkOut` VARCHAR(191) NOT NULL,
    `featured` BOOLEAN NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `villas_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bookings` (
    `id` VARCHAR(191) NOT NULL,
    `villaId` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `note` TEXT NULL,
    `checkIn` VARCHAR(191) NOT NULL,
    `checkOut` VARCHAR(191) NOT NULL,
    `guests` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `priceAtBooking` DOUBLE NULL,
    `bookingType` VARCHAR(191) NOT NULL DEFAULT 'APP',
    `status` VARCHAR(191) NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `villa_images` (
    `id` VARCHAR(191) NOT NULL,
    `villaId` VARCHAR(191) NULL,
    `data` LONGBLOB NOT NULL,
    `mimeType` VARCHAR(191) NOT NULL DEFAULT 'image/jpeg',
    `isMain` BOOLEAN NOT NULL DEFAULT false,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `villa_amenities` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `villaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `villa_highlights` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `villaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `villa_policies` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `villaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL DEFAULT '',
    `date` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `comment` TEXT NOT NULL,
    `villaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `areas` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `isFamous` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `areas_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `villas` ADD CONSTRAINT `villas_areaId_fkey` FOREIGN KEY (`areaId`) REFERENCES `areas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `villas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `villa_images` ADD CONSTRAINT `villa_images_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `villas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `villa_amenities` ADD CONSTRAINT `villa_amenities_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `villas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `villa_highlights` ADD CONSTRAINT `villa_highlights_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `villas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `villa_policies` ADD CONSTRAINT `villa_policies_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `villas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_villaId_fkey` FOREIGN KEY (`villaId`) REFERENCES `villas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
