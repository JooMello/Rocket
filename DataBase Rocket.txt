-- MySQL Workbench Synchronization
-- Generated: 2023-01-03 10:00
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: paoqu

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `rocket` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasadministrativas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 536
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasbensimobilizados` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1219
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesascolaboradores` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 414
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesascomerciais` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 603
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasdiretoria` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 907
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasemprestimosfinanciamentos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1304
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasfinanceiras` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1005
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasimoveis` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 711
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasimpostos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 103
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasparcelamentosdividas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1401
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesassalariosencargos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 412
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasveiculos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 807
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesdespesasvendaseservicos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 205
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesfinancialreceitas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 301
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesfretesentregas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesothersreceitas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 210
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesoutrasdespesas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1101
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`categoriesreceitas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 104
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`dados` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(20) NULL DEFAULT NULL,
  `tamanho` VARCHAR(2) NULL DEFAULT NULL,
  `quantidade` INT(11) NULL DEFAULT NULL,
  `cor` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`payments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `fornecedor` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `obs` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `categoriesDespesasImpostoId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasVendasEServicoId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasSalariosEncargoId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasColaboradoreId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasAdministrativaId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasComerciaiId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasImoveiId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasVeiculoId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasDiretoriumId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasFinanceiraId` INT(11) NULL DEFAULT NULL,
  `categoriesOutrasDespesaId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasBensImobilizadoId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasEmprestimosFinanciamentoId` INT(11) NULL DEFAULT NULL,
  `categoriesDespesasParcelamentosDividaId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoriesDespesasImpostoId` (`categoriesDespesasImpostoId` ASC) VISIBLE,
  INDEX `categoriesDespesasVendasEServicoId` (`categoriesDespesasVendasEServicoId` ASC) VISIBLE,
  INDEX `categoriesDespesasSalariosEncargoId` (`categoriesDespesasSalariosEncargoId` ASC) VISIBLE,
  INDEX `categoriesDespesasColaboradoreId` (`categoriesDespesasColaboradoreId` ASC) VISIBLE,
  INDEX `categoriesDespesasAdministrativaId` (`categoriesDespesasAdministrativaId` ASC) VISIBLE,
  INDEX `categoriesDespesasComerciaiId` (`categoriesDespesasComerciaiId` ASC) VISIBLE,
  INDEX `categoriesDespesasImoveiId` (`categoriesDespesasImoveiId` ASC) VISIBLE,
  INDEX `categoriesDespesasVeiculoId` (`categoriesDespesasVeiculoId` ASC) VISIBLE,
  INDEX `categoriesDespesasDiretoriumId` (`categoriesDespesasDiretoriumId` ASC) VISIBLE,
  INDEX `categoriesDespesasFinanceiraId` (`categoriesDespesasFinanceiraId` ASC) VISIBLE,
  INDEX `categoriesOutrasDespesaId` (`categoriesOutrasDespesaId` ASC) VISIBLE,
  INDEX `categoriesDespesasBensImobilizadoId` (`categoriesDespesasBensImobilizadoId` ASC) VISIBLE,
  INDEX `categoriesDespesasEmprestimosFinanciamentoId` (`categoriesDespesasEmprestimosFinanciamentoId` ASC) VISIBLE,
  INDEX `categoriesDespesasParcelamentosDividaId` (`categoriesDespesasParcelamentosDividaId` ASC) VISIBLE,
  CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`categoriesDespesasImpostoId`)
    REFERENCES `rocket`.`categoriesdespesasimpostos` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_10`
    FOREIGN KEY (`categoriesDespesasFinanceiraId`)
    REFERENCES `rocket`.`categoriesdespesasfinanceiras` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_11`
    FOREIGN KEY (`categoriesOutrasDespesaId`)
    REFERENCES `rocket`.`categoriesoutrasdespesas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_12`
    FOREIGN KEY (`categoriesDespesasBensImobilizadoId`)
    REFERENCES `rocket`.`categoriesdespesasbensimobilizados` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_13`
    FOREIGN KEY (`categoriesDespesasEmprestimosFinanciamentoId`)
    REFERENCES `rocket`.`categoriesdespesasemprestimosfinanciamentos` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_14`
    FOREIGN KEY (`categoriesDespesasParcelamentosDividaId`)
    REFERENCES `rocket`.`categoriesdespesasparcelamentosdividas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_2`
    FOREIGN KEY (`categoriesDespesasVendasEServicoId`)
    REFERENCES `rocket`.`categoriesdespesasvendaseservicos` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_3`
    FOREIGN KEY (`categoriesDespesasSalariosEncargoId`)
    REFERENCES `rocket`.`categoriesdespesassalariosencargos` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_4`
    FOREIGN KEY (`categoriesDespesasColaboradoreId`)
    REFERENCES `rocket`.`categoriesdespesascolaboradores` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_5`
    FOREIGN KEY (`categoriesDespesasAdministrativaId`)
    REFERENCES `rocket`.`categoriesdespesasadministrativas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_6`
    FOREIGN KEY (`categoriesDespesasComerciaiId`)
    REFERENCES `rocket`.`categoriesdespesascomerciais` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_7`
    FOREIGN KEY (`categoriesDespesasImoveiId`)
    REFERENCES `rocket`.`categoriesdespesasimoveis` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_8`
    FOREIGN KEY (`categoriesDespesasVeiculoId`)
    REFERENCES `rocket`.`categoriesdespesasveiculos` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_9`
    FOREIGN KEY (`categoriesDespesasDiretoriumId`)
    REFERENCES `rocket`.`categoriesdespesasdiretoria` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 327
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`receipts` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `fornecedor` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `obs` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `categoriesreceitaId` INT(11) NULL DEFAULT NULL,
  `categoriesOthersReceitaId` INT(11) NULL DEFAULT NULL,
  `categoriesFinancialReceitaId` INT(11) NULL DEFAULT NULL,
  `categoriesFretesEntregaId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoriesreceitaId` (`categoriesreceitaId` ASC) VISIBLE,
  INDEX `categoriesOthersReceitaId` (`categoriesOthersReceitaId` ASC) VISIBLE,
  INDEX `categoriesFinancialReceitaId` (`categoriesFinancialReceitaId` ASC) VISIBLE,
  INDEX `categoriesFretesEntregaId` (`categoriesFretesEntregaId` ASC) VISIBLE,
  CONSTRAINT `receipts_ibfk_1`
    FOREIGN KEY (`categoriesreceitaId`)
    REFERENCES `rocket`.`categoriesreceitas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `receipts_ibfk_2`
    FOREIGN KEY (`categoriesOthersReceitaId`)
    REFERENCES `rocket`.`categoriesothersreceitas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `receipts_ibfk_3`
    FOREIGN KEY (`categoriesFinancialReceitaId`)
    REFERENCES `rocket`.`categoriesfinancialreceitas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `receipts_ibfk_4`
    FOREIGN KEY (`categoriesFretesEntregaId`)
    REFERENCES `rocket`.`categoriesfretesentregas` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 56
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `rocket`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
