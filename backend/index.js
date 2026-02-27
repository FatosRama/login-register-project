const express  = require('express');
const cors = require('cors');
const {Pool} = require('pg');
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'backendtest',
    password:'fatos2005',
    port: 5432,
});

app.post('/register', async (req, res) => {
  const { name, surname, email, phone_number, password } = req.body;

  try {
    await pool.query(
      'INSERT INTO registered_user (name, surname, email, phone_number, password) VALUES ($1, $2, $3, $4, $5)',
      [name, surname, email, phone_number, password]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Database error' });
  }
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});