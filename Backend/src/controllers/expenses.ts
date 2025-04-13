import { Request, Response } from "express";
import { RowDataPacket, OkPacket } from "mysql2";
import db from "../config/db"; 

export const getAllExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      sortBy = 'date',
      sortOrder = 'DESC',
      category,
      minAmount,
      maxAmount,
      startDate,
      endDate
    } = req.query;
    const SortColumns=['title','amount','category','date'];
    const SortOrdering=['ASC','DESC'];
    const safeSortCol=SortColumns.includes(sortBy as string)?sortBy:'date';
    const safeSortOrder=SortOrdering.includes((sortOrder as string).toUpperCase())?(sortOrder as string).toUpperCase():'DESC';
    let query = 'SELECT * FROM expenses WHERE 1=1';
    const params: any[] = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (minAmount) {
      query += ' AND amount >= ?';
      params.push(minAmount);
    }

    if (maxAmount) {
      query += ' AND amount <= ?';
      params.push(maxAmount);
    }

    if (startDate) {
      query += ' AND date >= ?';
      params.push(startDate);
    }

    if (endDate) {
      query += ' AND date <= ?';
      params.push(endDate);
    }

    query += ` ORDER BY ${safeSortCol} ${safeSortOrder}`;

    const [rows] = await db.execute(query,params);
    console.log(rows)
debugger;
res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};
export const filterExpenses = async (req:Request, res:Response) => {
  try {
    const { categories, minAmount, maxAmount, fromDate, toDate } = req.body;

    let query = "SELECT * FROM expenses WHERE 1=1";
    const params = [];

    if (categories?.length) {
      query += ` AND category IN (${categories.map(() => '?').join(',')})`;
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

/*export const getAllExpenses = async (req:Request, res:Response) => {
  try {
    console.log("Fetching all expenses...");
    const [expenses] = await db.query("SELECT * FROM expenses");
    res.json(expenses);
  } catch (error) {
    console.error("Error in getAllExpenses:", error);  // 👈 LOG THIS
    res.status(500).json({ message: "Internal server error" });
  }
};*/

export const getExpensesById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.params.id)

    debugger
    const [rows] = await db.execute("SELECT * FROM expenses WHERE id = ?", [
      req.params.id,
    ]);
    const expenses = rows as RowDataPacket[]; // Explicitly cast

    if (expenses.length === 0) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.json(expenses[0]);
    console.log(expenses[0])
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};
 
export const addExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, amount, category ,date } = req.body;
    const [result] = await db.execute(
      "INSERT INTO expenses (title, amount, category,date) VALUES (?, ?, ?,?)",
      [title,amount,category,date]
    );
    const insertResult = result as OkPacket; // Explicitly cast

    if (insertResult.affectedRows > 0) {
      res
        .status(201)
        .json({
          message: "Expense added successfully",
          productId: insertResult.insertId,
        });
    } else {
      res.status(500).json({ message: "Failed to insert expense" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding expense", error });
  }
};


export const updateExpenses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("inside update expenses")
    const { title, amount, category} = req.body; //destructuring
        const { id } = req.params;
    console.log(
      "UPDATE expenses SET title = ?, amount = ? , category=? WHERE id = ?",
      [title, parseInt(amount),category, id]
    );
    const [result] = await db.execute(
      "UPDATE expenses SET title = ?, amount = ? , category=?  WHERE id = ?",
      [title, parseInt(amount),category, id]
    );
    
    const updateResult = result as OkPacket; // Explicitly cast

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
    const deleteResult = result as OkPacket; // Explicitly cast

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
    const { categoryName } = req.params;
    const [rows] = await db.query("SELECT * FROM expenses WHERE category=?",[categoryName]);
    
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses by category", error });
  }
};