import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { env } from '../config/env.js';
import type { AuthRequest } from '../middleware/auth.js';

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    res.status(401).json({ success: false, error: 'Invalid credentials' });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401).json({ success: false, error: 'Invalid credentials' });
    return;
  }

  const accessToken = jwt.sign({ userId: user._id, role: user.role }, env.JWT_SECRET, {
    expiresIn: '15m',
  });

  const refreshToken = jwt.sign({ userId: user._id }, env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });

  user.refreshToken = refreshToken;
  await user.save();

  res.json({
    success: true,
    data: {
      user: { id: user._id, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    },
  });
}

export async function refresh(req: Request, res: Response): Promise<void> {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(401).json({ success: false, error: 'Refresh token required' });
    return;
  }

  try {
    const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { userId: string };
    const user = await User.findById(decoded.userId);

    if (!user || user.refreshToken !== refreshToken) {
      res.status(401).json({ success: false, error: 'Invalid refresh token' });
      return;
    }

    const newAccessToken = jwt.sign({ userId: user._id, role: user.role }, env.JWT_SECRET, {
      expiresIn: '15m',
    });

    const newRefreshToken = jwt.sign({ userId: user._id }, env.JWT_REFRESH_SECRET, {
      expiresIn: '7d',
    });

    user.refreshToken = newRefreshToken;
    await user.save();

    res.json({
      success: true,
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    });
  } catch {
    res.status(401).json({ success: false, error: 'Invalid or expired refresh token' });
  }
}

export async function getMe(req: AuthRequest, res: Response): Promise<void> {
  const user = await User.findById(req.userId).select('-password -refreshToken');
  if (!user) {
    res.status(444).json({ success: false, error: 'User not found' });
    return;
  }

  res.json({
    success: true,
    data: user,
  });
}
