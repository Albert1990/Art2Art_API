  -- phpMyAdmin SQL Dump
  -- version 4.3.8
  -- http://www.phpmyadmin.net
  --
  -- Host: localhost
  -- Generation Time: May 02, 2017 at 12:40 PM
  -- Server version: 5.5.51-38.2
  -- PHP Version: 5.6.20

  SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
  SET time_zone = "+00:00";


  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8 */;

  --
  -- Database: `abcd_art`
  --

  -- --------------------------------------------------------

  --
  -- Table structure for table `artworks`
  --

  CREATE TABLE IF NOT EXISTS `password_resets` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `token` text NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `email` (`email`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;



  CREATE TABLE `art_likes` (
   `like_id` INT NOT NULL AUTO_INCREMENT ,
   `like_user_id` INT NOT NULL ,
   `like_art_id` INT NOT NULL ,
    PRIMARY KEY (`like_id`)) ENGINE = InnoDB;

  ALTER TABLE `users` ADD `user_artwork_default_display_status` BOOLEAN NULL DEFAULT FALSE AFTER `user_pobox`;
