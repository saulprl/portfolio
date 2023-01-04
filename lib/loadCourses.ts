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

export const loadCourses = async (): Promise<Data> => {
  const res = await fetch("http://localhost:3000/api/courses");
  const data: Data = await res.json();

  return data;
};
