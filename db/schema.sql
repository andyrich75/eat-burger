drop database if exists burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id INTEGER auto_increment,
burger_name VARCHAR(255),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY(id)
);