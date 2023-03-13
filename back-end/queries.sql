-- Active: 1678732890233@@127.0.0.1@3306@webpage
CREATE TABLE
    webpage_user(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(255) UNIQUE NOT NULL,
        details TEXT
    );