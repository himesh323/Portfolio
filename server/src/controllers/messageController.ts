import type { Request, Response } from 'express';
import { Message } from '../models/Message.js';
import { sendContactNotification } from '../services/emailService.js';

export async function submitMessage(req: Request, res: Response): Promise<void> {
  const { name, email, message } = req.body;

  const newMessage = await Message.create({ name, email, message });

  // Trigger email notification asynchronously
  sendContactNotification(name, email, message).catch((err) =>
    console.error('Failed sending email notification:', err)
  );

  res.status(201).json({
    success: true,
    data: newMessage,
    message: 'Message sent successfully',
  });
}

export async function getMessages(_req: Request, res: Response): Promise<void> {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json({ success: true, data: messages });
}

export async function markRead(req: Request, res: Response): Promise<void> {
  const msg = await Message.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  if (!msg) {
    res.status(404).json({ success: false, error: 'Message not found' });
    return;
  }
  res.json({ success: true, data: msg });
}

export async function deleteMessage(req: Request, res: Response): Promise<void> {
  const msg = await Message.findByIdAndDelete(req.params.id);
  if (!msg) {
    res.status(404).json({ success: false, error: 'Message not found' });
    return;
  }
  res.json({ success: true, message: 'Message deleted' });
}
