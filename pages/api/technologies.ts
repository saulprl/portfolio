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
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile(
    jsonDirectory + "/technologies.json",
    "utf8"
  );

  res.status(200).json(JSON.parse(fileContents));
};

export default handler;
