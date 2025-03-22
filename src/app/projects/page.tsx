import { ProjectsSection } from "@/components/projects-section/projects-section";
import { SectionTitle } from "@/components/section-title/section-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | saulprl's portfolio",
  description: "Projects made by saulprl",
  keywords:
    "projects, saulprl, portfolio, web development, mobile development, software development, react, nextjs, typescript, javascript, flutter, react native",
  openGraph: {
    title: "Projects | saulprl's portfolio",
    description: "Projects made by saulprl",
    images: "/images/csipro-access-conf.jpg",
  },
};

export default function Home() {
  return (
    <>
      <SectionTitle as="h1">Projects</SectionTitle>
      <ProjectsSection />
    </>
  );
}
