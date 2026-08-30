import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST || 'smtp.gmail.com',
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export async function sendContactNotification(name: string, email: string, message: string): Promise<boolean> {
  if (!env.SMTP_USER || !env.SMTP_PASS) {
    console.log(`[Email Service Sim] Message from ${name} (${email}): ${message}`);
    return true;
  }

  try {
    await transporter.sendMail({
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.ADMIN_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f5; padding: 15px; border-left: 4px solid #6366f1;">
            ${message}
          </blockquote>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}
