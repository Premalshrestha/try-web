export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  engagementType: string;
  highlights: string[];
  focusAreas?: string[];
  featured?: boolean;
}

export const leadershipStatement =
  'Leadership is not only about taking responsibility. It is about creating opportunities, bringing people together, and contributing to meaningful change.';

export const leadershipItems: LeadershipItem[] = [
  {
    id: 'sdg-ambassador-batch-3',
    title: 'SDG Ambassador Leadership Program – Batch 3',
    organization: 'Kantipur City College (KCC)',
    engagementType: 'Program Graduate & Organizing Team',
    featured: true,
    highlights: [
      'Graduate of the KCC SDG Ambassador Leadership Program.',
      'Served on the program organizing team supporting cohort coordination and delivery.',
      'Served as Host and Program Director for the official graduation ceremony.',
    ],
    focusAreas: [
      '17 Sustainable Development Goals',
      'GCED',
      'WASH',
      'Disaster Risk Management',
      'Nature-based Solutions',
      'Gender Equality',
    ],
  },
  {
    id: 'gced-sdg-advocacy-lead',
    title: 'GCED & SDG Advocacy Lead',
    organization: 'KCC SDSN Club',
    engagementType: 'Student Advocacy Leadership',
    highlights: [
      'Led campus advocacy initiatives centered on Global Citizenship Education (GCED) and the Sustainable Development Goals.',
    ],
  },
  {
    id: 'sdsn-representative',
    title: 'SDSN Representative / Member',
    organization: 'Sustainable Development Solutions Network (Youth / Campus)',
    engagementType: 'Advocacy & Representation',
    highlights: [
      'Engaged in youth-led sustainability dialogue, community awareness, and cross-campus knowledge exchange.',
    ],
  },
  {
    id: 'nobel-nepal-outreach',
    title: 'Outreach Team Member',
    organization: 'Nobel Nepal',
    engagementType: 'Community Outreach',
    highlights: [
      'Contributed to outreach coordination, peer engagement, and educational community communication.',
    ],
  },
  {
    id: 'omlas-champion-2025',
    title: 'OMLAS Champion 2025',
    organization: 'One Million Leaders Asia (OMLAS)',
    engagementType: 'Leadership Fellowship',
    highlights: [
      'Selected participant focusing on purposeful youth leadership, sustainability, and regional collaboration.',
    ],
  },
  {
    id: 'panelist-gender-equality',
    title: 'Panelist – "Give to Gain: The Power of Collective Action for Gender Equality"',
    organization: 'Community & Academic Forum',
    engagementType: 'Public Speaking & Panel',
    highlights: [
      'Contributed perspectives on collective youth action, inclusive participation, and community-level advocacy for gender equality.',
    ],
  },
];
