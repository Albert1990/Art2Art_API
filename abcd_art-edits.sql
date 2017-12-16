
CREATE TABLE IF NOT EXISTS `password_resets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `token` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;



CREATE TABLE `abcd_art`.`art_likes` (
 `like_id` INT NOT NULL AUTO_INCREMENT ,
 `like_user_id` INT NOT NULL ,
 `like_art_id` INT NOT NULL ,
  PRIMARY KEY (`like_id`)) ENGINE = InnoDB;

-- 

ALTER TABLE `users` ADD `user_artwork_default_display_status` BOOLEAN NULL DEFAULT FALSE AFTER `user_pobox`;



replace all latin1 to utf8