import path from "path";
import { promises as fs } from "fs";

import type { Project } from "../models/Project";
interface Data {
  projects: Project[];
}

type ProjectId = Pick<Project, "id">;

interface PathsData {
  content: {
    ids: ProjectId[];
  };
}

export const loadProject = async (id: string): Promise<Project> => {
  const jsonPath = path.join(process.cwd(), "json", "projects.json");
  const fileContent = await fs.readFile(jsonPath, "utf8");

  const jsonData = JSON.parse(fileContent) as Data;
  const project = jsonData.projects.find((proj) => proj.id.toString() === id);

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

// export const loadProjectIds = async (): Promise<PathsData> => {
//   const res = await fetch("http://localhost:3000/api/project-ids");
//   const data: PathsData = await res.json();

//   return data;
// };
