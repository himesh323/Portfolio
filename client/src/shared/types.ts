/* ============================================================
   Shared Types — Used by both Client & Server
   ============================================================ */

export interface Project {
  _id?: string;
  name: string;
  description: string;
  tags: string[];
  tagColor?: 'default' | 'purple' | 'teal' | 'blue' | 'pink';
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface SkillCategory {
  _id?: string;
  category: string;
  skills: Skill[];
  order?: number;
}

export interface Skill {
  _id?: string;
  name: string;
  percentage: number;
  category?: string;
}

export interface Certificate {
  _id?: string;
  title: string;
  issuer: string;
  icon: string;
  description?: string;
  date?: string;
  credentialUrl?: string;
  createdAt?: string;
}

export interface Experience {
  _id?: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  current?: boolean;
  order?: number;
}

export interface Education {
  _id?: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate?: string;
  description?: string;
  current?: boolean;
  order?: number;
}

export interface Interest {
  icon: string;
  title: string;
  description: string;
}

export interface RoadmapTrack {
  title: string;
  nodes: string[];
}

export interface Achievement {
  year: string;
  description: string;
  status: 'OK' | 'RUN' | 'TODO';
}

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  publishedAt?: string;
  readingTime?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  message: string;
  read?: boolean;
  createdAt?: string;
}

export interface VisitorRecord {
  _id?: string;
  page: string;
  userAgent?: string;
  referrer?: string;
  createdAt?: string;
}

export interface AnalyticsData {
  totalVisitors: number;
  totalMessages: number;
  totalProjects: number;
  totalBlogs: number;
  recentVisitors: VisitorRecord[];
  recentMessages: ContactMessage[];
  visitorsByDay: { date: string; count: number }[];
}

export interface UserProfile {
  _id?: string;
  email: string;
  role: 'admin';
}

export interface AuthResponse {
  user: UserProfile;
  accessToken: string;
  refreshToken: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  hackerrank: string;
  email: string;
}

export interface HeroData {
  name: string;
  roles: string[];
  title: string;
  description: string;
  socials: SocialLinks;
}

export interface AboutData {
  heading: string;
  terminalText: string;
  stats: { value: number; label: string }[];
  timeline: { year: string; description: string }[];
}
