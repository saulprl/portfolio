import path from "path";
import { promises as fs } from "fs";

import type { Course } from "../models/Course";

interface Data {
  "en-US": {
    page: { title: string; description: string };
    display: {
      courseCompleted: string;
      courseOngoing: string;
      showCertificate: string;
    };
    courses: Course[];
  };
  "es-MX": {
    page: { title: string; description: string };
    display: {
      courseCompleted: string;
      courseOngoing: string;
      showCertificate: string;
    };
    courses: Course[];
  };
}

export const loadCourses = async (): Promise<Data> => {
  const jsonPath = path.join(process.cwd(), "json", "courses.json");
  const fileContent = await fs.readFile(jsonPath, "utf8");

  return JSON.parse(fileContent) as Data;
};
