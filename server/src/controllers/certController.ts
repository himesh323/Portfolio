import type { Request, Response } from 'express';
import { Certificate } from '../models/Certificate.js';

export async function getCertificates(_req: Request, res: Response): Promise<void> {
  const certificates = await Certificate.find().sort({ createdAt: -1 });
  res.json({ success: true, data: certificates });
}

export async function createCertificate(req: Request, res: Response): Promise<void> {
  const certificate = await Certificate.create(req.body);
  res.status(201).json({ success: true, data: certificate });
}

export async function deleteCertificate(req: Request, res: Response): Promise<void> {
  const cert = await Certificate.findByIdAndDelete(req.params.id);
  if (!cert) {
    res.status(404).json({ success: false, error: 'Certificate not found' });
    return;
  }
  res.json({ success: true, message: 'Certificate deleted' });
}
