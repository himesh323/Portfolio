import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDB(): Promise<boolean> {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 3000, // 3s timeout for quick fallback
    });
    console.log(`✓ MongoDB connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn('⚠️ MongoDB connection warning: Database not reachable at', env.MONGODB_URI);
    console.warn('💡 Tip: Start local MongoDB or set MONGODB_URI in server/.env for database features.');
    return false;
  }
}
