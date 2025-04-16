import { Request, Response } from "express";
import { RowDataPacket, OkPacket } from "mysql2";
import db from "../config/db";

export const filterExpenses = async (req: Request, res: Response) => {
  try {
    const { categories, minAmount, maxAmount, fromDate, toDate } = req.body;

    let query = "SELECT * FROM expenses WHERE 1=1";
    const params = [];

    if (categories?.length) {
      query += ` AND category IN (${categories.map(() => "?").join(",")})`;
      params.push(...categories);
    }

    if (minAmount) {
      query += " AND amount >= ?";
      params.push(minAmount);
    }

    if (maxAmount) {
      query += " AND amount <= ?";
      params.push(maxAmount);
    }

    if (fromDate) {
      query += " AND date >= ?";
      params.push(fromDate);
    }

    if (toDate) {
      query += " AND date <= ?";
      params.push(toDate);
    }

    const [results] = await db.query(query, params);
    res.json(results);
  } catch (error) {
    console.error("Error filtering expenses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all expenses...");
    const [expenses] = await db.query("SELECT * FROM expenses");
    res.json(expenses);
  } catch (error) {
    console.error("Error in getAllExpenses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getExpensesById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.params.id);

    debugger;
    const [rows] = await db.execute("SELECT * FROM expenses WHERE id = ?", [
      req.params.id,
    ]);
    const expenses = rows as RowDataPacket[];

    if (expenses.length === 0) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.json(expenses[0]);
    console.log(expenses[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

export const addExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("Incoming request body:", req.body);
    const { title, amount, category, date } = req.body;
    const formattedDate = new Date(date).toISOString().substring(0, 10);
    const [result] = await db.execute(
      "INSERT INTO expenses (title, amount, category,date) VALUES (?, ?, ?,?)",
      [title, amount, category, formattedDate]
    );
    const insertResult = result as OkPacket;

    if (insertResult.affectedRows > 0) {
      res.status(201).json({
        message: "Expense added successfully",
        productId: insertResult.insertId,
      });
    } else {
      res.status(500).json({ message: "Failed to insert expense" });
    }
  } catch (error) {
    console.log("Error in adding expense", req.body, error);
    res.status(500).json({ message: "Error adding expense", error });
  }
};

export const updateExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("inside update expenses");
    const { title, amount, category } = req.body;
    const { id } = req.params;
    console.log(
      "UPDATE expenses SET title = ?, amount = ? , category=? WHERE id = ?",
      [title, parseInt(amount), category, id]
    );
    const [result] = await db.execute(
      "UPDATE expenses SET title = ?, amount = ? , category=?  WHERE id = ?",
      [title, parseInt(amount), category, id]
    );

    const updateResult = result as OkPacket;

    if (updateResult.affectedRows === 0) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.json({ message: "Expense updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error });
  }
};

export const deleteExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const [result] = await db.execute("DELETE FROM expenses WHERE id = ?", [
      id,
    ]);
    const deleteResult = result as OkPacket;

    if (deleteResult.affectedRows === 0) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};

export const getExpensesByCategory = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query(
      "SELECT category, SUM(amount) AS total FROM expenses GROUP BY category"
    );
    console.log("Fetching expenses sum by cateory");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching expenses by category", error });
  }
};

export const getMonthlyCategoryTotals = async (req: Request, res: Response) => {
  try {
    const { year, month } = req.query;
    const now = new Date();
    const selectedYear = year || now.getFullYear();
    const selectedMonth = month || now.getMonth() + 1;

    const monthString = String(selectedMonth).padStart(2, "0");

    const [rows] = await db.query(
      `SELECT 
         category,
         SUM(amount) AS total
       FROM expenses
       WHERE DATE_FORMAT(date, '%Y-%m') = ?
       GROUP BY category`,
      [`${selectedYear}-${monthString}`]
    );

    res.json({
      month: monthString,
      year: selectedYear,
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching monthly totals by category:", error);
    res.status(500).json({
      message: "Error fetching monthly totals by category",
      error,
    });
  }
};
