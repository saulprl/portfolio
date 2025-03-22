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
              src="/images/projects/csipro-access/access-cover.webp"
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
      <Link href="/projects/umana-app">
        <ProjectCard>
          <ProjectCardContent>
            <Image
              src="/images/projects/umana/umana-1.webp"
              alt="Umana project card cover image"
              fill
              className="fit-cover h-full w-full rounded"
            />
          </ProjectCardContent>
          <ProjectCardFooter>
            <ProjectCardFooterHighlight className="bg-gradient-to-b from-[#ff00b8] from-0% via-[#b359f8] via-50% to-[#ff00b8] to-100% bg-[length:100%_300%] bg-[50%_82%] transition-all duration-1000 ease-in-out group-hover:bg-[50%_15%] group-focus:bg-[50%_15%] group-active:bg-[50%_15%]" />
            <CardTitle>UMANA APP</CardTitle>
            <CardDescription>
              A mobile fitness app with on-demand workout videos for subscribed
              users.
            </CardDescription>
          </ProjectCardFooter>
        </ProjectCard>
      </Link>
      <Link href="/projects/cpc">
        <ProjectCard>
          <ProjectCardContent>
            <Image
              src="/images/projects/cpc/CPC-cover.webp"
              alt="Cover image for Culto al Perro Café storefront project card"
              fill
              className="fit-cover h-full w-full rounded"
            />
          </ProjectCardContent>
          <ProjectCardFooter>
            <ProjectCardFooterHighlight className="bg-[#f0774e]" />
            <CardTitle>PERRO.CAFE</CardTitle>
            <CardDescription>
              Culto al Perro Café storefront integrated with Shopify.
            </CardDescription>
          </ProjectCardFooter>
        </ProjectCard>
      </Link>
      <Link href="/projects/sislab">
        <ProjectCard>
          <ProjectCardContent>
            <Image
              src="/images/projects/sislab/sislab-cover.webp"
              alt="Cover image for SISLAB project card"
              fill
              className="fit-cover h-full w-full rounded"
            />
          </ProjectCardContent>
          <ProjectCardFooter>
            <ProjectCardFooterHighlight className="bg-[#00c892]" />
            <CardTitle>SISLAB</CardTitle>
            <CardDescription>
              Full-stack web app for improving workflow and communication within
              a laboratory.
            </CardDescription>
          </ProjectCardFooter>
        </ProjectCard>
      </Link>
      <Link href="/projects/post-generator">
        <ProjectCard>
          <ProjectCardContent>
            <Image
              src="/images/projects/post-generator/pg-cover.webp"
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
      </Link>
    </Section>
  );
};
