import type { Request, Response } from 'express';
import { Blog } from '../models/Blog.js';

export async function getBlogs(_req: Request, res: Response): Promise<void> {
  const blogs = await Blog.find({ published: true }).sort({ publishedAt: -1 });
  res.json({ success: true, data: blogs });
}

export async function getBlogBySlug(req: Request, res: Response): Promise<void> {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) {
    res.status(404).json({ success: false, error: 'Blog post not found' });
    return;
  }
  res.json({ success: true, data: blog });
}

export async function createBlog(req: Request, res: Response): Promise<void> {
  const blog = await Blog.create(req.body);
  res.status(201).json({ success: true, data: blog });
}

export async function updateBlog(req: Request, res: Response): Promise<void> {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!blog) {
    res.status(404).json({ success: false, error: 'Blog post not found' });
    return;
  }
  res.json({ success: true, data: blog });
}

export async function deleteBlog(req: Request, res: Response): Promise<void> {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    res.status(404).json({ success: false, error: 'Blog post not found' });
    return;
  }
  res.json({ success: true, message: 'Blog deleted' });
}
