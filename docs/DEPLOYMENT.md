# Deployment Guide

This full-stack application is structured for instant one-click deployment to Vercel (Frontend), Render (Backend), and MongoDB Atlas (Database).

---

## 1. Database — MongoDB Atlas

1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and record the password.
3. In Network Access, whitelist `0.0.0.0/0` (allow access from anywhere).
4. Copy your MongoDB Connection String (URI).

---

## 2. Backend — Render.com

1. Create a new Web Service on [Render](https://render.com).
2. Connect your GitHub repository.
3. Set the Root Directory to `server`.
4. Set Build Command: `npm install && npm run build`
5. Set Start Command: `npm start`
6. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: `<Your MongoDB Atlas URI>`
   - `JWT_SECRET`: `<Generate strong 32+ char secret>`
   - `JWT_REFRESH_SECRET`: `<Generate strong 32+ char secret>`
   - `ADMIN_EMAIL`: `your.email@example.com`
   - `ADMIN_PASSWORD`: `<Your secure admin password>`
   - `CORS_ORIGIN`: `https://your-portfolio.vercel.app`

---

## 3. Frontend — Vercel

1. Import your repository to [Vercel](https://vercel.com).
2. Set Framework Preset: `Vite`
3. Set Root Directory: `client`
4. Add Environment Variable:
   - `VITE_API_URL`: `https://your-render-service.onrender.com/api`
5. Click **Deploy**.

---

## 4. Database Seeding

After deploying backend, populate initial portfolio data:
```bash
cd server
npm run seed
```
