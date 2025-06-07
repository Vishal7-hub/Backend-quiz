const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /api/feedback – Submit feedback
router.post('/', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving feedback', error });
  }
});

// GET /api/feedback – Get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback', error });
  }
});

module.exports = router;
