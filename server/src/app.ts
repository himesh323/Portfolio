import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { env } from './config/env.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';

import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import skillRoutes from './routes/skills.js';
import certRoutes from './routes/certificates.js';
import messageRoutes from './routes/messages.js';
import blogRoutes from './routes/blog.js';
import analyticsRoutes from './routes/analytics.js';
import uploadRoutes from './routes/upload.js';
import healthRoutes from './routes/health.js';

const app = express();

// Security & Middlewares
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(compression());
app.use(morgan(env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply rate limiter to /api
app.use('/api', apiLimiter);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/certificates', certRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/health', healthRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
