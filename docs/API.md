# REST API Documentation

Base URL: `http://localhost:5000/api` (Development)

## Authentication

All protected routes require a `Bearer <token>` HTTP header.

### 1. Admin Login
- **POST** `/auth/login`
- **Body:** `{ "email": "admin@example.com", "password": "Password123!" }`
- **Response:** `{ "success": true, "data": { "accessToken": "...", "refreshToken": "..." } }`

### 2. Refresh Token
- **POST** `/auth/refresh`
- **Body:** `{ "refreshToken": "..." }`

---

## Projects API

- **GET** `/projects` — List all projects
- **POST** `/projects` *(Admin)* — Create a new project
- **PUT** `/projects/:id` *(Admin)* — Update project by ID
- **DELETE** `/projects/:id` *(Admin)* — Delete project by ID

---

## Skills API

- **GET** `/skills` — List all skills by category
- **POST** `/skills` *(Admin)* — Add a skill
- **PUT** `/skills/:id` *(Admin)* — Update skill
- **DELETE** `/skills/:id` *(Admin)* — Delete skill

---

## Contact Messages API

- **POST** `/messages` — Submit contact message (Rate limited: 5 per hour per IP)
- **GET** `/messages` *(Admin)* — List all contact messages
- **PUT** `/messages/:id` *(Admin)* — Mark message as read
- **DELETE** `/messages/:id` *(Admin)* — Delete message

---

## Health Check

- **GET** `/health` — Returns system uptime and MongoDB connection status.
