import type {
  Project,
  SkillCategory,
  Certificate,
  Interest,
  RoadmapTrack,
  Achievement,
  HeroData,
  AboutData,
} from '../../../shared/types';

/* ============================================================
   ALL PORTFOLIO CONTENT — Preserved from original HTML
   ============================================================ */

export const heroData: HeroData = {
  name: 'Thota Himesh',
  roles: [
    'Artificial Intelligence',
    'Machine Learning',
    'TensorFlow',
    'Generative AI',
    'Cloud Computing',
    'NLP',
    'AI Agents',
  ],
  title: 'AI ENGINEER · CLOUD COMPUTING STUDENT',
  description:
    'B.Tech Cloud Computing student at SRM Institute of Science and Technology, building intelligent, scalable software at the intersection of AI, ML and the cloud.',
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    leetcode: 'https://leetcode.com/yourusername',
    hackerrank: 'https://hackerrank.com/yourusername',
    email: 'your.email@example.com',
  },
};

export const aboutData: AboutData = {
  heading: 'Building where AI meets the cloud',
  terminalText: `I'm Thota Himesh, a B.Tech Computer Science (Cloud Computing)
student at SRM Institute of Science and Technology, Chennai.

I'm passionate about building intelligent software by combining
Artificial Intelligence, Machine Learning, Cloud Computing and
TensorFlow — applications that solve real problems with AI-driven
automation and scalable cloud platforms.

I'm exploring Generative AI, LLMs, AI Agents, NLP and intelligent
web apps. Goal: become an AI Engineer who ships innovative,
efficient, impactful systems.`,
  stats: [
    { value: 3, label: 'Core Projects' },
    { value: 7, label: 'Certifications' },
    { value: 3, label: 'Year of Study' },
  ],
  timeline: [
    {
      year: '2024 — Present',
      description:
        'B.Tech CS (Cloud Computing), SRM Institute of Science and Technology, Chennai',
    },
    {
      year: 'Self-Study',
      description:
        'Structured roadmap across C, Python, DSA, Git, AWS & LeetCode',
    },
  ],
};

