import mongoose, { Schema, type Document } from 'mongoose';

export interface ISkill extends Document {
  category: string;
  name: string;
  percentage: number;
  order: number;
}

const SkillSchema = new Schema<ISkill>(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    percentage: { type: Number, required: true, min: 0, max: 100 },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Skill = mongoose.model<ISkill>('Skill', SkillSchema);
