import { Router } from 'express';
import { trackVisit, getAnalytics } from '../controllers/analyticsController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.post('/visit', trackVisit);
router.get('/', authMiddleware, getAnalytics);

export default router;
