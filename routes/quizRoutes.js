// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET /api/quiz/start - Serve random quiz questions
router.get('/start', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 4 } }]); // fetch 5 random questions

    // Optional: shuffle options if your schema supports options as an array
    const shuffledQuestions = questions.map(q => {
      if (q.options && Array.isArray(q.options)) {
        const shuffled = [...q.options].sort(() => Math.random() - 0.5);
        return { ...q._doc, options: shuffled };
      }
      return q;
    });

    res.json(shuffledQuestions);
  } catch (error) {
    res.status(500).json({ message: 'Error starting quiz', error });
  }
});

module.exports = router;

