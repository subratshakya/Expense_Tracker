📊 Expense Tracker

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application to manage and track expenses.
It allows users to add, delete, and view expenses with secure authentication and persistent storage.

⸻

🚀 Features
	•	User Authentication
	•	Secure login & signup with JWT authentication.
	•	Passwords hashed with bcrypt.
	•	Expense Management
	•	Add, edit, and delete expenses.
	•	Categorize expenses (food, travel, bills, etc.).
	•	View expense history with filtering options.
	•	Frontend (React)
	•	Built with React.js for dynamic UI.
	•	Uses axios to interact with backend APIs.
	•	State management using React hooks.
	•	Backend (Node + Express)
	•	RESTful API endpoints for user and expense management.
	•	Middleware for authentication & validation.
	•	Connected to MongoDB for persistent storage.

⸻

🛠️ Tech Stack
	•	Frontend: React.js, Axios, HTML, CSS
	•	Backend: Node.js, Express.js
	•	Database: MongoDB (Mongoose ODM)
	•	Authentication: JWT, bcrypt

⸻

📂 Project Structure

Expense_Tracker/
│── backend/              # Express + Node.js server
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── server.js         # Entry point
│
│── frontend/             # React app
│   ├── src/
│   │   ├── api/          # Axios API wrappers
│   │   ├── components/   # React components
│   │   ├── pages/        # Main pages
│   │   └── App.js        # Root component
│
└── README.md


⸻

⚡ API Endpoints

Auth Routes
	•	POST /api/auth/register → Register new user
	•	POST /api/auth/login → User login

Expense Routes
	•	GET /api/expenses → Fetch all expenses for logged-in user
	•	POST /api/expenses → Add a new expense
	•	DELETE /api/expenses/:id → Delete an expense

⸻

🔧 Installation
	1.	Clone the repository

git clone https://github.com/subratshakya/Expense_Tracker.git
cd Expense_Tracker


	2.	Install backend dependencies

cd backend
npm install


	3.	Install frontend dependencies

cd ../frontend
npm install


	4.	Create a .env file inside backend

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


	5.	Start backend server

cd backend
npm start


	6.	Start frontend React app

cd frontend
npm start


