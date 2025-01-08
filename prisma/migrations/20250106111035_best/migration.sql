/*
  Warnings:

  - You are about to drop the column `readerId` on the `reader` table. All the data in the column will be lost.
  - Added the required column `Book` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reader` DROP FOREIGN KEY `Reader_readerId_fkey`;

-- AlterTable
ALTER TABLE `reader` DROP COLUMN `readerId`,
    ADD COLUMN `Book` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reader` ADD CONSTRAINT `Reader_Book_fkey` FOREIGN KEY (`Book`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
