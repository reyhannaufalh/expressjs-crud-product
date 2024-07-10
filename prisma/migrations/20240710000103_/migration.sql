/*
  Warnings:

  - You are about to drop the column `description` on the `product` table. All the data in the column will be lost.
  - Added the required column `recipe` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `description`,
    ADD COLUMN `recipe` VARCHAR(191) NOT NULL;
