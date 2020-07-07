DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE items (
    id NOT NULL AUTO_INCREMENT,
    itemName VARCHAR(30),
    currentBid INT,
    PRIMARY KEY(id)
);