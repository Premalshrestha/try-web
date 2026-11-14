export interface ResearchEntry {
  id: string;
  topic: string;
  conference: string;
  summary: string;
  /** Keep metadata editable until final publication details are verified */
  paperTitle: string;
  authors: string;
  publicationYear: string;
  publicationUrl: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  organizer: string;
  year: string;
  context: string;
}

export const researchEntries: ResearchEntry[] = [
  {
    id: 'sindhupalchok-post-earthquake',
    topic: 'Post-Earthquake Impacts in Sindhupalchok',
    conference:
      '4th International Conference on Earthquake Engineering and Post Disaster Reconstruction Planning',
    summary:
      'Research examining post-earthquake impacts in Sindhupalchok, associated with the 4th International Conference on Earthquake Engineering and Post Disaster Reconstruction Planning.',
    paperTitle: 'Title pending final confirmation',
    authors: 'Premal Kumar Shrestha et al. (author list to be confirmed)',
    publicationYear: 'Year to be confirmed',
    publicationUrl: '',
  },
];

export const achievementEntries: AchievementEntry[] = [
  {
    id: 'kcc-coding-competition-2023',
    title: 'First Runner-up – KCC IT Club Coding Competition',
    organizer: 'KCC IT Club in collaboration with KCC SQC Club',
    year: '2023',
    context: 'Recognized for algorithmic problem-solving and software implementation under timed competition constraints.',
  },
];
