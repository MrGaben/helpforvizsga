/*
  Warnings:

  - You are about to drop the column `readerId` on the `book` table. All the data in the column will be lost.
  - Added the required column `readerId` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_readerId_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `readerId`;

-- AlterTable
ALTER TABLE `reader` ADD COLUMN `readerId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reader` ADD CONSTRAINT `Reader_readerId_fkey` FOREIGN KEY (`readerId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
