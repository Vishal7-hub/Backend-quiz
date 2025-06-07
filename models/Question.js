// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of answer choices
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  category: {
    type: String, // Optional: like 'Math', 'GK', 'Science'
    default: 'General',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Question', questionSchema);
