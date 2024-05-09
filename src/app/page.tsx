import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { SectionTitle } from "@/components/section-title/section-title";
import { ToolsSection } from "@/components/tools-section/tools-section";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-4 p-2">
        <Hero />
        <SectionTitle>Projects</SectionTitle>
        {/* <h2 className="text-center font-mono text-3xl font-bold text-muted">
          <span className="rounded-sm border-2 border-muted bg-secondary px-px text-white">
            Pro
          </span>
          jects
        </h2> */}
        <ProjectsSection />
        <SectionTitle>Frameworks & Tools</SectionTitle>
        {/* <h2 className="text-center font-mono text-3xl font-bold text-muted">
          <span className="rounded-sm border-2 border-muted bg-secondary px-px text-white">
            Frameworks
          </span>{" "}
          & Tools
        </h2> */}
        <ToolsSection />
      </main>
    </>
  );
}
