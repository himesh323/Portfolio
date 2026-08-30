import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

export const contactFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // max 5 submissions per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many contact messages sent from this IP. Please try again later.',
  },
});
