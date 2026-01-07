export type SectionId = 'about' | 'experience' | 'projects';
export interface JobProps {
  id: string;
  company: string;
  work: string;
  from: string;
  to: string;
  description: string;
  tags?: string[];
  url?: string;
}

export interface ProjectProps {
  title: string;
  image: string;
  description: string;
  url?: string;
  tags?: string[];
}