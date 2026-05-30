# Backend API Project [LIVE API](https://attendance-tracker-backend-b980.onrender.com)

A secure and scalable backend API built with Node.js, Express, MongoDB, and Mongoose.

This API is designed to help students manage and track their attendance efficiently. Users can create subjects, store attendance information, monitor attended classes, calculate attendance percentages, and manage academic subjects through secure authenticated routes.

The system acts as a centralized attendance management backend where each user can maintain their own subjects and attendance records safely with authentication and authorization support.

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
POST /v1/api/users/register
```

### Login User

```http
POST /v1/api/users/login
```

### Get Current User

```http
GET /v1/api/users/me
```

---

## Subject Routes

### Create Subject

```http
POST /v1/api/subjects
```

### Get All Subjects

```http
GET /v1/api/subjects
```

### Update Subject

```http
PUT /v1/api/subjects/:id
```

### Delete Subject

```http
DELETE /v1/api/subjects/:id
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

# Complete API Usage Guide

## Base URL

```http
https://attendance-tracker-backend-b980.onrender.com
```

---

# Authentication Flow

Most routes require a JWT token.

Flow:

```text
Register User
    ↓
Login User
    ↓
Receive JWT Token
    ↓
Use Token In Protected Routes
```

---

# Authorization Header

Protected routes require:

```http
Authorization: Bearer your_jwt_token
```

Example:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

---

# User Routes

## 1. Register User

### Endpoint

```http
POST /v1/api/users/sign-up
```

### Authentication Required

```text
No
```

### Request Body

```json
{
  "name": "nikhil",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

### Possible Errors

```json
{
  "success": false,
  "message": "User already exists"
}
```

---

## 2. Login User

### Endpoint

```http
POST /v1/api/users/sign-in
```

### Authentication Required

```text
No
```

### Request Body

```json
{
  "name": "nikhil",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "token": "jwt_token_here"
}
```

### Possible Errors

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

## 3. Get Current User

### Endpoint

```http
GET /v1/api/users/:id
```

### Authentication Required

```text
Yes
```

### Headers

```http
Authorization: Bearer your_jwt_token
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "nikhil",
    "role": "user"
  }
}
```

---

## 4. Update User Password

### Endpoint

```http
PUT /v1/api/users/:id
```

### Authentication Required

```text
Yes
```

### Authorization

```text
User can only update their own account unless admin
```

### Request Body

```json
{
  "password": "newpassword123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User updated successfully"
}
```

---

## 5. Delete User

### Endpoint

```http
DELETE /v1/api/users/:id
```

### Authentication Required

```text
Yes
```

### Authorization

```text
User can only delete their own account unless admin
```

### Success Response

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## 6. Logout From All Devices

### Endpoint

```http
POST /v1/api/users/log-out-all
```

### Authentication Required

```text
Yes
```

### Description

```text
Invalidates all previously issued JWT tokens using tokenVersion increment.
```

### Success Response

```json
{
  "success": true,
  "message": "Logged out from all devices"
}
```

---

# Subject Routes

## 1. Create Subject

### Endpoint

```http
POST /v1/api/subjects
```

### Authentication Required

```text
Yes
```

### Headers

```http
Authorization: Bearer your_jwt_token
```

### Request Body

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

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "subject_id",
    "name": "Mathematics",
    "faculty": "Dr. Ramesh Kumar",
    "dept": "ECE",
    "totalClasses": 42,
    "attendedClasses": 36,
    "credits": 4,
    "attendancePercentage": 85.71
  }
}
```

### Validation Rules

```text
attendedClasses <= totalClasses
```

---

## 2. Get All Subjects

### Endpoint

```http
GET /v1/api/subjects
```

### Authentication Required

```text
Yes
```

### Headers

```http
Authorization: Bearer your_jwt_token
```

### Success Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "subject_id",
      "name": "Mathematics",
      "faculty": "Dr. Ramesh Kumar",
      "dept": "ECE",
      "totalClasses": 42,
      "attendedClasses": 36,
      "credits": 4,
      "attendancePercentage": 85.71
    }
  ]
}
```

---

## 3. Get Single Subject

### Endpoint

```http
GET /v1/api/subjects/:id
```

### Authentication Required

```text
Yes
```

### Authorization

```text
Users can only access their own subjects
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "subject_id",
    "name": "Mathematics",
    "faculty": "Dr. Ramesh Kumar",
    "dept": "ECE",
    "totalClasses": 42,
    "attendedClasses": 36,
    "credits": 4,
    "attendancePercentage": 85.71
  }
}
```

---

## 4. Update Subject

### Endpoint

```http
PUT /v1/api/subjects/:id
```

### Authentication Required

```text
Yes
```

### Authorization

```text
Users can only update their own subjects
```

### Request Body

```json
{
  "attendedClasses": 37,
  "totalClasses": 43
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "subject_id",
    "name": "Mathematics",
    "attendedClasses": 37,
    "totalClasses": 43,
    "attendancePercentage": 86.04
  }
}
```

---

## 5. Delete Subject

### Endpoint

```http
DELETE /v1/api/subjects/:id
```

### Authentication Required

```text
Yes
```

### Authorization

```text
Users can only delete their own subjects
```

### Success Response

```json
{
  "success": true,
  "message": "Subject deleted successfully"
}
```

---

# Common Error Responses

## Unauthorized

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

---

## Forbidden

```json
{
  "success": false,
  "message": "Forbidden"
}
```

---

## Validation Error

```json
{
  "success": false,
  "message": "The attended classes must be lesser than or equal to total classes"
}
```

---

## Invalid Token

```json
{
  "success": false,
  "message": "Invalid token"
}
```

---

# Example Frontend Fetch Request

## Protected Route Example

```js
const response = await fetch(
   "https://attendance-tracker-backend-b980.onrender.com/v1/api/subjects",
   {
      method: "GET",
      headers: {
         Authorization: `Bearer ${token}`
      }
   }
);

const data = await response.json();

console.log(data);
```

---

# API Workflow Example

```text
1. Register User
2. Login User
3. Receive JWT Token
4. Store Token
5. Use Token For Protected Requests
6. Create Subjects
7. Manage Attendance Data
```

---

# Notes

* All protected routes require JWT authentication.
* Each user can only access their own subjects.
* Attendance percentage is calculated automatically.
* Passwords are securely hashed using bcrypt.
* MongoDB Atlas is used for database storage.
* The backend follows MVC architecture.

---

# Author

Built with Node.js, caffeine, and repeated battles against MongoDB indexes ⚔️
