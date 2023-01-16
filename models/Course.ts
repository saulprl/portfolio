export interface Course {
  id: number;
  name: string;
  platform: "Udemy";
  link: string;
  totalHours: number;
  status: "Completed" | "Concluido" | "In progress" | "En progreso";
  description: string;
  certificate: string | null;
}
