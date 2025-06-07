// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const authenticateToken = require('../middleware/authMiddleware'); // 🔐 Middleware

// ✅ GET all questions (open to all)
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving questions', error });
  }
});

// ✅ POST to add a new question (faculty only)
router.post('/add', authenticateToken, async (req, res) => {
  // ✅ Role-based check
  if (req.user.role !== 'faculty') {
    return res.status(403).json({ message: 'Access denied: Faculty only' });
  }

  try {
    const { questionText } = req.body;

    const exists = await Question.findOne({ questionText });
    if (exists) {
      return res.status(400).json({ message: 'Question already exists' });
    }

    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json({ message: 'Question added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving question', error });
  }
});

// ✅ GET a single question by ID (open to all)
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving question', error });
  }
});

// ✅ DELETE a question by ID (faculty only)
router.delete('/:id', authenticateToken, async (req, res) => {
  // ✅ Role-based check
  if (req.user.role !== 'faculty') {
    return res.status(403).json({ message: 'Access denied: Faculty only' });
  }

  try {
    const deleted = await Question.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question', error });
  }
});

// ✅ UPDATE a question (faculty only)
router.put('/:id', authenticateToken, async (req, res) => {
  // ✅ Role-based check
  if (req.user.role !== 'faculty') {
    return res.status(403).json({ message: 'Access denied: Faculty only' });
  }

  try {
    const updated = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question updated successfully', updated });
  } catch (error) {
    res.status(500).json({ message: 'Error updating question', error });
  }
});

// ✅ GET questions by category (open to all)
router.get('/category/:category', async (req, res) => {
  try {
    const questions = await Question.find({ category: req.params.category });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions by category', error });
  }
});

module.exports = router;
