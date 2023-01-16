import path from "path";
import { promises as fs } from "fs";

interface Content {
  page: { title: string; description: string };
  about: { title: string; content: string[] };
  experience: { title: string; content: string[] };
  technologies: { title: string };
}

interface Data {
  "en-US": Content;
  "es-MX": Content;
}

export const loadHome = async (): Promise<Data> => {
  const jsonDirectory = path.join(process.cwd(), "json", "home.json");
  const fileContent = await fs.readFile(jsonDirectory, "utf8");

  return JSON.parse(fileContent) as Data;
};
