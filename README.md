Todo App
A full-stack Todo application built with React, Node.js/Express, MongoDB Atlas, and styled with Tailwind CSS. The app allows users to create, view, edit, and delete tasks, with data stored in a cloud database and deployed on Render. This project is designed to be beginner-friendly, showcasing a modern MERN stack workflow.
Features

Add Tasks: Create new tasks with a name and optional description.
View Tasks: Display a list of tasks with a clean, card-based UI.
Edit Tasks: Update task names and descriptions inline.
Delete Tasks: Remove tasks from the list.
Responsive Design: Works on mobile and desktop devices.
Cloud Storage: Tasks are stored in MongoDB Atlas.
Deployed on Render: Accessible via a live URL with separate backend and frontend services.

Technologies

Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express, Mongoose
Database: MongoDB Atlas
Deployment: Render (Web Service for backend, Static Site for frontend)
Version Control: Git, GitHub

Prerequisites
Before setting up the project, ensure you have:

Node.js and npm: Install from nodejs.org (node -v, npm -v).
Git: Install from git-scm.com (git --version).
MongoDB Atlas Account: Sign up at mongodb.com/cloud/atlas.
Render Account: Sign up at render.com.
GitHub Account: Sign up at github.com.
A code editor (e.g., Visual Studio Code).

Installation

Clone the Repository:
git clone https://github.com/your-username/todo-app.git
cd todo-app


Set Up Backend:

Navigate to the server folder:cd server
npm install


Create a .env file in server:MONGODB_URI=mongodb+srv://appuser:<your-password>@cluster0.xxxxx.mongodb.net/tododb?retryWrites=true&w=majority
PORT=5000

Replace <your-password> and cluster0.xxxxx with your MongoDB Atlas connection string.
Start the backend:node index.js

Verify at http://localhost:5000/api/items (should return []).


Set Up Frontend:

Navigate to the client folder:cd ../client
npm install


Ensure Tailwind CSS is configured:npx tailwindcss init -p

Verify tailwind.config.js, postcss.config.js, and src/index.css match the project structure.
Add proxy to client/package.json:"proxy": "http://localhost:5000"


Start the frontend:npm start

Open http://localhost:3000 to test the app.



Usage

Add a Task: Enter a task name (required) and description (optional), then click "Add Item".
Edit a Task: Click "Edit" on a task, update the fields, and click "Save" or "Cancel".
Delete a Task: Click "Delete" to remove a task.
View Tasks: Tasks are displayed in a card-based list, with responsive styling.

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

Locally:
Run backend (node index.js) and frontend (npm start).
Test add, edit, and delete functionality at http://localhost:3000.


Deployed:
Visit the frontend URL and verify all features.
Check MongoDB Atlas to confirm data persistence.



Troubleshooting

Tailwind CSS Error: Ensure tailwindcss@3.4.13, postcss@8.4.47, and autoprefixer@10.4.20 are installed.npm install tailwindcss@3.4.13 postcss@8.4.47 autoprefixer@10.4.20
npx tailwindcss init -p


npm Vulnerabilities: Run npm audit fix. Some may persist due to create-react-app.
API Errors: Verify backend URL and MongoDB Atlas connection string.
404 on Refresh: Ensure the /* to /index.html rewrite rule is set.

Screenshots
(Optional: Add screenshots of the app UI, e.g., task list, edit form. Upload images to GitHub and link here.)
Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/new-feature).
Commit changes (git commit -m "Add new feature").
Push to the branch (git push origin feature/new-feature).
Open a pull request.

License
This project is licensed under the MIT License.
