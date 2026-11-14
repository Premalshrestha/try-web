export type SkillIconKey =
  | 'python'
  | 'javascript'
  | 'cpp'
  | 'html'
  | 'css'
  | 'react'
  | 'tailwind'
  | 'bootstrap'
  | 'django'
  | 'nodejs'
  | 'express'
  | 'api'
  | 'mysql'
  | 'sqlite'
  | 'mongodb'
  | 'postgres'
  | 'git'
  | 'github'
  | 'docker'
  | 'pytorch'
  | 'ai'
  | 'agentic';

export interface SkillItem {
  name: string;
  note?: string;
  icon: SkillIconKey;
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    summary: 'Core languages for systems logic, web applications, and algorithmic problem solving.',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'C / C++', icon: 'cpp' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Responsive component architectures and accessible, utility-first interfaces.',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'Server-side frameworks and structured RESTful interfaces for web products.',
    items: [
      { name: 'Django', icon: 'django' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    summary: 'Relational and document-based persistence across application workflows.',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', note: 'Basic', icon: 'postgres' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    summary: 'Version control, collaborative workflows, and containerized environments.',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Docker', note: 'Basic', icon: 'docker' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    summary: 'Hands-on exploration of deep learning foundations and intelligent workflows.',
    items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'AI-Assisted Application Development', icon: 'ai' },
      { name: 'Agentic AI Exploration', icon: 'agentic' },
    ],
  },
];
