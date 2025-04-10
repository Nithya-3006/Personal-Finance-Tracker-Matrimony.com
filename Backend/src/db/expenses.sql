create database finance_manager;
use finance_manager;

CREATE TABLE expenses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO expenses (title, amount, category, date) VALUES
('Supermarket Run', 45.20, 'Groceries', '2023-01-15'),
('Yoga Class', 25.00, 'Lifestyle', '2023-01-20'),
('Electricity Bill', 70.10, 'Bills', '2023-01-28'),
('Monthly Groceries', 52.35, 'Groceries', '2023-02-10'),
('Gym Membership', 35.00, 'Lifestyle', '2023-02-12'),
('Water Bill', 18.50, 'Bills', '2023-02-25'),
('Weekly Groceries', 40.00, 'Groceries', '2023-03-05'),
('Movie Night', 15.00, 'Lifestyle', '2023-03-11'),
('Internet Bill', 45.00, 'Bills', '2023-03-20'),
('Grocery Shopping', 55.70, 'Groceries', '2023-04-09'),
('Concert Tickets', 60.00, 'Lifestyle', '2023-04-14'),
('Mobile Bill', 22.30, 'Bills', '2023-04-26'),
('Groceries for Week', 42.15, 'Groceries', '2023-05-06'),
('Spa Session', 50.00, 'Lifestyle', '2023-05-15'),
('Gas Bill', 33.90, 'Bills', '2023-05-21'),
('Fresh Market', 47.50, 'Groceries', '2023-06-02'),
('Museum Visit', 20.00, 'Lifestyle', '2023-06-10'),
('Electricity Bill', 75.00, 'Bills', '2023-06-25'),
('Grocery Restock', 39.80, 'Groceries', '2023-07-08'),
('Dinner Out', 48.00, 'Lifestyle', '2023-07-12'),
('Internet Bill', 44.00, 'Bills', '2023-07-30'),
('Back to School Groceries', 62.25, 'Groceries', '2023-08-05'),
('Theater Show', 30.00, 'Lifestyle', '2023-08-18'),
('Mobile Bill', 24.60, 'Bills', '2023-08-27'),
('September Grocery Haul', 58.10, 'Groceries', '2023-09-09'),
('Yoga Workshop', 40.00, 'Lifestyle', '2023-09-15'),
('Water Bill', 19.90, 'Bills', '2023-09-22'),
('Autumn Groceries', 46.70, 'Groceries', '2023-10-11'),
('Halloween Costume', 35.00, 'Lifestyle', '2023-10-28'),
('Gas Bill', 30.00, 'Bills', '2023-10-31');

INSERT INTO expenses (title, amount, category, date) VALUES
-- January
('Groceries - Week 1', 48.50, 'Groceries', '2024-01-03'),
('Groceries - Week 3', 55.20, 'Groceries', '2024-01-17'),
('Yoga Class', 25.00, 'Lifestyle', '2024-01-05'),
('Movie Night', 18.00, 'Lifestyle', '2024-01-19'),
('Electricity Bill', 70.10, 'Bills', '2024-01-25'),
('Mobile Bill', 22.30, 'Bills', '2024-01-28'),

-- February
('Groceries - Week 2', 42.75, 'Groceries', '2024-02-10'),
('Groceries - Week 4', 53.40, 'Groceries', '2024-02-24'),
('Valentines Dinner', 80.00, 'Lifestyle', '2024-02-14'),
('Spa Visit', 45.00, 'Lifestyle', '2024-02-22'),
('Water Bill', 19.00, 'Bills', '2024-02-27'),
('Internet Bill', 44.00, 'Bills', '2024-02-28'),

-- March
('Groceries - Week 1', 47.00, 'Groceries', '2024-03-04'),
('Groceries - Week 3', 49.60, 'Groceries', '2024-03-18'),
('Gym Subscription', 35.00, 'Lifestyle', '2024-03-10'),
('Outdoor Event', 60.00, 'Lifestyle', '2024-03-21'),
('Gas Bill', 32.50, 'Bills', '2024-03-26'),
('Internet Bill', 46.00, 'Bills', '2024-03-30'),

-- April
('Groceries - Early April', 50.00, 'Groceries', '2024-04-03'),
('Groceries - Mid April', 60.10, 'Groceries', '2024-04-17'),
('Picnic Trip', 55.00, 'Lifestyle', '2024-04-12'),
('Museum Visit', 20.00, 'Lifestyle', '2024-04-24'),
('Electricity Bill', 75.20, 'Bills', '2024-04-28'),
('Mobile Bill', 24.20, 'Bills', '2024-04-30'),

