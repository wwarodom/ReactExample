-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: 128.199.76.176
-- Generation Time: Dec 03, 2017 at 04:43 PM
-- Server version: 10.2.11-MariaDB-10.2.11+maria~jessie
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `airline` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`id`, `name`, `airline`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Annette Witting MD', 'ThaiAir 580', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(2, 'Dallin DuBuque PhD', 'ThaiAir 565', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(3, 'Wilmer Mayer DDS', 'ThaiAir 894', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(4, 'Guadalupe Stamm', 'ThaiAir 425', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(5, 'Maci Waters', 'ThaiAir 647', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(6, 'Amya Tillman', 'ThaiAir 287', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(7, 'Prof. Cleo Bergnaum DVM', 'ThaiAir 423', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(8, 'Dr. Ernestine Schamberger IV', 'ThaiAir 451', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(9, 'Dr. Shirley Paucek', 'ThaiAir 138', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(10, 'Dylan King', 'ThaiAir 860', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(11, 'Marques Kemmer', 'ThaiAir 108', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(12, 'Prof. Shad Beier V', 'ThaiAir 249', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(13, 'Rashad Conroy', 'ThaiAir 772', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(14, 'Jazmin Dooley', 'ThaiAir 690', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(15, 'Rollin Stracke', 'ThaiAir 335', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(16, 'Jayde Padberg I', 'ThaiAir 343', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(17, 'Isabel Cummerata', 'ThaiAir 409', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(18, 'Ulices Kunze PhD', 'ThaiAir 251', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(19, 'Erica Schultz', 'ThaiAir 700', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(20, 'Isabella Mueller', 'ThaiAir 740', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(21, 'Prof. Keith Schimmel', 'ThaiAir 326', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(22, 'Miss Lucile Windler IV', 'ThaiAir 331', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(23, 'Ms. Zula King IV', 'ThaiAir 301', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(24, 'Grayson O\'Conner', 'ThaiAir 744', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(25, 'Dawson Hirthe', 'ThaiAir 065', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(26, 'Jewell Strosin', 'ThaiAir 218', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(27, 'Willis Glover', 'ThaiAir 990', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(28, 'Dr. Gaetano Stark DDS', 'ThaiAir 133', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(29, 'Giovanni Mann', 'ThaiAir 130', '2017-12-02 11:37:57', '2017-12-02 11:37:57'),
(30, 'Alvena Farrell', 'ThaiAir 434', '2017-12-02 11:37:57', '2017-12-02 11:37:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
