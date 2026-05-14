export type SkillCategory = 'LANGUAGES' | 'FRAMEWORKS' | 'AI_ML' | 'TOOLS';
export type SkillRarity = 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  rarity: SkillRarity;
  mastery: number; // 0-100
  yearsOfExperience: number;
  description: string;
  iconName: string; // Lucide icon name
  lore: string; // Game-style description
}

export const SKILLS: Skill[] = [
  // LANGUAGES
  {
    id: 'python',
    name: 'Python',
    category: 'LANGUAGES',
    rarity: 'LEGENDARY',
    mastery: 95,
    yearsOfExperience: 4,
    description: 'General-purpose programming language for AI and Backend.',
    iconName: 'Terminal',
    lore: 'The foundational script of the old world, now the primary conduit for AI orchestration.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'LANGUAGES',
    rarity: 'EPIC',
    mastery: 90,
    yearsOfExperience: 3,
    description: 'Typed superset of JavaScript for scalable web apps.',
    iconName: 'Code2',
    lore: 'A fortified version of JavaScript, providing structural integrity to complex digital constructs.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'LANGUAGES',
    rarity: 'RARE',
    mastery: 85,
    yearsOfExperience: 4,
    description: 'The language of the web.',
    iconName: 'Zap',
    lore: 'The chaotic energy that flows through every terminal and network node.'
  },
  
  // FRAMEWORKS
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'FRAMEWORKS',
    rarity: 'LEGENDARY',
    mastery: 92,
    yearsOfExperience: 2.5,
    description: 'React framework for production-grade apps.',
    iconName: 'Layers',
    lore: 'A high-level framework that synchronizes server and client for instantaneous data delivery.'
  },
  {
    id: 'react',
    name: 'React',
    category: 'FRAMEWORKS',
    rarity: 'EPIC',
    mastery: 94,
    yearsOfExperience: 3,
    description: 'Library for building user interfaces.',
    iconName: 'Cpu',
    lore: 'The core engine responsible for rendering reactive visual components.'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'FRAMEWORKS',
    rarity: 'RARE',
    mastery: 88,
    yearsOfExperience: 2,
    description: 'Modern, fast web framework for building APIs with Python.',
    iconName: 'Activity',
    lore: 'An optimized gateway for high-velocity data transmission between systems.'
  },

  // AI/ML
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI_ML',
    rarity: 'EPIC',
    mastery: 82,
    yearsOfExperience: 2,
    description: 'Open-source platform for machine learning.',
    iconName: 'BrainCircuit',
    lore: 'The neural architect used to build complex cognitive models.'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI_ML',
    rarity: 'EPIC',
    mastery: 85,
    yearsOfExperience: 2,
    description: 'Tensors and Dynamic neural networks in Python.',
    iconName: 'Brain',
    lore: 'A flexible substrate for training advanced autonomous agents.'
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'AI_ML',
    rarity: 'RARE',
    mastery: 80,
    yearsOfExperience: 1.5,
    description: 'Library for computer vision.',
    iconName: 'Eye',
    lore: 'Granting digital systems the ability to perceive and interpret physical reality.'
  },

  // TOOLS
  {
    id: 'docker',
    name: 'Docker',
    category: 'TOOLS',
    rarity: 'EPIC',
    mastery: 88,
    yearsOfExperience: 2,
    description: 'Containerization for applications.',
    iconName: 'Box',
    lore: 'Encapsulating environments within secure, portable data cells.'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'TOOLS',
    rarity: 'RARE',
    mastery: 75,
    yearsOfExperience: 1.5,
    description: 'Cloud computing services.',
    iconName: 'Cloud',
    lore: 'The vast atmospheric grid that powers the decentralized network.'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'TOOLS',
    rarity: 'COMMON',
    mastery: 95,
    yearsOfExperience: 4,
    description: 'Version control system.',
    iconName: 'GitBranch',
    lore: 'The temporal map that tracks every divergence and convergence in the code timeline.'
  }
];
