export interface TechBadge {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  techs: TechBadge[];
}
