import express from "express";
import dotenv from "dotenv";
import expensesRouter from "./routes/expensesRoutes"
import cors from 'cors'
import path from "path";
import budgetRoutes from "./routes/expensesRoutes"
dotenv.config({ path: path.resolve(__dirname, "../config/.env") });

const app = express();
app.use(express.json()); 
app.use(cors());
app.use("/api", expensesRouter);
app.use('/api/budget', budgetRoutes);
console.log(process.env.PORTNO)

const PORT = process.env.PORTNO || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
