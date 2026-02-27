const express  = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
app.use(cors());
app.use(express.json());


app.post('/register', async (req, res) => {
  const { name, surname, email, phone_number, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO registered_user (name, surname, email, phone_number, password) VALUES ($1, $2, $3, $4, $5)',
      [name, surname, email, phone_number, password]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Database error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});