export const interests: Interest[] = [
  { icon: '🧠', title: 'Artificial Intelligence', description: 'Core focus area' },
  { icon: '🤖', title: 'Machine Learning', description: 'Models & training' },
  { icon: '📊', title: 'TensorFlow', description: 'Deep learning framework' },
  { icon: '✨', title: 'Generative AI', description: 'LLMs & creative systems' },
  { icon: '🔗', title: 'Large Language Models', description: 'Understanding & building with LLMs' },
  { icon: '⚙️', title: 'AI Agents', description: 'Autonomous, tool-using systems' },
  { icon: '☁️', title: 'Cloud Computing', description: 'AWS & OCI' },
  { icon: '🗄️', title: 'Database Design', description: 'Schemas & normalization' },
  { icon: '💻', title: 'Software Development', description: 'Building real apps' },
  { icon: '🧮', title: 'Data Structures & Algorithms', description: 'Problem solving' },
  { icon: '🗣️', title: 'Natural Language Processing', description: 'Learning' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', percentage: 70 },
      { name: 'Python', percentage: 80 },
      { name: 'C', percentage: 75 },
      { name: 'SQL', percentage: 78 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow', percentage: 65 },
      { name: 'Machine Learning', percentage: 72 },
      { name: 'Generative AI', percentage: 68 },
      { name: 'Prompt Engineering', percentage: 75 },
      { name: 'AI Agents', percentage: 60 },
      { name: 'LLM Applications', percentage: 62 },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS EC2', percentage: 70 },
      { name: 'AWS S3', percentage: 70 },
      { name: 'Oracle Cloud Infrastructure', percentage: 60 },
    ],
  },
  {
    category: 'Database',
    skills: [{ name: 'MySQL', percentage: 78 }],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', percentage: 75 },
      { name: 'GitHub', percentage: 78 },
      { name: 'VS Code', percentage: 85 },
    ],
  },
  {
    category: 'Core Computer Science',
    skills: [
      { name: 'Data Structures', percentage: 75 },
      { name: 'OOP', percentage: 72 },
      { name: 'DBMS', percentage: 70 },
      { name: 'Operating Systems', percentage: 65 },
      { name: 'Cloud Computing', percentage: 68 },
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'SaaS Subscription Billing System',
    icon: '01',
    description:
      'A relational billing engine for SaaS subscriptions — normalized schema, automated invoicing, and business logic pushed down into the database layer.',
    tags: [
      'MySQL',
      'Normalization',
      'SQL Triggers',
      'Stored Procedures',
      'Views',
      'Invoice Automation',
    ],
    tagColor: 'default',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'FINCLAW — AI Trading System',
    icon: '02',
    description:
      "An AI-agent-driven trading assistant with intent validation and a policy engine (ArmorIQ) guarding every trade, tested against Alpaca's paper trading API.",
    tags: [
      'AI Agents',
      'Intent Validation',
      'ArmorIQ',
      'Policy Engine',
      'Alpaca Paper Trading',
    ],
    tagColor: 'purple',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'Banking Management Platform',
    icon: '03',
    description:
      'A backend banking platform with authenticated REST APIs, transaction management, and containerized deployment.',
    tags: [
      'Spring Boot',
      'REST APIs',
      'MySQL',
      'Docker',
      'Authentication',
      'Transaction Management',
    ],
    tagColor: 'teal',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const roadmapTracks: RoadmapTrack[] = [
  {
    title: 'TensorFlow',
    nodes: ['CNN', 'ANN', 'Neural Networks', 'Deep Learning', 'TensorFlow Projects'],
  },
  {
    title: 'Natural Language Processing',
    nodes: [
      'Text Classification',
      'Chatbots',
      'Sentiment Analysis',
      'NER',
      'Transformers',
      'GPT',
      'BERT',
      'RAG',
      'LLM Applications',
    ],
  },
  {
    title: 'Machine Learning',
    nodes: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
  },
];

export const certificates: Certificate[] = [
  {
    icon: '🟠',
    title: 'AWS Academy Graduate',
    issuer: 'Cloud Architecting',
  },
  {
    icon: '🟠',
    title: 'AWS Academy Graduate',
    issuer: 'Cloud Foundations',
  },
  {
    icon: '🟣',
    title: 'AWS Academy Graduate',
    issuer: 'Generative AI Foundations',
  },
  {
    icon: '🔵',
    title: 'Oracle Cloud Infrastructure',
    issuer: 'Certified Foundations Associate',
  },
  {
    icon: '🧠',
    title: 'AI-ML',
    issuer: 'Virtual Internship',
  },
  {
    icon: '☕',
    title: 'NPTEL',
    issuer: 'Programming in Java',
  },
  {
    icon: '🗄️',
    title: 'NPTEL',
    issuer: 'Database Management Systems',
  },
];

export const achievements: Achievement[] = [
  {
    year: '2026',
    description:
      'Built a 47-day self-study roadmap covering C, Python, DSA, Git, AWS & LeetCode',
    status: 'OK',
  },
  {
    year: '2025',
    description:
      'Earned AWS Academy Graduate certifications in Cloud Architecting, Cloud Foundations & Generative AI Foundations',
    status: 'OK',
  },
  {
    year: '2025',
    description:
      'Completed NPTEL certifications in Java Programming and Database Management Systems',
    status: 'OK',
  },
  {
    year: 'Ongoing',
    description: 'Deepening AI/ML fundamentals — TensorFlow, NLP, Computer Vision',
    status: 'RUN',
  },
  {
    year: 'Next',
    description: 'Target: internship-ready across DSA, cloud & applied AI',
    status: 'TODO',
  },
];

export const contactInfo = {
  email: 'your.email@example.com',
  phone: '+91 XXXXX-XXXXX',
  location: 'Chennai, Tamil Nadu, India (SRM IST)',
  github: 'github.com/yourusername',
  linkedin: 'linkedin.com/in/yourusername',
  leetcode: 'leetcode.com/yourusername',
  hackerrank: 'hackerrank.com/yourusername',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certificates', href: '#certs' },
  { label: 'Contact', href: '#contact' },
];
