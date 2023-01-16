// /api/technologies

import path from "path";
import { promises as fs } from "fs";
import { Ok, Err, Result } from "ts-results";

import type { NextApiRequest, NextApiResponse } from "next";

interface Technology {
  name: string[];
}

interface Data {
  languages: Technology;
  frameworks: Technology;
  databases: Technology;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Result<Data, Error>>
) => {
  try {
    const jsonPath = path.join(process.cwd(), "json", "technologies.json");

    const fileContents = await fs.readFile(jsonPath, "utf8");

    res.status(200).json(Ok(JSON.parse(fileContents) as Data));
  } catch (error) {
    console.log(error);
    res.status(500).json(Err(error as Error));
  }
};

export default handler;
