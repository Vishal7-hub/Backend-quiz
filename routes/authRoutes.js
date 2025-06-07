// routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = 'your_jwt_secret'; // Same as in authMiddleware.js

// Dummy users
const users = {
  student: { username: 'student1', password: 'pass123' },
  faculty: { username: 'admin', password: 'admin123' }
};

// Student login
router.post('/login/student', (req, res) => {
  const { username, password } = req.body;

  if (
    username === users.student.username &&
    password === users.student.password
  ) {
    const token = jwt.sign({ username, role: 'student' }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Student login successful', token });
  }

  res.status(401).json({ message: 'Invalid student credentials' });
});

// Faculty login
router.post('/login/faculty', (req, res) => {
  const { username, password } = req.body;

  if (
    username === users.faculty.username &&
    password === users.faculty.password
  ) {
    const token = jwt.sign({ username, role: 'faculty' }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Faculty login successful', token });
  }

  res.status(401).json({ message: 'Invalid faculty credentials' });
});

module.exports = router;
