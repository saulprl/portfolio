import { ProjectsSection } from "@/components/projects-section/projects-section";
import { SectionTitle } from "@/components/section-title/section-title";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-4 p-2">
        <SectionTitle>Projects</SectionTitle>
        <ProjectsSection />
      </main>
    </>
  );
}
