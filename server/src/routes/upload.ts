import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/uploadController.js';
import { authMiddleware } from '../middleware/auth.js';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.post('/image', authMiddleware, upload.single('image'), uploadImage);

export default router;
