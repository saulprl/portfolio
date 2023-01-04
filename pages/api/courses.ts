import path from "path";
import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

interface Course {
  id: number;
  name: string;
  platform: "Udemy";
  link: string;
  totalHours: number;
  status: "Completed" | "In progress";
  description: string;
  certificate: string | null;
}

interface Data {
  message: string;
  content: Course[];
}

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContent = await fs.readFile(
    jsonDirectory + "/courses.json",
    "utf8"
  );

  res.status(200).json({
    message: "Loaded file content.",
    content: JSON.parse(fileContent),
  });
};
