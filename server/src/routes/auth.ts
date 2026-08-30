import { Router } from 'express';
import { login, refresh, getMe } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.post('/login', login);
router.post('/refresh', refresh);
router.get('/me', authMiddleware, getMe);

export default router;
