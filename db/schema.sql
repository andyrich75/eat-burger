drop database if exists sq5huo32n6fm91lo;
CREATE DATABASE sq5huo32n6fm91lo;

USE sq5huo32n6fm91lo;

CREATE TABLE burgers (
id INTEGER auto_increment,
burger_name VARCHAR(255),
devoured BOOLEAN,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
);