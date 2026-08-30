import { Router } from 'express';
import { getCertificates, createCertificate, deleteCertificate } from '../controllers/certController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.get('/', getCertificates);
router.post('/', authMiddleware, createCertificate);
router.delete('/:id', authMiddleware, deleteCertificate);

export default router;
