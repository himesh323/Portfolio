import mongoose, { Schema, type Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  tags: string[];
  tagColor: string;
  icon: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
  order: number;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    tagColor: { type: String, default: 'default' },
    icon: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    liveUrl: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Project = mongoose.model<IProject>('Project', ProjectSchema);
