import type { Request, Response } from 'express';
import { Visitor } from '../models/Visitor.js';
import { Message } from '../models/Message.js';
import { Project } from '../models/Project.js';
import { Blog } from '../models/Blog.js';

export async function trackVisit(req: Request, res: Response): Promise<void> {
  const { page } = req.body;
  const userAgent = req.headers['user-agent'] || '';
  const referrer = req.headers['referer'] || '';
  const ip = req.ip || '';

  await Visitor.create({ page, userAgent, referrer, ip });
  res.json({ success: true });
}

export async function getAnalytics(_req: Request, res: Response): Promise<void> {
  const totalVisitors = await Visitor.countDocuments();
  const totalMessages = await Message.countDocuments();
  const totalProjects = await Project.countDocuments();
  const totalBlogs = await Blog.countDocuments();

  const recentVisitors = await Visitor.find().sort({ createdAt: -1 }).limit(10);
  const recentMessages = await Message.find().sort({ createdAt: -1 }).limit(5);

  res.json({
    success: true,
    data: {
      totalVisitors,
      totalMessages,
      totalProjects,
      totalBlogs,
      recentVisitors,
      recentMessages,
    },
  });
}
