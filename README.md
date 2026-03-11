# Role-Based Task Management API

A secure backend REST API for collaborative project and task management built using Node.js, Express, and MongoDB.

This application allows users to register, create projects, assign tasks, and enforce role-based access control using JWT authentication.

The system demonstrates backend architecture, authentication, authorization, relational data modeling in MongoDB, and secure API design.

------------------------------------------------------------

TECH STACK

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt (Password Hashing)

------------------------------------------------------------

FEATURES

Authentication
- User registration
- Secure login using JWT
- Password hashing with bcrypt
- Protected routes using authentication middleware

Authorization
- Role-Based Access Control (Admin / User)
- Only project members can create tasks
- Only assigned users can update task status
- Admin-only route to view all projects

Project Management
- Create project
- View projects where user is a member
- Owner automatically added to project members

Task Management
- Create task inside a project
- Assign task to a user
- Update task status (Pending / In Progress / Completed)
- Fetch tasks for a specific project

------------------------------------------------------------

API ENDPOINTS

Authentication

POST   /api/auth/register
POST   /api/auth/login

Projects

POST   /api/projects
GET    /api/projects
GET    /api/projects/all   (Admin Only)

Tasks

POST   /api/tasks
GET    /api/tasks/:projectId
PUT    /api/tasks/:id/status

------------------------------------------------------------

FOLDER STRUCTURE

/config
/controllers
/models
/routes
/middleware
app.js

The project follows a modular MVC-inspired architecture for scalability and maintainability.

------------------------------------------------------------

DATABASE DESIGN

User
- name
- email
- password
- role

Project
- title
- description
- owner
- members (Array of Users)

Task
- title
- description
- project (Reference to Project)
- assignedTo (Reference to User)
- status
- dueDate

------------------------------------------------------------

SETUP INSTRUCTIONS

1. Clone the repository

git clone https://github.com/yourusername/role-based-task-management-api.git

2. Navigate into project folder

cd role-based-task-management-api

3. Install dependencies

npm install

4. Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

5. Start the server

npx nodemon app.js

Server will run at:

http://localhost:5000

------------------------------------------------------------

TESTING

You can test the API using Postman or Thunder Client.

All protected routes require the following header:

Authorization: Bearer <your_jwt_token>

------------------------------------------------------------

PROJECT PURPOSE

This project was built to demonstrate backend engineering concepts including:

- REST API design
- Authentication and authorization
- Middleware usage
- MongoDB relational modeling
- Secure route protection
- Business logic enforcement

------------------------------------------------------------

AUTHOR

Russell Martins
Backend Developer | Node.js | MongoDB | REST APIs
