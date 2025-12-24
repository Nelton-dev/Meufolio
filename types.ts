export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'tools';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface Anime {
  id: number;
  title: string;
  description: string;
  quote: string;
  imageUrl: string;
}