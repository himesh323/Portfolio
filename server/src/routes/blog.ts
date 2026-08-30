import { Router } from 'express';
import { getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', authMiddleware, createBlog);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

export default router;
