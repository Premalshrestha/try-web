export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  detail?: string;
}

export const educationEntries: EducationEntry[] = [
  {
    id: 'be-computer-engineering',
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Kantipur City College',
    affiliation: 'Affiliated with Purbanchal University',
    period: 'April 2022 – May 2026',
    detail: 'CGPA: 3.41',
  },
  {
    id: 'plus-two-science',
    degree: '+2 Science',
    institution: 'Times International College',
    period: 'July 2019 – August 2021',
  },
];
