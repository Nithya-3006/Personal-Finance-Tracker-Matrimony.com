export interface IExpenses{
    id?:number;
    title: string;
    amount: number;
    category: string;
    date: Date;
    created_at?: Date;
}

/*Sql table schema

CREATE TABLE expenses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);*/