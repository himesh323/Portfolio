import { Router } from 'express';
import { submitMessage, getMessages, markRead, deleteMessage } from '../controllers/messageController.js';
import { authMiddleware } from '../middleware/auth.js';
import { contactFormLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', contactFormLimiter, submitMessage);
router.get('/', authMiddleware, getMessages);
router.put('/:id', authMiddleware, markRead);
router.delete('/:id', authMiddleware, deleteMessage);

export default router;
