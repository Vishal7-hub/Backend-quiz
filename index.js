const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));

// Routes
const questionRoutes = require('./routes/questionRoutes');
app.use('/api/questions', questionRoutes);
// feedback routes
const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api/feedback', feedbackRoutes);
//leadrerroutes
const leaderboardRoutes = require('./routes/leaderboardRoutes');
app.use('/api/leaderboard', leaderboardRoutes);
//authroutes
const authRoutes = require('./routes/authRoutes');

// quizroutes
const quizRoutes = require('./routes/quizRoutes');
app.use('/api/quiz', quizRoutes);


app.use('/api/auth', authRoutes); // This will prefix all routes with /auth
//authmiddleware
const authenticateToken = require('./middleware/authMiddleware');



// Test route
app.get('/', (req, res) => {
  res.send('Quiz Backend is Running 🎉');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
 