// /api/technologies

import path from "path";
import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

interface Technology {
  name: string[];
}

interface Data {
  languages: Technology;
  frameworks: Technology;
  databases: Technology;
}

interface Exception extends Error {
  status: number;
  err: any;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Exception>
) => {
  try {
    const jsonPath = path.join(process.cwd(), "json", "technologies.json");
    const fileContents = await fs.readFile(jsonPath, "utf8");

    res.status(200).json(JSON.parse(fileContents) as Data);
  } catch (error) {
    res.status(404).json({
      message: error instanceof Error ? error.message : "File not found.",
      status: 404,
      err: error,
      name: error instanceof Error ? error.name : "API Error",
    });
  }
};

export default handler;
