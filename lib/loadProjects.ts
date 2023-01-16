import path from "path";
import { promises as fs } from "fs";

import type { Project } from "../models/Project";

interface Display {
  filters: string;
  repo: string;
  images: string;
  noImages: string;
}
interface Data {
  "en-US": {
    page: { title: string; description: string };
    display: Display;
    projects: Project[];
  };
  "es-MX": {
    page: { title: string; description: string };
    display: Display;
    projects: Project[];
  };
}

type ProjectId = Pick<Project, "id">;

interface PathsData {
  content: {
    ids: ProjectId[];
  };
}

export const loadProject = async (
  id: string,
  locale: string
): Promise<Project> => {
  const jsonPath = path.join(process.cwd(), "json", "projects.json");
  const fileContent = await fs.readFile(jsonPath, "utf8");

  const jsonData = JSON.parse(fileContent) as Data;
  const project = jsonData[locale as keyof Data].projects.find(
    (proj) => proj.id.toString() === id
  );

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};

export const loadProjects = async (): Promise<Data> => {
  const jsonPath = path.join(process.cwd(), "json", "projects.json");
  const fileContent = await fs.readFile(jsonPath, "utf8");

  return JSON.parse(fileContent) as Data;
};

type DisplayData = Omit<Display, "filters">;

export const loadProjectDisplay = async (
  locale: string
): Promise<DisplayData> => {
  const jsonPath = path.join(process.cwd(), "json", "projects.json");
  const fileContent = await fs.readFile(jsonPath, "utf8");
  const parsedJson = JSON.parse(fileContent) as Data;

  const displayData = parsedJson[locale as keyof Data].display;

  return displayData as DisplayData;
};

// export const loadProjectIds = async (): Promise<PathsData> => {
//   const res = await fetch("http://localhost:3000/api/project-ids");
//   const data: PathsData = await res.json();

//   return data;
// };
