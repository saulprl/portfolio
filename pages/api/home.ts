import path from "path";
import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  content: {
    about: { title: string; content: string[] };
    experience: { title: string; content: string[] };
    technologies: { title: string };
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile(jsonDirectory + "/home.json", "utf8");

  res.status(200).json({
    message: "Loaded file content.",
    content: JSON.parse(fileContents),
  });
};

export default handler;
