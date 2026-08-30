import mongoose, { Schema, type Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  role: 'admin';
  refreshToken?: string;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['admin'], default: 'admin' },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
