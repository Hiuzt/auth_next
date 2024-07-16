-- AlterTable
ALTER TABLE `documents` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Documentaddons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `documentId` INTEGER NOT NULL,

    UNIQUE INDEX `Documentaddons_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Documentaddons` ADD CONSTRAINT `Documentaddons_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
