CREATE DATABASE finance_manager;

USE finance_manager;

CREATE TABLE budget (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category ENUM('groceries', 'lifestyle', 'bills') NOT NULL,
  limit DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);