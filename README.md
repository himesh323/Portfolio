# Thota Himesh — Portfolio

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> Personal portfolio of **Thota Himesh** — B.Tech CS (Cloud Computing) student at SRM IST, Chennai. Building at the intersection of AI, ML and the Cloud.

🌐 **Live:** [thotahimesh.vercel.app](https://thotahimesh.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4, Framer Motion |
| Routing | React Router v7 |
| Backend | Node.js, Express.js, TypeScript |
| Database | MongoDB Atlas, Mongoose |
| Auth | JWT (access + refresh tokens), bcrypt |
| Deployment | Vercel (frontend) |

---

## Features

- ⚡ **React 19 + Vite** — fast dev & optimised production builds
- 🎨 **Apple / SaaS aesthetic** — glassmorphism cards, animated gradient mesh, dark/light mode
- 🧠 **AI & ML focused content** — projects, skills, roadmap, certificates all in one place
- 🚀 **Express.js REST API** — Helmet, CORS, Compression, Morgan
- 🗄️ **MongoDB Atlas** — 10 collections with Mongoose ODM
- 🔒 **JWT Auth** — access/refresh token pattern with bcrypt
- 💼 **Admin Panel** — manage projects, skills, certificates, blog posts, contact messages
- ✉️ **Contact Form** — rate-limited, stored in DB, email via Nodemailer
- 📈 **Analytics** — visitor tracking & dashboard metrics
- 🐳 **Docker & CI/CD** — Dockerfile for client & server, Docker Compose, GitHub Actions

---

## Local Development

### Prerequisites
- Node.js v20+
- MongoDB (local or Atlas URI)

### Setup
```bash
# Clone
git clone https://github.com/himesh323/Portfolio.git
cd Portfolio

# Install all dependencies
npm run install:all
```

Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_32chars
JWT_REFRESH_SECRET=your_refresh_secret_32chars
ADMIN_EMAIL=admin@himesh.dev
ADMIN_PASSWORD=Password123!
```

```bash
# Seed data
npm run seed

# Start dev servers
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000/api |
| Admin Panel | http://localhost:5173/admin |

---

## Deployment

Frontend is deployed on **Vercel** at [thotahimesh.vercel.app](https://thotahimesh.vercel.app).

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full deployment guide.

---

## Docs

- 📖 [API Documentation](docs/API.md)
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md)
- 📁 [Folder Structure](docs/FOLDER_STRUCTURE.md)

---

## License

MIT License © 2026 Thota Himesh
