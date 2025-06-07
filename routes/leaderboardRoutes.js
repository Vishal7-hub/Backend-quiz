const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/Leaderboard');



// POST /api/leaderboard/add-multiple
router.post('/add-multiple', async (req, res) => {
  try {
    const students = req.body; // Expecting an array of objects
    await Leaderboard.insertMany(students);
    res.status(201).json({ message: 'Scores added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding scores', error });
  }
});



//Motivation based on their Scores



// Route: GET /api/leaderboard/full
router.get('/full', async (req, res) => {
  try {
    const allStudents = await Leaderboard.find().sort({ score: -1 });

    const topStudents = allStudents.slice(0, 10).map((student) => {
      let message = '';
      if (student.score >= 95) {
        message = '🔥 Outstanding! You’re at the top!';
      } else if (student.score >= 90) {
        message = '🎯 Great job! Keep it up!';
      } else if (student.score >= 80) {
        message = '👏 Well done! Aim higher!';
      } else {
        message = '💪 Keep Hustling! You’re improving!';
      }

      return {
        username: student.username,
        score: student.score,
        message
      };
    });

    const otherStudents = allStudents.slice(10).map((student) => {
      let message = '';
      if (student.score >= 80) {
        message = '🚀 You’re doing great! Climb into the top 10!';
      } else if (student.score >= 60) {
        message = '👍 Good work! Practice more to level up!';
      } else if (student.score >= 40) {
        message = '✨ Keep learning! Improvement is coming!';
      } else {
        message = '🛠️ Don’t give up, let attitude decide your altitude';
      }

      return {
        username: student.username,
        score: student.score,
        message
      };
    });

    res.status(200).json({
      topStudents,
      otherStudents
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard data', error });
  }
});

module.exports = router;
