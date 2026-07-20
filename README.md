#  Failure Journal AI

> **Turn Every Failure into Your Next Success**

 **Live Demo:** https://failure-journal-ai.netlify.app

 **GitHub Repository:** https://github.com/mukulrpractice/failure-journal-ai

Failure Journal AI is a full-stack MERN application that helps users record failures, reflect on lessons learned, track personal growth, and receive AI-powered insights to improve continuously.

---

# Features

### Authentication

* Secure User Registration & Login
* JWT Authentication
* Protected Routes
* User-specific data isolation

### Failure Journal

* Add Failure Entries
* Update Existing Entries
* Delete Entries
* View Complete History

### AI Powered Features

* AI Lesson Generator
* AI Action Plan Generator
* AI Mentor Insights
* Root Cause Analysis
* Strength Identification
* Improvement Plan
* Recommended Learning Topics
* Recovery Time Estimation
* Motivational Guidance

### Growth Tracking

* Progress Tracking
* Status Management
* Target Date
* Reminder Settings
* Success Story Tracking

### Dashboard & Analytics

* Dashboard Statistics
* Mood Analytics
* Progress Analytics
* Charts & Visualizations

### Smart Management

* Search Failures
* Filter by Mood
* Sort Entries
* Responsive Interface

### Export

* Export Individual Failure as PDF
* Export Failure List as CSV

### UI

* Responsive Design
* Modern Dashboard
* Professional Cards
* Clean User Experience

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* Chart.js
* jsPDF
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

## AI

* Groq API
* Llama 3.3 70B Versatile

## Deployment

- Netlify (Frontend)
- Render (Backend)
- MongoDB Atlas

---

# Project Structure

```text
failure-journal/

├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Install Backend

```bash
cd backend
npm install
```

## Install Frontend

```bash
cd frontend
npm install
```

---

# Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Create a `.env` file inside the **frontend** folder.

```env
VITE_API_URL=--------
```

---

# Run the Project

## Backend

```bash
npm run dev
```

## Frontend

```bash
npm run dev
```

---

# Current Version

**Version:** v1.0

### Included Features

* Authentication
* AI Lesson Generation
* AI Mentor Insights
* Dashboard
* Analytics
* PDF Export
* CSV Export
* Growth Tracking
* Responsive Design

---

# Upcoming Versions

## v1.5

* Enhanced Dashboard Widgets
* Improved PDF Reports
* Performance Optimizations

## v2.0

* AI Weekly Coach
* Google Calendar Integration
* Smart Email Reminder System
* AI Habit Tracking

## v3.0

* Voice Journal
* Speech-to-Text
* AI Growth Prediction
* Community Learning Platform

> Some advanced AI automation and cloud-based capabilities are planned for future releases because they require premium third-party AI services and additional cloud infrastructure.

---

#  Developer

**Mukul Rane**

Final Year B.E. Computer Engineering

Savitribai Phule Pune University
---

# Note

This project is deployed using the Render Free Tier.

If the backend has been inactive for some time, the first request may take around **30–60 seconds** while the server wakes up.

# License

This project is created for educational and portfolio purposes.
