# Enterprise Full-Stack Portfolio Platform

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

An enterprise-grade full-stack web application converting **Thota Himesh's** original portfolio content into a modern, startup-ready platform.

---

## Features

- ⚡ **Modern React 19 Frontend**: Vite, React Router, Framer Motion, Tailwind CSS design system.
- 🎨 **Apple & SaaS Aesthetic**: Glassmorphism cards, ambient particle backgrounds, animated gradient mesh, theme toggle (dark/light mode).
- 🚀 **Robust Express.js API**: Modular TypeScript backend with Helmet security, CORS, Compression, and Morgan logging.
- 🗄️ **MongoDB Atlas Integration**: 10 distinct collections with Mongoose ODM schemas.
- 🔒 **Authentication & Authorization**: JWT access/refresh token pattern with bcrypt password hashing.
- 💼 **Admin Panel**: Dashboard for managing projects, skills, certificates, blog posts, and reviewing contact messages.
- ✉️ **Contact Form System**: Rate-limited contact form with database storage and automatic email notifications via Nodemailer.
- 📈 **Built-in Analytics**: Visitor tracking and dashboard metrics.
- 🐳 **Docker & CI/CD Ready**: Dockerfile for client & server, Docker Compose, and GitHub Actions workflow.

---

## Quick Start

### 1. Prerequisites
- Node.js v20+
- MongoDB instance (local or MongoDB Atlas connection string)

### 2. Installation
```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install all dependencies (root, client, server)
npm run install:all
```

### 3. Environment Setup
Create `.env` file inside `server/`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=super_secret_jwt_key_32chars
JWT_REFRESH_SECRET=super_secret_refresh_key_32chars
ADMIN_EMAIL=admin@himesh.dev
ADMIN_PASSWORD=Password123!
```

### 4. Seed Initial Data
```bash
npm run seed
```

### 5. Run Development Server
```bash
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api`
- Admin Dashboard: `http://localhost:5173/admin`

---

## Documentation

- 📖 [API Documentation](docs/API.md)
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md)
- 📁 [Folder Structure Guide](docs/FOLDER_STRUCTURE.md)

---

## License

MIT License © 2026 Thota Himesh
