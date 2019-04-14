DROP DATABASE IF EXISTS pambazo_db;
CREATE DATABASE pambazo_db;

USE pambazo_db;

CREATE TABLE pambazo (
  id INT AUTO_INCREMENT NOT NULL,
  pambazo_name VARCHAR(20) NOT NULL,
  devoured boolean,
  PRIMARY KEY(id)
);