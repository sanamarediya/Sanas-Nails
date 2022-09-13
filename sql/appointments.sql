CREATE TABLE sanasnails.`appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL,
  `dateTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
