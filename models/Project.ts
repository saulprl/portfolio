export interface Project {
  id: number;
  name: string;
  excerpt: string;
  description: string;
  languages: string;
  frameworks: string | null;
  database: string | null;
  images: string[];
  repo: string;
}
