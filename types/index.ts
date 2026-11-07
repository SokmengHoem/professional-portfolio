export type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Creative & 3D"
  | "AI & Systems"
  | "Mobile & Cloud";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  featured: boolean;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featuredColor: string; // e.g. '#06b6d4'
  role: string;
  year: string;
  architectureHighlights?: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Cloud"
  | "Creative & 3D"
  | "Architecture & Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  experience: string;
  iconName: string;
  badge?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
  companyUrl?: string;
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  technologies: string[];
  accentGradient: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}
