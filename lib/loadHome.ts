import path from "path";
import { promises as fs } from "fs";

interface Data {
  about: { title: string; content: string[] };
  experience: { title: string; content: string[] };
  technologies: { title: string };
}

export const loadHome = async (): Promise<Data> => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContent = await fs.readFile(jsonDirectory + "/home.json", "utf8");

  return JSON.parse(fileContent) as Data;
};
