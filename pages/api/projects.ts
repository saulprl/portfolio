import path from "path";
import { promises as fs } from "fs";
import { Ok, Err, Result } from "ts-results";

import type { NextApiRequest, NextApiResponse } from "next";

import type { Project } from "../../models/Project";

interface Data {
  message: string;
  content: Project[];
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Result<Data, Error>>
) => {
  try {
    const jsonDirectory = path.join(process.cwd(), "json", "projects.json");
    const fileContent = await fs.readFile(jsonDirectory, "utf8");

    res.status(200).json(
      Ok({
        message: "Loaded file content.",
        content: JSON.parse(fileContent),
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json(Err(error as Error));
  }
};

export default handler;
