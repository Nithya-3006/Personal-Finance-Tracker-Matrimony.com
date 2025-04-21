USE finance_manager;
drop table budget;
CREATE TABLE budget (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category ENUM('groceries', 'lifestyle', 'bills') NOT NULL,
  budget_limit DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- January 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 50.00, '2023-01-01'),
('lifestyle', 30.00, '2023-01-01'),
('bills', 80.00, '2023-01-01');

-- February 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 60.00, '2023-02-01'),
('lifestyle', 40.00, '2023-02-01'),
('bills', 20.00, '2023-02-01');

-- March 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 50.00, '2023-03-01'),
('lifestyle', 20.00, '2023-03-01'),
('bills', 50.00, '2023-03-01');

-- April 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 60.00, '2023-04-01'),
('lifestyle', 70.00, '2023-04-01'),
('bills', 30.00, '2023-04-01');

-- May 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 50.00, '2023-05-01'),
('lifestyle', 60.00, '2023-05-01'),
('bills', 40.00, '2023-05-01');

-- June 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 50.00, '2023-06-01'),
('lifestyle', 30.00, '2023-06-01'),
('bills', 80.00, '2023-06-01');

-- July 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 50.00, '2023-07-01'),
('lifestyle', 50.00, '2023-07-01'),
('bills', 50.00, '2023-07-01');

-- August 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 70.00, '2023-08-01'),
('lifestyle', 40.00, '2023-08-01'),
('bills', 30.00, '2023-08-01');

-- September 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 60.00, '2023-09-01'),
('lifestyle', 50.00, '2023-09-01'),
('bills', 30.00, '2023-09-01');

-- October 2023
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 50.00, '2023-10-01'),
('lifestyle', 40.00, '2023-10-01'),
('bills', 40.00, '2023-10-01');


-- January 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 110.00, '2024-01-01'),
('lifestyle', 43.00, '2024-01-01'),
('bills', 100.00, '2024-01-01');

-- February 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 100.00, '2024-02-01'),
('lifestyle', 130.00, '2024-02-01'),
('bills', 70.00, '2024-02-01');

-- March 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 100.00, '2024-03-01'),
('lifestyle', 100.00, '2024-03-01'),
('bills', 90.00, '2024-03-01');

-- April 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 120.00, '2024-04-01'),
('lifestyle', 80.00, '2024-04-01'),
('bills', 110.00, '2024-04-01');

-- May 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 130.00, '2024-05-01'),
('lifestyle', 90.00, '2024-05-01'),
('bills', 90.00, '2024-05-01');

-- June 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 110.00, '2024-06-01'),
('lifestyle', 140.00, '2024-06-01'),
('bills', 110.00, '2024-06-01');

-- July 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 100.00, '2024-07-01'),
('lifestyle', 100.00, '2024-07-01'),
('bills', 70.00, '2024-07-01');

-- August 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 130.00, '2024-08-01'),
('lifestyle', 140.00, '2024-08-01'),
('bills', 110.00, '2024-08-01');

-- September 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 110.00, '2024-09-01'),
('lifestyle', 100.00, '2024-09-01'),
('bills', 80.00, '2024-09-01');

-- October 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 120.00, '2024-10-01'),
('lifestyle', 170.00, '2024-10-01'),
('bills', 110.00, '2024-10-01');

-- November 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 140.00, '2024-11-01'),
('lifestyle', 150.00, '2024-11-01'),
('bills', 80.00, '2024-11-01');

-- December 2024
INSERT INTO budget (category, budget_limit, created_at) VALUES
('groceries', 150.00, '2024-12-01'),
('lifestyle', 300.00, '2024-12-01'),
('bills', 90.00, '2024-12-01');

