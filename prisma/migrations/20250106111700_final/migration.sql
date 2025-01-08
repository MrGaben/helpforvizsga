/*
  Warnings:

  - You are about to drop the column `Book` on the `reader` table. All the data in the column will be lost.
  - Added the required column `readerId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reader` DROP FOREIGN KEY `Reader_Book_fkey`;

-- AlterTable
ALTER TABLE `book` ADD COLUMN `readerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `reader` DROP COLUMN `Book`;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_readerId_fkey` FOREIGN KEY (`readerId`) REFERENCES `Reader`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
