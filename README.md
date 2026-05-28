# Backend API Project

A secure and scalable backend API built with Node.js, Express, MongoDB, and Mongoose.

This project includes:

* User authentication using JWT
* Authorization and protected routes
* Subject management APIs
* Attendance tracking logic
* MongoDB database integration
* Error handling middleware
* Clean MVC architecture

---

# Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt
* dotenv

---

# Features

## Authentication & Authorization

* User registration
* User login
* JWT-based authentication
* Protected routes
* Role-based authorization
* Token versioning support

## Subject Management

* Create subject
* Get all subjects
* Update subject
* Delete subject
* Attendance percentage calculation
* Ownership validation for subjects

## Security Features

* Password hashing with bcrypt
* Protected API routes
* User ownership checks
* Validation handling
* Error middleware

---

# Project Structure

```bash
project-root/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── classes/
├── utils/
├── app.js
├── server.js
├── package.json
└── .env
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

## Move Into Project Folder

```bash
cd <project-folder>
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env.development.local` file in the root directory.

Example:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=30d
```

---

# Running The Server

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

---

# API Endpoints

## Auth Routes

### Register User

```http
POST /api/users/register
```

### Login User

```http
POST /api/users/login
```

### Get Current User

```http
GET /api/users/me
```

---

## Subject Routes

### Create Subject

```http
POST /api/subjects
```

### Get All Subjects

```http
GET /api/subjects
```

### Update Subject

```http
PUT /api/subjects/:id
```

### Delete Subject

```http
DELETE /api/subjects/:id
```

---

# Example Request Body

## Create Subject

```json
{
  "name": "Mathematics",
  "faculty": "Dr. Ramesh Kumar",
  "dept": "ECE",
  "totalClasses": 42,
  "attendedClasses": 36,
  "credits": 4
}
```

---

# Authentication

Protected routes require a JWT token.

Example:

```http
Authorization: Bearer your_jwt_token
```

---

# Attendance Percentage Logic

Attendance percentage is calculated using:

```text
(attendedClasses / totalClasses) * 100
```

---

# Validation Rules

## User

* Username must be unique
* Password minimum length validation

## Subject

* `attendedClasses <= totalClasses`
* Department enum validation
* Ownership validation

---

# Error Handling

The project uses centralized error handling middleware for:

* Validation errors
* Authentication errors
* Authorization errors
* Database errors
* Custom API errors

---

# Future Improvements

* Refresh token authentication
* Email verification
* Password reset
* Rate limiting
* Swagger documentation
* Unit testing
* Docker support
* CI/CD pipeline

---

# Author

Built with Node.js, caffeine, and repeated battles against MongoDB indexes ⚔️
