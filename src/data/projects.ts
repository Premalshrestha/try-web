import aiReceptionistImg from '../assets/images/project_ai_receptionist_1794569349525.jpg';
import medimateAiImg from '../assets/images/project_medimate_ai_1794569351114.jpg';
import nepalRadarImg from '../assets/images/project_nepal_radar_1794569350942.jpg';

export type ProjectCategory =
  | 'Artificial Intelligence'
  | 'Healthcare Technology'
  | 'Disaster Risk Management';

export interface ProjectItem {
  slug: string;
  title: string;
  category: ProjectCategory;
  statusLabel: string;
  period?: string;
  role: string;
  summary: string;
  overview: string;
  problemAddressed: string;
  contribution: string;
  keyFeatures: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  githubNote?: string;
  liveUrl?: string;
  featured: boolean;
}

/**
 * Add additional repositories from https://github.com/Premalshrestha here.
 * Keep descriptions and features strictly grounded in verified project facts.
 */
export const projects: ProjectItem[] = [
  {
    slug: 'ai-assistant-receptionist',
    title: 'AI Assistant / AI Receptionist',
    category: 'Artificial Intelligence',
    statusLabel: 'Ongoing Development',
    role: 'Lead Developer',
    summary:
      'An ongoing AI-powered assistant/receptionist project designed to support real-time user interaction.',
    overview:
      'An ongoing AI-powered assistant and receptionist system focused on responsive, real-time conversational interaction.',
    problemAddressed:
      'Exploring how conversational AI interfaces can assist with front-desk style user inquiries and real-time interaction workflows.',
    contribution:
      'Leading the design and implementation of the assistant workflow, model experimentation, and Python-based interaction pipeline.',
    keyFeatures: [
      'Real-time user interaction flow design',
      'PyTorch-based AI/ML experimentation',
      'Modular Python architecture for iterative refinement',
    ],
    technologies: ['Python', 'PyTorch', 'AI/ML Technologies'],
    image: aiReceptionistImg,
    imageAlt:
      'Visualization of an obsidian-glass conversational AI assistant interface with acoustic waveform curves',
    githubNote: 'Repository URL will be added upon public release',
    featured: true,
  },
  {
    slug: 'medimate-ai',
    title: 'MediMate AI',
    category: 'Healthcare Technology',
    statusLabel: 'Digital Healthcare Platform',
    role: 'Software Developer',
    summary:
      'A healthcare-oriented platform focused on data monitoring and visualization.',
    overview:
      'A web-based healthcare technology platform built to organize, monitor, and visualize structured health data cleanly.',
    problemAddressed:
      'Presenting health-related records and monitoring indicators in an approachable, structured web interface.',
    contribution:
      'Built the web application using Django and Tailwind CSS, connecting structured backend views with responsive frontend layouts.',
    keyFeatures: [
      'Structured healthcare data monitoring views',
      'Clean visual presentation of health indicators',
      'Responsive Django and Tailwind CSS interface',
    ],
    technologies: ['Django', 'Tailwind CSS', 'HTML', 'CSS'],
    image: medimateAiImg,
    imageAlt:
      'Modern healthcare data monitoring and analytics dashboard displayed on a dark studio monitor',
    githubUrl: 'https://github.com/Premalshrestha/Medimate',
    featured: true,
  },
  {
    slug: 'nepal-radar-incident',
    title: 'Nepal Radar Incident (NIR)',
    category: 'Disaster Risk Management',
    statusLabel: 'Exploratory Research Project',
    period: 'June – December 2024',
    role: 'Developer & Researcher',
    summary:
      'A project exploring flood and landslide prediction using historical incident records, supported by a Django backend and an interactive dashboard.',
    overview:
      'Developed between June and December 2024 to examine how historical flood and landslide incident records can inform exploratory hazard analysis through a Django-powered interactive dashboard.',
    problemAddressed:
      'Organizing fragmented historical flood and landslide incident records in Nepal into a structured format suitable for exploratory analysis and visual review.',
    contribution:
      'Implemented historical data processing pipelines in Python, engineered the Django backend, and built the interactive dashboard interface.',
    keyFeatures: [
      'Historical flood and landslide incident data processing',
      'Django backend for structured record management',
      'Interactive dashboard for exploring incident patterns',
    ],
    technologies: ['Python', 'Django', 'Data Processing', 'Dashboard Development'],
    image: nepalRadarImg,
    imageAlt:
      'Topographic Himalayan river valley elevation contours and hydrological visualization interface',
    githubNote: 'Exploratory project — no operational deployment claimed',
    featured: true,
  },
];
