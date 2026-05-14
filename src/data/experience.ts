export interface MissionObjective {
  id: string;
  description: string;
}

export interface ExperienceMission {
  id: string;
  missionName: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  status: 'COMPLETED' | 'ACTIVE';
  objectives: MissionObjective[];
  lore: string;
}

export const MISSIONS: ExperienceMission[] = [
  {
    id: 'kiit-university',
    missionName: 'ACADEMIC_ENCRYPTION',
    role: 'B.Tech Student (Computer Science)',
    company: 'KIIT University',
    location: 'Bhubaneswar, India',
    duration: '2021 - 2025',
    status: 'ACTIVE',
    objectives: [
      { id: 'obj1', description: 'Mastered Core Computer Science paradigms.' },
      { id: 'obj2', description: 'Led multiple hackathon teams to victory.' },
      { id: 'obj3', description: 'Researched advanced AI integration workflows.' }
    ],
    lore: 'The primary training ground where basic logic was forged into high-level system architecture.'
  },
  {
    id: 'rigel-foundation',
    missionName: 'NEURAL_LINK_STABILIZATION',
    role: 'Software Engineer Intern',
    company: 'Rigel Foundation',
    location: 'Remote',
    duration: 'Jun 2023 - Aug 2023',
    status: 'COMPLETED',
    objectives: [
      { id: 'obj1', description: 'Developed high-performance React components.' },
      { id: 'obj2', description: 'Optimized state management for complex UI.' },
      { id: 'obj3', description: 'Integrated RESTful APIs with sub-100ms latency.' }
    ],
    lore: 'A high-stakes operation involving the stabilization of frontend data streams.'
  },
  {
    id: 'deloitte-simulation',
    missionName: 'ENTERPRISE_MAINFRAME_AUDIT',
    role: 'Cybersecurity Analyst (Simulation)',
    company: 'Deloitte',
    location: 'Virtual',
    duration: 'Jan 2023 - Mar 2023',
    status: 'COMPLETED',
    objectives: [
      { id: 'obj1', description: 'Identified vulnerabilities in simulated corporate networks.' },
      { id: 'obj2', description: 'Implemented encryption protocols for sensitive data.' },
      { id: 'obj3', description: 'Generated comprehensive threat assessment reports.' }
    ],
    lore: 'Infiltrating and auditing large-scale corporate structures to ensure defensive integrity.'
  },
  {
    id: 'aws-internship',
    missionName: 'CLOUD_GRID_ORCHESTRATION',
    role: 'Cloud Developer Intern',
    company: 'Amazon Web Services',
    location: 'Bhubaneswar',
    duration: 'Aug 2022 - Oct 2022',
    status: 'COMPLETED',
    objectives: [
      { id: 'obj1', description: 'Deployed serverless architectures using Lambda.' },
      { id: 'obj2', description: 'Managed S3 data buckets with zero-loss protocols.' },
      { id: 'obj3', description: 'Configured IAM policies for secure grid access.' }
    ],
    lore: 'Mastering the vast atmospheric network that powers the modern digital age.'
  }
];
