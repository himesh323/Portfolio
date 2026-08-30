import mongoose, { Schema, type Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  published: boolean;
  publishedAt: Date;
  readingTime: number;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, default: '' },
    tags: [{ type: String }],
    coverImage: { type: String, default: '' },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
    readingTime: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlog>('Blog', BlogSchema);
