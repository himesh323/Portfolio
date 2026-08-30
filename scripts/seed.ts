import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@himesh.dev';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Password123!';

// Simple schemas for seeder
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' },
});

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  tags: [String],
  tagColor: String,
  icon: String,
  githubUrl: String,
  liveUrl: String,
  featured: Boolean,
  order: Number,
});

const skillSchema = new mongoose.Schema({
  category: String,
  name: String,
  percentage: Number,
  order: Number,
});

const certSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  icon: String,
  description: String,
  date: String,
});

const User = mongoose.model('User', userSchema);
const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Certificate = mongoose.model('Certificate', certSchema);

const projectsData = [
  {
    name: 'SaaS Subscription Billing System',
    icon: '01',
    description:
      'A relational billing engine for SaaS subscriptions — normalized schema, automated invoicing, and business logic pushed down into the database layer.',
    tags: ['MySQL', 'Normalization', 'SQL Triggers', 'Stored Procedures', 'Views', 'Invoice Automation'],
    tagColor: 'default',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    order: 1,
  },
  {
    name: 'FINCLAW — AI Trading System',
    icon: '02',
    description:
      "An AI-agent-driven trading assistant with intent validation and a policy engine (ArmorIQ) guarding every trade, tested against Alpaca's paper trading API.",
    tags: ['AI Agents', 'Intent Validation', 'ArmorIQ', 'Policy Engine', 'Alpaca Paper Trading'],
    tagColor: 'purple',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    order: 2,
  },
  {
    name: 'Banking Management Platform',
    icon: '03',
    description:
      'A backend banking platform with authenticated REST APIs, transaction management, and containerized deployment.',
    tags: ['Spring Boot', 'REST APIs', 'MySQL', 'Docker', 'Authentication', 'Transaction Management'],
    tagColor: 'teal',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    order: 3,
  },
];

const skillsData = [
  { category: 'Programming Languages', name: 'Java', percentage: 70, order: 1 },
  { category: 'Programming Languages', name: 'Python', percentage: 80, order: 2 },
  { category: 'Programming Languages', name: 'C', percentage: 75, order: 3 },
  { category: 'Programming Languages', name: 'SQL', percentage: 78, order: 4 },
  { category: 'AI & Machine Learning', name: 'TensorFlow', percentage: 65, order: 1 },
  { category: 'AI & Machine Learning', name: 'Machine Learning', percentage: 72, order: 2 },
  { category: 'AI & Machine Learning', name: 'Generative AI', percentage: 68, order: 3 },
  { category: 'AI & Machine Learning', name: 'Prompt Engineering', percentage: 75, order: 4 },
  { category: 'AI & Machine Learning', name: 'AI Agents', percentage: 60, order: 5 },
  { category: 'AI & Machine Learning', name: 'LLM Applications', percentage: 62, order: 6 },
  { category: 'Cloud', name: 'AWS EC2', percentage: 70, order: 1 },
  { category: 'Cloud', name: 'AWS S3', percentage: 70, order: 2 },
  { category: 'Cloud', name: 'Oracle Cloud Infrastructure', percentage: 60, order: 3 },
  { category: 'Database', name: 'MySQL', percentage: 78, order: 1 },
  { category: 'Tools', name: 'Git', percentage: 75, order: 1 },
  { category: 'Tools', name: 'GitHub', percentage: 78, order: 2 },
  { category: 'Tools', name: 'VS Code', percentage: 85, order: 3 },
  { category: 'Core Computer Science', name: 'Data Structures', percentage: 75, order: 1 },
  { category: 'Core Computer Science', name: 'OOP', percentage: 72, order: 2 },
  { category: 'Core Computer Science', name: 'DBMS', percentage: 70, order: 3 },
  { category: 'Core Computer Science', name: 'Operating Systems', percentage: 65, order: 4 },
  { category: 'Core Computer Science', name: 'Cloud Computing', percentage: 68, order: 5 },
];

const certsData = [
  { icon: '🟠', title: 'AWS Academy Graduate', issuer: 'Cloud Architecting' },
  { icon: '🟠', title: 'AWS Academy Graduate', issuer: 'Cloud Foundations' },
  { icon: '🟣', title: 'AWS Academy Graduate', issuer: 'Generative AI Foundations' },
  { icon: '🔵', title: 'Oracle Cloud Infrastructure', issuer: 'Certified Foundations Associate' },
  { icon: '🧠', title: 'AI-ML', issuer: 'Virtual Internship' },
  { icon: '☕', title: 'NPTEL', issuer: 'Programming in Java' },
  { icon: '🗄️', title: 'NPTEL', issuer: 'Database Management Systems' },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing
    await User.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Certificate.deleteMany({});

    // Create Admin User
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await User.create({
      email: ADMIN_EMAIL,
      password: hashedPassword,
      role: 'admin',
    });
    console.log(`✓ Admin user created: ${ADMIN_EMAIL}`);

    // Insert Projects
    await Project.insertMany(projectsData);
    console.log(`✓ Inserted ${projectsData.length} projects`);

    // Insert Skills
    await Skill.insertMany(skillsData);
    console.log(`✓ Inserted ${skillsData.length} skills`);

    // Insert Certs
    await Certificate.insertMany(certsData);
    console.log(`✓ Inserted ${certsData.length} certificates`);

    console.log('🎉 Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
