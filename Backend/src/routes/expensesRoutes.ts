import { Router } from "express";
import { getAllExpenses , getExpensesById, addExpenses , updateExpenses , deleteExpenses , filterExpenses } from "../controllers/expenses";
import { getMonthlyCategoryTotals,getExpensesByCategory } from "../controllers/expenses";
const router = Router();

router.get("/expenses", (req, res) => getAllExpenses(req, res));
router.get("/expenses/:id", (req, res) => getExpensesById(req, res));
router.post("/expenses/form/add", (req, res) => addExpenses(req, res));
router.put("/expenses/:id", (req, res) => updateExpenses(req, res));
router.delete("/expenses/:id", (req, res) => deleteExpenses(req, res));
router.post("/expenses/filter", (req, res) => filterExpenses(req, res));
router.get("/expenses/category/monthly",(req,res)=>getMonthlyCategoryTotals(req,res));
router.get("/expenses/category/total",(req,res)=>getExpensesByCategory(req,res));
export default router;