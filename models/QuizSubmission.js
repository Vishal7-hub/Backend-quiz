const mongoose = require('mongoose');

const quizSubmissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional if you have user model
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
      selectedOption: String,
      isCorrect: Boolean
    }
  ],
  score: Number,
  totalQuestions: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizSubmission', quizSubmissionSchema);
