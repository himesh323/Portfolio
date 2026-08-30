import mongoose, { Schema, type Document } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
