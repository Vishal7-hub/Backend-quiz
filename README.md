#  Smart Quiz Platform Backend

A scalable backend system built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **JWT Authentication**.

Designed for schools, colleges, coding contests, and online assessments.

---

#  Features

###  Student

- Register/Login
- Attempt Quiz
- Submit Quiz
- View Score
- Leaderboard
- Motivational Result Message

---

###  Faculty/Admin

- Secure JWT Login
- Add Questions
- Update Questions
- Delete Questions
- View All Questions
- Manage Quiz Database

---

###  Leaderboard

- Top 10 Students
- Score Ranking
- Time-based Ranking
- Motivational message for remaining users

---

###  Feedback System

- Users can submit feedback
- Stores feedback in MongoDB
- Admin can view all feedback

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | REST API |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Encryption |
| CORS | Cross-Origin Requests |
| dotenv | Environment Variables |

---

#  Folder Structure

```
Backend-Quiz
│
├── middleware
│      authMiddleware.js
│
├── models
│      User.js
│      Question.js
│      Feedback.js
│      Leaderboard.js
│
├── routes
│      authRoutes.js
│      questionRoutes.js
│      feedbackRoutes.js
│      leaderboardRoutes.js
│      quizRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── index.js
└── README.md
```

---

#  Authentication

JWT Authentication protects all admin APIs.

Protected Routes

- Add Question
- Update Question
- Delete Question

---

#  REST APIs

## Authentication

POST `/api/auth/register`

POST `/api/auth/login`

---

## Questions

GET `/api/questions`

GET `/api/questions/:id`

POST `/api/questions/add`

PUT `/api/questions/:id`

DELETE `/api/questions/:id`

---

## Quiz

GET `/api/quiz`

POST `/api/quiz/submit`

---

## Feedback

POST `/api/feedback`

GET `/api/feedback`

---

## Leaderboard

POST `/api/leaderboard`

GET `/api/leaderboard/top`

---

#  Installation

Clone Repository

```bash
git clone https://github.com/Vishal7-hub/Backend-quiz.git
```

Install Packages

```bash
npm install
```

Create .env

```
MONGO_URI=YourMongoURI
JWT_SECRET=YourSecret
PORT=5000
```

Run Project

```bash
node index.js
```

---

#  Future Enhancements

- AI-based Question Recommendation
- Email Verification
- OTP Login
- Quiz Categories
- Timer Based Quiz
- Certificate Generation
- Analytics Dashboard
- Role Based Access Control
- Docker Deployment
- Redis Caching

---

#  API Testing

The APIs were tested using **Postman**.

---

#  Learning Outcomes

During this project I learned

- REST API Development
- JWT Authentication
- MongoDB Atlas Integration
- Database Schema Design
- Middleware
- Error Handling
- CRUD Operations
- Backend Project Architecture
- API Testing using Postman

---

#  Author

**Vishal**

Backend Developer
