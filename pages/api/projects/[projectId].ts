import path from "path";
import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

import type { Project } from "../../../models/Project";

interface Projects {
  projects: Project[];
}

type Data =
  | {
      project: Project;
    }
  | {
      error: string;
    };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { projectId } = req.query;

  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContent = await fs.readFile(
    jsonDirectory + "/projects.json",
    "utf8"
  );

  const parsedProjects: Projects = JSON.parse(fileContent);
  const project = parsedProjects.projects.find(
    (proj) => proj.id.toString() === projectId
  );

  if (!project) {
    res.status(404).json({
      error: "Project was not found.",
    });
  }

  res.status(200).json({
    project: project!,
  });
};

export default handler;
