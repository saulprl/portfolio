import Image from "next/image";

import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardFooter,
  ProjectCardFooterHighlight,
} from "../project-card/project-card";
import { Section } from "../section/section";
import { CardDescription, CardTitle } from "../ui/card";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <Section className="md:grid-cols-3 md:gap-2">
      <Link href="/projects/csipro-access">
        <ProjectCard>
          <ProjectCardContent>
            <Image
              src="/images/projects/csipro-access/access-cover.png"
              alt="Cover image for CSI PRO ACCESS project card"
              fill
              className="fit-cover h-full w-full rounded"
            />
          </ProjectCardContent>
          <ProjectCardFooter>
            <ProjectCardFooterHighlight className="bg-[#7145d6]" />
            <CardTitle>CSI PRO ACCESS</CardTitle>
            <CardDescription>
              Fully featured security and access-control system.
            </CardDescription>
          </ProjectCardFooter>
        </ProjectCard>
      </Link>
      <Link href="/projects/cpc">
        <ProjectCard>
          <ProjectCardContent>
            <Image
              src="/images/projects/cpc/CPC-cover.png"
              alt="Cover image for Culto al Perro Café landing page project card"
              fill
              className="fit-cover h-full w-full rounded"
            />
          </ProjectCardContent>
          <ProjectCardFooter>
            <ProjectCardFooterHighlight className="bg-[#f0774e]" />
            <CardTitle>PERRO.CAFE</CardTitle>
            <CardDescription>
              Culto al Perro Café landing page integrated with Shopify.
            </CardDescription>
          </ProjectCardFooter>
        </ProjectCard>
      </Link>
      <ProjectCard>
        <ProjectCardContent>
          <Image
            src="/images/projects/sislab/sislab-cover.png"
            alt="Cover image for SISLAB project card"
            fill
            className="fit-cover h-full w-full rounded"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <ProjectCardFooterHighlight className="bg-[#00c892]" />
          <CardTitle>SISLAB</CardTitle>
          <CardDescription>
            Full-stack web app for improving workflow and communication within a
            laboratory.
          </CardDescription>
        </ProjectCardFooter>
      </ProjectCard>
      <ProjectCard>
        <ProjectCardContent>
          <Image
            src="/images/projects/post-generator/pg-cover.png"
            alt="CSI PRO Post Generator project card cover image"
            fill
            className="fit-cover h-full w-full rounded"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <ProjectCardFooterHighlight className="bg-[#7145d6]" />
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
