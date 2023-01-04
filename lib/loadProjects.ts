interface Project {
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

interface Data {
  message: string;
  content: {
    projects: Project[];
  };
}

export const loadProjects = async (): Promise<Data> => {
  const res = await fetch("http://localhost:3000/api/projects");
  const data: Data = await res.json();

  return data;
};
