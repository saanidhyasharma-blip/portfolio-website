export type ProjectStatus = 'ONLINE' | 'OFFLINE' | 'ARCHIVED';
export type ThreatLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Project {
  id: string;
  level: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  github?: string;
  link?: string;
  status: ProjectStatus;
  threatLevel: ThreatLevel;
  version: string;
  systemLoad: number;
  aiConfidence: number;
  activeUsers: number;
  features: string[];
  media: {
    type: 'video' | 'image' | 'iframe';
    url: string;
    previewUrl?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'fraudulent',
    level: '01',
    title: 'Fraudulent',
    description: 'Real-time fraud detection system with SHAP-based explainability and stratified SMOTE balancing.',
    fullDescription: 'An enterprise-grade defensive array designed to identify malicious financial vectors with 94.2% ROC-AUC accuracy. Features a multi-page operational HUD, real-time transaction monitoring, and a deep-dive forensics layer using SHAP waterfall plots to explain every AI decision.',
    tech: ['LightGBM', 'SHAP', 'Streamlit', 'Python'],
    github: 'https://github.com/saanidhyasharma-blip',
    status: 'ONLINE',
    threatLevel: 'CRITICAL',
    version: '1.4.2',
    systemLoad: 72,
    aiConfidence: 94,
    activeUsers: 1540,
    features: [
      'SHAP Explainer Matrix',
      'Stratified SMOTE Balancing',
      'Real-time Risk HUD',
      'Transaction Investigation'
    ],
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    }
  },
  {
    id: 'telco-churn',
    level: '02',
    title: 'Telco Churn Analysis',
    description: 'Predictive engine for customer retention and risk segmentation in large-scale telecom networks.',
    fullDescription: 'A strategic predictive engine that analyzes customer behavior patterns to identify potential network dropouts. Utilizing tuned XGBoost models, it segments users into High, Medium, and Low risk tiers, providing actionable business intelligence for retention protocols.',
    tech: ['XGBoost', 'Scikit-Learn', 'Streamlit', 'Python'],
    github: 'https://github.com/saanidhyasharma-blip',
    status: 'ONLINE',
    threatLevel: 'HIGH',
    version: '1.1.0',
    systemLoad: 38,
    aiConfidence: 85,
    activeUsers: 850,
    features: [
      'Risk Tier Segmentation',
      'Feature Importance Map',
      'Retention Strategy Logic',
      'Interactive KPI Tracking'
    ],
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200',
    }
  },
  {
    id: 'citeflow',
    level: '03',
    title: 'CiteFlow',
    description: 'Intelligent research orchestration system for contextual document analysis and citation.',
    fullDescription: 'A high-velocity data retrieval system designed for academic and technical research. CiteFlow utilizes vector-based search and generative AI to synthesize context-aware citations and manage complex knowledge graphs across distributed document repositories.',
    tech: ['Next.js', 'OpenAI', 'Pinecone', 'LangChain'],
    github: 'https://github.com/saanidhyasharma-blip',
    status: 'ONLINE',
    threatLevel: 'LOW',
    version: '0.9.1-beta',
    systemLoad: 56,
    aiConfidence: 98,
    activeUsers: 420,
    features: [
      'Vector Retrieval Chain',
      'Contextual Citations',
      'Knowledge Graph Map',
      'Multi-source Ingestion'
    ],
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    }
  },
  {
    id: 'traderpulse',
    level: '04',
    title: 'TraderPulse',
    description: 'High-velocity market intelligence platform with real-time signal processing and technical analysis.',
    fullDescription: 'A low-latency trading dashboard designed for rapid market execution. TraderPulse synchronizes live ticker data via WebSockets, processing thousands of data points per second to generate real-time technical indicators and liquidity heatmaps.',
    tech: ['React', 'D3.js', 'WebSockets', 'Firebase'],
    github: 'https://github.com/saanidhyasharma-blip',
    status: 'ONLINE',
    threatLevel: 'HIGH',
    version: '2.1.0',
    systemLoad: 88,
    aiConfidence: 91,
    activeUsers: 125,
    features: [
      'WebSocket Ticker Sync',
      'Real-time PBR Shaders',
      'Technical Indicator Array',
      'Liquidity Heatmaps'
    ],
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1611974717483-360061fc33bd?auto=format&fit=crop&q=80&w=1200',
    }
  }
];
