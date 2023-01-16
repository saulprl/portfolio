import path from "path";
import { promises as fs } from "fs";
import { Ok, Err, Result } from "ts-results";

import type { NextApiRequest, NextApiResponse } from "next";

import type { Course } from "../../models/Course";

interface Data {
  message: string;
  content: Course[];
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Result<Data, Error>>
) => {
  try {
    const jsonDirectory = path.join(process.cwd(), "json", "courses.json");
    const fileContent = await fs.readFile(jsonDirectory, "utf8");

    res.status(200).json(
      Ok({
        message: "Loaded file content.",
        content: JSON.parse(fileContent),
      })
    );
  } catch (error) {
    res.status(500).json(Err(error as Error));
  }
};

export default handler;
