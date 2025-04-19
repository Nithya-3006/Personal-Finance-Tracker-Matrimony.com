const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'finance_manager'
});

app.get('/api/budget', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM budget');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching budgets' });
  }
});

app.post('/api/budget', async (req, res) => {
  try {
    const { category, limit } = req.body;
    const [result] = await db.execute('INSERT INTO budget (category, `limit`) VALUES (?, ?)', [category, limit]);
    res.json({ message: 'Budget created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating budget' });
  }
});

app.put('/api/budget/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { category, limit } = req.body;
    const [result] = await db.execute('UPDATE budget SET category = ?, `limit` = ? WHERE id = ?', [category, limit, id]);
    res.json({ message: 'Budget updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating budget' });
  }
});

app.delete('/api/budget/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await db.execute('DELETE FROM budget WHERE id = ?', [id]);
    res.json({ message: 'Budget deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting budget' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});