import path from "path";
import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

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
  content: Project[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContent = await fs.readFile(
    jsonDirectory + "/projects.json",
    "utf8"
  );

  res.status(200).json({
    message: "Loaded file content.",
    content: JSON.parse(fileContent),
  });
};

export default handler;
