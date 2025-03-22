import { Carousel } from "@/components/carousel/carousel";
import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { H3 } from "@/components/heading/heading";
import { MonoHighlight } from "@/components/mono-highlight/mono-highlight";
import {
  ProjectDescriptionSection,
  ProjectDetails,
} from "@/components/project-details/project-details";
import { TechSummary } from "@/components/project-details/tech-summary";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

export const metadata: Metadata = {
  title: "CSI PRO Post Generator | saulprl's portfolio",
  description:
    "Web application for the creation of posters and banners with predefined guidelines",
  keywords:
    "csi pro, post generator, web development, software development, react, nextjs, typescript, unison, universidad de sonora",
  openGraph: {
    images: "/images/projects/post-generator/pg-cover.png",
    title: "CSI PRO Post Generator | saulprl's portfolio",
    description:
      "Web application for the creation of posters and banners with predefined guidelines",
  },
};

export default function PostGenerator() {
  return (
    <>
      <SectionTitle>CSI PRO Post Generator</SectionTitle>
      <p className="text-center">
        Web application for the creation of posters and banners with predefined
        guidelines.
      </p>
      <ProjectDetails>
        <TechSummary>
          <H3 mono>Tech stack</H3>
          <div className="flex w-full flex-wrap items-center gap-1">
            <Chip>
              <ChipIcon>
                <SiReact />
              </ChipIcon>
              <ChipLabel>React</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiTypescript />
              </ChipIcon>
              <ChipLabel>TypeScript</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiNextdotjs />
              </ChipIcon>
              <ChipLabel>Next.js</ChipLabel>
            </Chip>
          </div>
          <H3 mono>Period</H3>
          <span>August 2023 - September 2023</span>
          <H3 mono>Links</H3>
          <Button asChild>
            <Link
              href="https://github.com/CSIPro/post-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <SiGithub />
                Repository
              </span>
            </Link>
          </Button>
        </TechSummary>
        <ProjectDescriptionSection>
          <H3 mono>Project Background</H3>
          <p>
            <MonoHighlight>CSI PRO Post Generator</MonoHighlight> is a web
            application created to aid <b>CSI PRO</b>&apos;s marketing team in
            the creation of posters with predefined design guidelines. This tool
            had already been developed by a previous <b>CSI PRO</b> generation,
            but we decided to remake it from scratch given the significant
            changes made to the laboratory&apos;s branding.
          </p>
          <H3 mono>Features</H3>
          <ul className="list-inside list-disc">
            <li>Creation of posters with predefined design guidelines</li>
            <li>Template selection</li>
            <li>Addition of custom assets</li>
            <li>High quality downloads for created images</li>
          </ul>
          <H3 mono>How it works</H3>
          <p>
            Although <MonoHighlight>Post Generator</MonoHighlight> was developed
            with <MonoHighlight>Next.js</MonoHighlight>, it mostly behaves as a
            client-side application.
          </p>
          <p>
            First, the user must select one of the available templates, which
            were created <i>translating</i> the marketing team&apos;s designs to{" "}
            <MonoHighlight>HTML</MonoHighlight> code. After selecting a
            template, the user will be presented with a preview that displays
            the poster&apos;s current state, and a form to populate the
            template. Additionally, the user can{" "}
            <strong>upload custom assets</strong> and add them to the poster
            before proceeding with its download.
          </p>
          <p>
            The poster&apos;s output resolution depends on the original
            template, usually being <strong>1080x1080</strong>.
          </p>
          <H3 mono>Gallery</H3>
          <Carousel className="md:w-3/5 md:self-center">
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-cover.webp"
                  alt="Cover image for CSI PRO Post Generator project card"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-landing-m.webp"
                  alt="CSI PRO Post Generator's main screen on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-templates-m.webp"
                  alt="CSI PRO Post Generator's template selection on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-poster-m.webp"
                  alt="CSI PRO Post Generator's Poster on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-posterrev-m.webp"
                  alt="CSI PRO Post Generator's Poster 2.0 on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-templates-d.webp"
                  alt="CSI PRO Post Generator's template selection on desktop"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-poster-d.webp"
                  alt="CSI PRO Post Generator's Poster on desktop"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/post-generator/pg-posterrev-d.webp"
                  alt="CSI PRO Post Generator's Poster 2.0 on desktop"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
          </Carousel>
        </ProjectDescriptionSection>
      </ProjectDetails>
    </>
  );
}
