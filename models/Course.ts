export interface Course {
  id: number;
  name: string;
  platform: "Udemy";
  link: string;
  totalHours: number;
  status: "Completed" | "In progress";
  description: string;
  certificate: string | null;
}
