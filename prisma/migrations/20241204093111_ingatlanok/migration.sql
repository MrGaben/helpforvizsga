-- CreateTable
CREATE TABLE `kategoriak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `kategoriak_nev_key`(`nev`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingatlanok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategoria` INTEGER NOT NULL,
    `leiras` VARCHAR(191) NOT NULL,
    `hirdertesDatuma` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tehermentes` BOOLEAN NOT NULL DEFAULT true,
    `ar` INTEGER NOT NULL,
    `kepUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ingatlanok` ADD CONSTRAINT `ingatlanok_kategoria_fkey` FOREIGN KEY (`kategoria`) REFERENCES `kategoriak`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
