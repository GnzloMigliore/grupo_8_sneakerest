CREATE DATABASE  IF NOT EXISTS `snkrst` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `snkrst`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: snkrst
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adresses`
--

DROP TABLE IF EXISTS `adresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(45) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `floor` int(11) DEFAULT NULL,
  `apartment` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adresses`
--

LOCK TABLES `adresses` WRITE;
/*!40000 ALTER TABLE `adresses` DISABLE KEYS */;
INSERT INTO `adresses` VALUES (1,'Calle Falsa',123,NULL,NULL,'BsAs','BsAs',1644,NULL,NULL,NULL);
/*!40000 ALTER TABLE `adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adressuser`
--

DROP TABLE IF EXISTS `adressuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adressuser` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `adress_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adressuser`
--

LOCK TABLES `adressuser` WRITE;
/*!40000 ALTER TABLE `adressuser` DISABLE KEYS */;
INSERT INTO `adressuser` VALUES (0,1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `adressuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (68,'asd','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(69,'sfhsgd','2020-08-22 01:48:07','2020-08-22 01:48:07',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartproduct`
--

DROP TABLE IF EXISTS `cartproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartproduct`
--

LOCK TABLES `cartproduct` WRITE;
/*!40000 ALTER TABLE `cartproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colorproduct`
--

DROP TABLE IF EXISTS `colorproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colorproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colorproduct`
--

LOCK TABLES `colorproduct` WRITE;
/*!40000 ALTER TABLE `colorproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `colorproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examples`
--

DROP TABLE IF EXISTS `examples`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `examples` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examples`
--

LOCK TABLES `examples` WRITE;
/*!40000 ALTER TABLE `examples` DISABLE KEYS */;
INSERT INTO `examples` VALUES (67,'asd','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(68,'sdfgdsfg','2020-08-22 01:48:07','2020-08-22 01:48:07',NULL);
/*!40000 ALTER TABLE `examples` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (11,'men','2020-08-20 20:37:01','2020-08-20 20:37:01',NULL),(12,'men','2020-08-20 20:44:24','2020-08-20 20:44:24',NULL);
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageproducts`
--

DROP TABLE IF EXISTS `imageproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imageproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=390 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproducts`
--

LOCK TABLES `imageproducts` WRITE;
/*!40000 ALTER TABLE `imageproducts` DISABLE KEYS */;
INSERT INTO `imageproducts` VALUES (139,451,142,'2020-08-20 23:07:04','2020-08-20 23:07:04',NULL),(140,455,142,'2020-08-20 23:07:04','2020-08-20 23:07:04',NULL),(141,453,142,'2020-08-20 23:07:04','2020-08-20 23:07:04',NULL),(142,454,142,'2020-08-20 23:07:04','2020-08-20 23:07:04',NULL),(145,458,143,'2020-08-21 02:48:06','2020-08-21 02:48:06',NULL),(147,460,143,'2020-08-21 02:48:06','2020-08-21 02:48:06',NULL),(161,472,144,'2020-08-21 02:58:03','2020-08-21 02:58:03',NULL),(162,474,144,'2020-08-21 02:58:03','2020-08-21 02:58:03',NULL),(163,475,144,'2020-08-21 02:58:03','2020-08-21 02:58:03',NULL),(164,476,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(165,477,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(166,478,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(167,480,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(168,479,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(169,481,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(170,482,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(171,483,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(172,484,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(173,485,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(174,486,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(175,487,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(176,488,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(177,489,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(178,490,144,'2020-08-21 03:01:26','2020-08-21 03:01:26',NULL),(179,492,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(180,491,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(181,493,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(182,494,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(183,495,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(184,496,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(185,498,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(186,497,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(187,499,144,'2020-08-21 03:03:28','2020-08-21 03:03:28',NULL),(189,504,145,'2020-08-21 03:10:28','2020-08-21 03:10:28',NULL),(193,505,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(194,506,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(195,507,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(196,509,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(197,508,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(198,510,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(203,515,145,'2020-08-21 03:11:00','2020-08-21 03:11:00',NULL),(204,518,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(205,517,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(206,516,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(207,519,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(208,520,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(209,521,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(211,522,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(212,524,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(213,525,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(214,526,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(215,527,145,'2020-08-21 03:13:15','2020-08-21 03:13:15',NULL),(220,531,145,'2020-08-21 03:16:57','2020-08-21 03:16:57',NULL),(221,535,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(222,534,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(223,533,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(224,536,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(225,537,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(226,538,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(227,539,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(228,540,145,'2020-08-21 03:18:19','2020-08-21 03:18:19',NULL),(234,546,145,'2020-08-21 03:20:06','2020-08-21 03:20:06',NULL),(235,547,145,'2020-08-21 03:20:06','2020-08-21 03:20:06',NULL),(236,548,145,'2020-08-21 03:20:06','2020-08-21 03:20:06',NULL),(237,550,145,'2020-08-21 03:20:06','2020-08-21 03:20:06',NULL),(238,549,145,'2020-08-21 03:20:06','2020-08-21 03:20:06',NULL),(239,551,145,'2020-08-21 03:20:06','2020-08-21 03:20:06',NULL),(245,557,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(246,558,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(247,559,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(248,560,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(249,561,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(250,562,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(251,563,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(252,564,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(253,565,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(254,566,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(255,567,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(256,568,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(257,569,145,'2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(258,570,146,'2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(259,573,146,'2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(260,571,146,'2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(261,572,146,'2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(262,574,146,'2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(269,580,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(270,583,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(271,584,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(272,582,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(273,585,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(275,587,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(276,588,147,'2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(278,590,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(279,592,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(280,591,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(281,594,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(282,593,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(283,595,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(284,596,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(285,597,147,'2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(286,598,147,'2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(287,599,147,'2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(288,600,147,'2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(289,601,147,'2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(290,602,147,'2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(294,605,148,'2020-08-21 23:40:17','2020-08-21 23:40:17',NULL),(295,607,148,'2020-08-21 23:40:17','2020-08-21 23:40:17',NULL),(296,608,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(297,611,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(298,610,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(299,609,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(300,612,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(301,613,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(302,614,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(303,615,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(304,616,148,'2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(305,617,148,'2020-08-21 23:41:12','2020-08-21 23:41:12',NULL),(306,618,148,'2020-08-21 23:41:12','2020-08-21 23:41:12',NULL),(307,619,149,'2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(308,620,149,'2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(312,625,150,'2020-08-21 23:47:37','2020-08-21 23:47:37',NULL),(314,631,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(315,630,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(316,632,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(317,629,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(318,633,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(319,634,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(320,635,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(321,637,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(322,636,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(323,638,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(324,640,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(325,639,150,'2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(331,647,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(332,646,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(333,650,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(334,649,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(335,648,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(336,651,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(337,654,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(338,655,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(339,652,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(340,653,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(341,656,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(342,660,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(343,659,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(344,658,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(345,657,151,'2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(346,661,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(347,665,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(348,663,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(349,664,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(350,662,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(351,666,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(352,670,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(353,668,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(354,667,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(355,669,151,'2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(367,682,152,'2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(368,683,152,'2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(369,684,152,'2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(370,685,152,'2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(371,686,152,'2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(372,687,153,'2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(373,688,153,'2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(374,691,153,'2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(375,692,154,'2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(376,693,154,'2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(377,694,154,'2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(378,696,154,'2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(379,695,154,'2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(385,702,155,'2020-08-22 01:48:07','2020-08-22 01:48:07',NULL),(386,703,155,'2020-08-22 01:48:07','2020-08-22 01:48:07',NULL),(387,704,155,'2020-08-22 01:48:08','2020-08-22 01:48:08',NULL),(388,705,155,'2020-08-22 01:48:08','2020-08-22 01:48:08',NULL),(389,706,155,'2020-08-22 01:48:08','2020-08-22 01:48:08',NULL);
/*!40000 ALTER TABLE `imageproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=707 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (557,'zapatilla-1597980326575.jpg','2020-08-21 03:25:26','2020-08-21 03:25:26',NULL),(558,'zapatilla-1597980326576.jpg','2020-08-21 03:25:26','2020-08-21 03:25:26',NULL),(559,'zapatilla-1597980326573.jpg','2020-08-21 03:25:26','2020-08-21 03:25:26',NULL),(560,'zapatilla-1597980326573.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(561,'zapatilla-1597980326571.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(562,'zapatilla-1597980326573.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(563,'zapatilla-1597980326575.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(564,'zapatilla-1597980326576.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(565,'zapatilla-1597980326573.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(566,'zapatilla-1597980326575.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(567,'zapatilla-1597980326576.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(568,'zapatilla-1597980326573.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(569,'zapatilla-1597980326575.jpg','2020-08-21 03:25:27','2020-08-21 03:25:27',NULL),(570,'zapatilla-1598045149442.jpg','2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(571,'zapatilla-1598045149448.jpg','2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(572,'zapatilla-1598045149450.jpg','2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(573,'zapatilla-1598045149451.jpg','2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(574,'zapatilla-1598045149452.jpg','2020-08-21 21:25:49','2020-08-21 21:25:49',NULL),(580,'zapatilla-1598045200342.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(582,'zapatilla-1598045200343.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(583,'zapatilla-1598045200338.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(584,'zapatilla-1598045200340.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(585,'zapatilla-1598045200342.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(587,'zapatilla-1598045200338.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(588,'zapatilla-1598045200342.jpg','2020-08-21 21:26:40','2020-08-21 21:26:40',NULL),(590,'zapatilla-1598053061389.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(591,'zapatilla-1598053061390.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(592,'zapatilla-1598053061387.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(593,'zapatilla-1598053061384.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(594,'zapatilla-1598053061385.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(595,'zapatilla-1598053061389.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(596,'zapatilla-1598053061390.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(597,'zapatilla-1598053061389.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(598,'zapatilla-1598053061390.jpg','2020-08-21 23:37:41','2020-08-21 23:37:41',NULL),(599,'zapatilla-1598053061389.jpg','2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(600,'zapatilla-1598053061390.jpg','2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(601,'zapatilla-1598053061389.jpg','2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(602,'zapatilla-1598053061390.jpg','2020-08-21 23:37:42','2020-08-21 23:37:42',NULL),(605,'zapatilla-1598053217252.jpg','2020-08-21 23:40:17','2020-08-21 23:40:17',NULL),(607,'zapatilla-1598053217254.jpg','2020-08-21 23:40:17','2020-08-21 23:40:17',NULL),(608,'zapatilla-1598053271439.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(609,'zapatilla-1598053271434.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(610,'zapatilla-1598053271429.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(611,'zapatilla-1598053271426.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(612,'zapatilla-1598053271425.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(613,'zapatilla-1598053271429.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(614,'zapatilla-1598053271439.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(615,'zapatilla-1598053271426.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(616,'zapatilla-1598053271439.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(617,'zapatilla-1598053271429.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(618,'zapatilla-1598053271426.jpg','2020-08-21 23:41:11','2020-08-21 23:41:11',NULL),(619,'zapatilla-1598053649037.jpg','2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(620,'zapatilla-1598053649040.jpg','2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(621,'zapatilla-1598053649040.jpg','2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(622,'zapatilla-1598053649044.jpg','2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(623,'zapatilla-1598053649043.jpg','2020-08-21 23:47:29','2020-08-21 23:47:29',NULL),(625,'zapatilla-1598053656870.jpg','2020-08-21 23:47:36','2020-08-21 23:47:36',NULL),(629,'zapatilla-1598053683117.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(630,'zapatilla-1598053683118.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(631,'zapatilla-1598053683113.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(632,'zapatilla-1598053683119.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(633,'zapatilla-1598053683114.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(634,'zapatilla-1598053683117.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(635,'zapatilla-1598053683113.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(636,'zapatilla-1598053683119.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(637,'zapatilla-1598053683118.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(638,'zapatilla-1598053683114.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(639,'zapatilla-1598053683117.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(640,'zapatilla-1598053683113.jpg','2020-08-21 23:48:03','2020-08-21 23:48:03',NULL),(641,'zapatilla-1598054348192.jpg','2020-08-21 23:59:08','2020-08-21 23:59:08',NULL),(642,'zapatilla-1598054348193.jpg','2020-08-21 23:59:08','2020-08-21 23:59:08',NULL),(643,'zapatilla-1598054348197.jpg','2020-08-21 23:59:08','2020-08-21 23:59:08',NULL),(644,'zapatilla-1598054348195.jpg','2020-08-21 23:59:08','2020-08-21 23:59:08',NULL),(645,'zapatilla-1598054348196.jpg','2020-08-21 23:59:08','2020-08-21 23:59:08',NULL),(646,'zapatilla-1598054423500.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(647,'zapatilla-1598054423501.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(648,'zapatilla-1598054423502.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(649,'zapatilla-1598054423503.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(650,'zapatilla-1598054423504.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(651,'zapatilla-1598054423501.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(652,'zapatilla-1598054423503.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(653,'zapatilla-1598054423502.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(654,'zapatilla-1598054423500.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(655,'zapatilla-1598054423504.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(656,'zapatilla-1598054423501.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(657,'zapatilla-1598054423502.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(658,'zapatilla-1598054423504.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(659,'zapatilla-1598054423500.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(660,'zapatilla-1598054423503.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(661,'zapatilla-1598054423501.jpg','2020-08-22 00:00:23','2020-08-22 00:00:23',NULL),(662,'zapatilla-1598054423504.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(663,'zapatilla-1598054423500.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(664,'zapatilla-1598054423503.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(665,'zapatilla-1598054423502.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(666,'zapatilla-1598054423501.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(667,'zapatilla-1598054423500.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(668,'zapatilla-1598054423504.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(669,'zapatilla-1598054423502.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(670,'zapatilla-1598054423503.jpg','2020-08-22 00:00:24','2020-08-22 00:00:24',NULL),(671,'zapatilla-1598054590028.jpg','2020-08-22 00:03:10','2020-08-22 00:03:10',NULL),(672,'zapatilla-1598054590029.jpg','2020-08-22 00:03:10','2020-08-22 00:03:10',NULL),(673,'zapatilla-1598054590030.jpg','2020-08-22 00:03:10','2020-08-22 00:03:10',NULL),(674,'zapatilla-1598054590031.jpg','2020-08-22 00:03:10','2020-08-22 00:03:10',NULL),(675,'zapatilla-1598054590032.jpg','2020-08-22 00:03:10','2020-08-22 00:03:10',NULL),(676,'zapatilla-1598054615921.jpg','2020-08-22 00:03:36','2020-08-22 00:03:36',NULL),(677,'zapatilla-1598054616014.jpg','2020-08-22 00:03:36','2020-08-22 00:03:36',NULL),(678,'zapatilla-1598054616017.jpg','2020-08-22 00:03:36','2020-08-22 00:03:36',NULL),(679,'zapatilla-1598054616022.jpg','2020-08-22 00:03:36','2020-08-22 00:03:36',NULL),(680,'zapatilla-1598054616024.jpg','2020-08-22 00:03:36','2020-08-22 00:03:36',NULL),(681,'zapatilla-1598054783264.jpg','2020-08-22 00:06:23','2020-08-22 00:06:23',NULL),(682,'zapatilla-1598054838852.jpg','2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(683,'zapatilla-1598054616014.jpg','2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(684,'zapatilla-1598054616017.jpg','2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(685,'zapatilla-1598054616022.jpg','2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(686,'zapatilla-1598054616024.jpg','2020-08-22 00:07:19','2020-08-22 00:07:19',NULL),(687,'zapatilla-1598060319716.jpg','2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(688,'zapatilla-1598060319719.jpg','2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(689,'zapatilla-1598060319720.jpg','2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(690,'zapatilla-1598060319723.jpg','2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(691,'zapatilla-1598060319724.jpg','2020-08-22 01:38:39','2020-08-22 01:38:39',NULL),(692,'zapatilla-1598060400125.jpg','2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(693,'zapatilla-1598060400126.jpg','2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(694,'zapatilla-1598060400127.jpg','2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(695,'zapatilla-1598060400128.jpg','2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(696,'zapatilla-1598060400128.jpg','2020-08-22 01:40:00','2020-08-22 01:40:00',NULL),(697,'zapatilla-1598060763524.jpg','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(698,'zapatilla-1598060763526.jpg','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(699,'zapatilla-1598060763526.jpg','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(700,'zapatilla-1598060763528.jpg','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(701,'zapatilla-1598060763528.jpg','2020-08-22 01:46:03','2020-08-22 01:46:03',NULL),(702,'zapatilla-1598060887285.jpg','2020-08-22 01:48:07','2020-08-22 01:48:07',NULL),(703,'zapatilla-1598060887286.jpg','2020-08-22 01:48:07','2020-08-22 01:48:07',NULL),(704,'zapatilla-1598060887287.jpg','2020-08-22 01:48:08','2020-08-22 01:48:08',NULL),(705,'zapatilla-1598060887288.jpg','2020-08-22 01:48:08','2020-08-22 01:48:08',NULL),(706,'zapatilla-1598060887289.jpg','2020-08-22 01:48:08','2020-08-22 01:48:08',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `methodpayments`
--

DROP TABLE IF EXISTS `methodpayments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `methodpayments` (
  `id` int(11) NOT NULL,
  `method` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `methodpayments`
--

LOCK TABLES `methodpayments` WRITE;
/*!40000 ALTER TABLE `methodpayments` DISABLE KEYS */;
/*!40000 ALTER TABLE `methodpayments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `shipment_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` decimal(12,2) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `example_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (155,11111.00,0,'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ','#0000ff',NULL,12,'men',69,68,'2020-08-22 01:46:03','2020-08-22 01:48:07',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productsize`
--

DROP TABLE IF EXISTS `productsize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productsize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productsize`
--

LOCK TABLES `productsize` WRITE;
/*!40000 ALTER TABLE `productsize` DISABLE KEYS */;
/*!40000 ALTER TABLE `productsize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipments`
--

DROP TABLE IF EXISTS `shipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipments` (
  `id` int(11) NOT NULL,
  `adress_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipments`
--

LOCK TABLES `shipments` WRITE;
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'joaquin','Dominguez Lodeiro',118765432,'joaquin4@gmail.com','$2a$10$dXXcfEB2D.2EqhL7yOM0GO224L7bvS.wv8bJwc','usuario-1598022600506.jpg',9,'11','2020-08-21 15:10:00','2020-08-21 15:10:00',NULL),(13,' Joaquín     ','Dominguez Lodeiro',12345678,'joaquin@gmail.com','$2a$10$K7VICF.7Z7cMG/sPKt6aLeDTqd96NBafqSCj1y','usuario-1598045086068.jpg',1,'Hombre','2020-08-21 18:17:52','2020-08-21 21:24:46',NULL),(14,'joaquin','Dominguez Lodeiro',12345678,'joaquin2@gmail.com','$2a$10$l4hBEDxFg35lWR3LthjvYe7zstMzGXYcyLoL1H','usuario-1598041780475.jpg',1,NULL,'2020-08-21 20:29:40','2020-08-21 20:29:40',NULL),(15,'asd','asd',123456789,'asd@gmail.com','$2a$10$AWqbExt4YXd0jp0c.ZPXY.DVVVMI4va/acZDZ9','usuario-1598041828979.jpg',1,NULL,'2020-08-21 20:30:29','2020-08-21 20:30:29',NULL),(16,'asd','Dominguez Lodeiro',12345678,'joaquin5@gmail.com','$2a$10$np69ReonHWtI/hoCjPrOT.QSxtldE17BBdSxxL','usuario-1598041944610.jpg',1,NULL,'2020-08-21 20:32:24','2020-08-21 20:32:24',NULL),(17,'asd','asd',12345678,'123@gmail.com','$2a$10$/Bo5Hv9JzvBNcL5ksR7EyeADYeYWSbDp2J/uDn','usuario-1598044890485.jpg',1,NULL,'2020-08-21 21:21:30','2020-08-21 21:21:30',NULL),(18,'pepe','pepepepe',12345678,'pepe@gmail.com','$2a$10$FQpcc3M8ZA36Mr/nb95RWeMPD0h4lTKHqtlnR8','usuario-1598219965168.jpg',1,NULL,'2020-08-23 21:59:25','2020-08-23 21:59:25',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-23 20:06:18
