import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { SectionTitle } from "@/components/section-title/section-title";
import { ToolsSection } from "@/components/tools-section/tools-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle>Projects</SectionTitle>
      <ProjectsSection />
      <SectionTitle>Frameworks & Tools</SectionTitle>
      <ToolsSection />
      <div className="py-1" />
    </>
  );
}
