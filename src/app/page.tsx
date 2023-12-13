import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects-section/projects-section";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-4 p-2">
        <Hero />
        <h2 className="rounded-sm border-2 border-muted px-1 text-3xl font-medium text-muted">
          Projects
        </h2>
        <ProjectsSection />
        <h2 className="rounded-sm border-2 border-muted px-1 text-3xl font-medium text-muted">
          Frameworks & Tools
        </h2>
      </main>
    </>
  );
}
