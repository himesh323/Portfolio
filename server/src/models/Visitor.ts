import mongoose, { Schema, type Document } from 'mongoose';

export interface IVisitor extends Document {
  page: string;
  userAgent: string;
  referrer: string;
  ip: string;
  createdAt: Date;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    page: { type: String, required: true },
    userAgent: { type: String, default: '' },
    referrer: { type: String, default: '' },
    ip: { type: String, default: '' },
  },
  { timestamps: true }
);

export const Visitor = mongoose.model<IVisitor>('Visitor', VisitorSchema);
