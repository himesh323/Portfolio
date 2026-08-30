import mongoose, { Schema, type Document } from 'mongoose';

export interface ICertificate extends Document {
  title: string;
  issuer: string;
  icon: string;
  description: string;
  date: string;
  credentialUrl: string;
}

const CertificateSchema = new Schema<ICertificate>(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    icon: { type: String, default: '🏅' },
    description: { type: String, default: '' },
    date: { type: String, default: '' },
    credentialUrl: { type: String, default: '' },
  },
  { timestamps: true }
);

export const Certificate = mongoose.model<ICertificate>('Certificate', CertificateSchema);