-- May
('Groceries - Week 1', 63.20, 'Groceries', '2024-05-05'),
('Groceries - Week 3', 58.40, 'Groceries', '2024-05-19'),
('Beach Day', 70.00, 'Lifestyle', '2024-05-11'),
('Streaming Subscription', 15.00, 'Lifestyle', '2024-05-20'),
('Gas Bill', 31.90, 'Bills', '2024-05-25'),
('Internet Bill', 45.00, 'Bills', '2024-05-29'),

-- June
('Groceries - Week 2', 48.90, 'Groceries', '2024-06-10'),
('Groceries - Week 4', 55.00, 'Groceries', '2024-06-24'),
('Concert', 90.00, 'Lifestyle', '2024-06-08'),
('Spa Day', 50.00, 'Lifestyle', '2024-06-22'),
('Electricity Bill', 78.00, 'Bills', '2024-06-27'),
('Mobile Bill', 26.00, 'Bills', '2024-06-30'),

-- July
('Groceries - Week 1', 46.50, 'Groceries', '2024-07-03'),
('Groceries - Week 3', 52.10, 'Groceries', '2024-07-18'),
('Netflix Subscription', 13.00, 'Lifestyle', '2024-07-05'),
('Hiking Gear', 85.00, 'Lifestyle', '2024-07-23'),
('Water Bill', 21.00, 'Bills', '2024-07-28'),
('Internet Bill', 43.50, 'Bills', '2024-07-31');

-- August
INSERT INTO expenses (title, amount, category, date) VALUES
('Groceries - Week 1', 58.75, 'Groceries', '2024-08-02'),
('Groceries - Week 3', 61.20, 'Groceries', '2024-08-17'),
('Haircut & Salon', 40.00, 'Lifestyle', '2024-08-05'),
('Concert Tickets', 95.00, 'Lifestyle', '2024-08-22'),
('Electricity Bill', 76.30, 'Bills', '2024-08-25'),
('Mobile Bill', 25.50, 'Bills', '2024-08-31');

-- September
INSERT INTO expenses (title, amount, category, date) VALUES
('Groceries - Week 2', 52.90, 'Groceries', '2024-09-10'),
('Groceries - Week 4', 49.30, 'Groceries', '2024-09-24'),
('Gym Renewal', 60.00, 'Lifestyle', '2024-09-08'),
('Book Purchase', 30.00, 'Lifestyle', '2024-09-18'),
('Internet Bill', 46.70, 'Bills', '2024-09-27'),
('Gas Bill', 29.40, 'Bills', '2024-09-29');

-- October
INSERT INTO expenses (title, amount, category, date) VALUES
('Groceries - Week 1', 59.10, 'Groceries', '2024-10-03'),
('Groceries - Week 3', 53.00, 'Groceries', '2024-10-21'),
('Halloween Costumes', 75.00, 'Lifestyle', '2024-10-15'),
('Photography Workshop', 90.00, 'Lifestyle', '2024-10-26'),
('Electricity Bill', 79.20, 'Bills', '2024-10-28'),
('Water Bill', 22.30, 'Bills', '2024-10-31');

-- November
INSERT INTO expenses (title, amount, category, date) VALUES
('Groceries - Diwali Prep', 67.80, 'Groceries', '2024-11-01'),
('Groceries - Week 4', 64.50, 'Groceries', '2024-11-20'),
('Diwali Decorations', 85.00, 'Lifestyle', '2024-11-03'),
('Dinner Out', 60.00, 'Lifestyle', '2024-11-18'),
('Internet Bill', 47.00, 'Bills', '2024-11-26'),
('Mobile Bill', 24.60, 'Bills', '2024-11-29');

-- December
INSERT INTO expenses (title, amount, category, date) VALUES
('Groceries - Holiday Feast', 71.90, 'Groceries', '2024-12-10'),
('Groceries - New Year Prep', 66.20, 'Groceries', '2024-12-27'),
('Christmas Gifts', 140.00, 'Lifestyle', '2024-12-15'),
('Year-End Party', 120.00, 'Lifestyle', '2024-12-30'),
('Gas Bill', 33.90, 'Bills', '2024-12-24'),
('Internet Bill', 48.30, 'Bills', '2024-12-31');

select count(*) from expenses;