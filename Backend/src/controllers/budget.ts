import { Request, Response } from 'express';
import  db  from '../config/db';

export const getBudgets = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.execute('SELECT * FROM budget');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching budgets' });
  }
};

export const createBudget = async (req: Request, res: Response) => {
  try {
    const { category, limit } = req.body;
    await db.execute('INSERT INTO budget (category, budget_limit) VALUES (?, ?)', [category, limit]);
    res.json({ message: 'Budget created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating budget' });
  }
};

export const updateBudget = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { category, limit } = req.body;
    await db.execute('UPDATE budget SET category = ?, budget_limit = ? WHERE id = ?', [category, limit, id]);
    res.json({ message: 'Budget updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating budget' });
  }
};

export const deleteBudget = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.execute('DELETE FROM budget WHERE id = ?', [id]);
    res.json({ message: 'Budget deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting budget' });
  }
};
