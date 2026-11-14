export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'freelance-web-developer',
    role: 'Freelance Web Developer',
    organization: 'Independent Practice',
    period: '2024 – Present',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Develop websites and web-based solutions tailored to small-business requirements.',
      'Build maintainable full-stack features using Django, Tailwind CSS, and modern web technologies.',
      'Craft responsive interfaces and practical digital experiences across desktop and mobile devices.',
      'Collaborate through project requirements gathering, architecture decisions, and implementation iterations.',
    ],
    technologies: ['Django', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
  },
];
