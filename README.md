Todo App
A full-stack Todo application built with React, Node.js/Express, MongoDB Atlas, and styled with Tailwind CSS. Users can create, view, edit, and delete tasks, with data stored in a cloud database and deployed on Render. This project is beginner-friendly, demonstrating a modern MERN stack workflow.
Features

Add Tasks: Create tasks with a required name and optional description.
View Tasks: Display tasks in a clean, card-based UI.
Edit Tasks: Update task names and descriptions inline.
Delete Tasks: Remove tasks from the list.
Responsive Design: Optimized for mobile and desktop devices.
Cloud Storage: Tasks persist in MongoDB Atlas.
Live Deployment: Hosted on Render with separate backend and frontend services.

Technologies

Frontend: React (18.2.0), Tailwind CSS (3.4.13), Axios (1.7.7)
Backend: Node.js (18.x), Express (4.21.0), Mongoose (8.7.0)
Database: MongoDB Atlas
Deployment: Render (Web Service for backend, Static Site for frontend)
Version Control: Git, GitHub

Live Demo
(Optional: Add live URLs after deployment, e.g., https://todo-frontend.onrender.com for frontend and https://todo-backend.onrender.com/api/items for backend.)
Prerequisites
Ensure you have:

Node.js and npm: Install from nodejs.org (verify: node -v, npm -v).
Git: Install from git-scm.com (verify: git --version).
MongoDB Atlas Account: Sign up at mongodb.com/cloud/atlas.
Render Account: Sign up at render.com.
GitHub Account: Sign up at github.com.
Code editor (e.g., Visual Studio Code).

Installation
1. Clone the Repository
git clone https://github.com/your-username/todo-app.git
cd todo-app

2. Set Up Backend

Navigate to the server folder:cd server
npm install


Create a .env file in server:MONGODB_URI=mongodb+srv://appuser:<your-password>@cluster0.xxxxx.mongodb.net/tododb?retryWrites=true&w=majority
PORT=5000

Replace <your-password> and cluster0.xxxxx with your MongoDB Atlas connection string.
Start the backend:node index.js


Verify at http://localhost:5000/api/items (should return []).

3. Set Up Frontend

Navigate to the client folder:cd ../client
npm install


Configure Tailwind CSS:npx tailwindcss init -p

Ensure tailwind.config.js, postcss.config.js, and src/index.css are set up:
tailwind.config.js:module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};


postcss.config.js:module.exports = {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};


src/index.css:@tailwind base;
@tailwind components;
@tailwind utilities;




Add proxy to client/package.json:"proxy": "http://localhost:5000"


Start the frontend:npm start


Open http://localhost:3000 to test the app.

Usage

Add a Task: Enter a task name (required) and description (optional), click Add Item.
Edit a Task: Click Edit, update fields, and click Save or Cancel.
Delete a Task: Click Delete to remove a task.
View Tasks: Tasks appear in a responsive, card-based list.

Project Structure
todo-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main component with add/edit/delete
│   │   ├── index.css      # Tailwind CSS styles
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
├── server/                 # Node.js/Express backend
│   ├── index.js           # API routes and MongoDB connection
│   ├── .env               # Environment variables
│   ├── package.json
├── README.md
├── .gitignore

Deployment on Render
Backend (Web Service)

In Render dashboard, click New > Web Service.
Connect your GitHub repository (todo-app).
Configure:
Name: todo-backend
Root Directory: server
Runtime: Node
Build Command: npm install
Start Command: node index.js
Environment Variables:
MONGODB_URI: Your MongoDB Atlas connection string
PORT: 5000 (optional)




Deploy and note the URL (e.g., https://todo-backend.onrender.com).

Frontend (Static Site)

Update client/src/App.js API URLs to the deployed backend (e.g., https://todo-backend.onrender.com/api/items).
In Render dashboard, click New > Static Site.
Configure:
Name: todo-frontend
Root Directory: client
Build Command: npm install && npm run build
Publish Directory: build


Add a rewrite rule:
Source Path: /*
Destination Path: /index.html
Action: Rewrite


Deploy and test at the provided URL (e.g., https://todo-frontend.onrender.com).

Testing
Locally

Run backend:cd server
node index.js


Run frontend:cd client
npm start


Test add, edit, and delete at http://localhost:3000.

Deployed

Visit the frontend URL (e.g., https://todo-frontend.onrender.com).
Verify all features work.
Check MongoDB Atlas to confirm data persistence.

Troubleshooting

Tailwind CSS Error: Ensure correct versions:npm install tailwindcss@3.4.13 postcss@8.4.47 autoprefixer@10.4.20
npx tailwindcss init -p


npm Vulnerabilities: Run:npm audit fix

Some may persist due to create-react-app (safe for learning).
API Errors: Verify backend URL and MongoDB Atlas IP whitelist (0.0.0.0/0 for simplicity).
404 on Refresh: Ensure the /* to /index.html rewrite rule is set in Render.

Screenshots
To add screenshots:

Take images of the app (e.g., task list, edit form).
Create an images folder in the repository:mkdir images


Upload images to images and link in README:![Task List](images/task-list.png)



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch:git checkout -b feature/new-feature


Commit changes:git commit -m "Add new feature"


Push to the branch:git push origin feature/new-feature


Open a pull request.

License
This project is licensed under the MIT License.
