import Image from "next/image";

import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardFooter,
} from "../project-card/project-card";
import { Section } from "../section/section";
import { CardDescription, CardTitle } from "../ui/card";

export const ProjectsSection = () => {
  return (
    <Section className="md:gap-4">
      <ProjectCard className="rounded-2xl">
        <ProjectCardContent className="relative h-full w-full">
          <Image
            src="/images/projects/csipro-access/access-cover.png"
            alt="Placeholder"
            fill
            className="fit-cover h-full w-full"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <CardTitle>CSI PRO ACCESS</CardTitle>
          <CardDescription>
            Fully featured security and access-control system.
          </CardDescription>
        </ProjectCardFooter>
      </ProjectCard>
      <ProjectCard className="rounded-2xl">
        <ProjectCardContent className="relative h-full w-full">
          <Image
            src="/images/projects/cpc/CPC-cover.png"
            alt="Cover image for Culto al Perro Café landing page project card"
            fill
            className="fit-cover h-full w-full"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <CardTitle>PERRO.CAFE</CardTitle>
          <CardDescription>
            Culto al Perro Café landing page integrated with Shopify.
          </CardDescription>
        </ProjectCardFooter>
      </ProjectCard>
      <ProjectCard className="rounded-2xl">
        <ProjectCardContent className="relative h-full w-full">
          <Image
            src="/images/projects/sislab/sislab-cover.png"
            alt="Cover image for SISLAB project card"
            fill
            className="fit-cover h-full w-full"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <CardTitle>SISLAB</CardTitle>
          <CardDescription>
            Full-stack web app for improving workflow and communication within a
            laboratory.
          </CardDescription>
        </ProjectCardFooter>
      </ProjectCard>
      <ProjectCard className="rounded-2xl">
        <ProjectCardContent className="relative h-full w-full">
          <Image
            src="/images/projects/post-generator/pg-cover.png"
            alt="CSI PRO Post Generator project card cover image"
            fill
            className="fit-cover h-full w-full"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <CardTitle>CSI PRO Post Generator</CardTitle>
          <CardDescription>
            Web application for the creation of posters and banners with
            predefined guidelines.
          </CardDescription>
        </ProjectCardFooter>
      </ProjectCard>
    </Section>
  );
};
