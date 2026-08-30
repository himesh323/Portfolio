import type { Request, Response } from 'express';
import { Project } from '../models/Project.js';

export async function getProjects(_req: Request, res: Response): Promise<void> {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });
  res.json({ success: true, data: projects });
}

export async function createProject(req: Request, res: Response): Promise<void> {
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
}

export async function updateProject(req: Request, res: Response): Promise<void> {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!project) {
    res.status(404).json({ success: false, error: 'Project not found' });
    return;
  }
  res.json({ success: true, data: project });
}

export async function deleteProject(req: Request, res: Response): Promise<void> {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    res.status(404).json({ success: false, error: 'Project not found' });
    return;
  }
  res.json({ success: true, message: 'Project deleted successfully' });
}
