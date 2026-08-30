import type { Request, Response } from 'express';
import { Skill } from '../models/Skill.js';

export async function getSkills(_req: Request, res: Response): Promise<void> {
  const skills = await Skill.find().sort({ category: 1, order: 1 });
  res.json({ success: true, data: skills });
}

export async function createSkill(req: Request, res: Response): Promise<void> {
  const skill = await Skill.create(req.body);
  res.status(201).json({ success: true, data: skill });
}

export async function updateSkill(req: Request, res: Response): Promise<void> {
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!skill) {
    res.status(404).json({ success: false, error: 'Skill not found' });
    return;
  }
  res.json({ success: true, data: skill });
}

export async function deleteSkill(req: Request, res: Response): Promise<void> {
  const skill = await Skill.findByIdAndDelete(req.params.id);
  if (!skill) {
    res.status(404).json({ success: false, error: 'Skill not found' });
    return;
  }
  res.json({ success: true, message: 'Skill deleted' });
}
