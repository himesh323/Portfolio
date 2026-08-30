import type { Request, Response } from 'express';
import { uploadImageToCloudinary } from '../services/cloudinaryService.js';

export async function uploadImage(req: Request, res: Response): Promise<void> {
  if (!req.file) {
    res.status(400).json({ success: false, error: 'No image file uploaded' });
    return;
  }

  try {
    const url = await uploadImageToCloudinary(req.file.path);
    res.json({ success: true, data: { url } });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to upload image' });
  }
}
