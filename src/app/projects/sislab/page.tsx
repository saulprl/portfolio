import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import {
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiVite,
} from "react-icons/si";

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

export const metadata: Metadata = {
  title: "SISLAB | saulprl's portfolio",
  description:
    "Full-stack web app for improving workflow and communication within a laboratory",
  keywords:
    "sislab, full-stack, web app, web development, software development, react, vite, node.js, mongodb, unison, csipro, universidad de sonora",
  openGraph: {
    images: "/images/projects/sislab/sislab-cover.png",
    title: "SISLAB | saulprl's portfolio",
    description:
      "Full-stack web app for improving workflow and communication within a laboratory",
  },
};

export default function Sislab() {
  return (
    <>
      <SectionTitle>SISLAB</SectionTitle>
      <p className="text-center">
        Full-stack web app for improving workflow and communication within a
        laboratory
      </p>
      <ProjectDetails>
        <TechSummary>
          <H3 mono>Tech stack</H3>
          <div className="flex w-full flex-wrap items-center gap-1">
            <Chip>
              <ChipIcon>
                <SiJavascript />
              </ChipIcon>
              <ChipLabel>JavaScript</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiReact />
              </ChipIcon>
              <ChipLabel>React</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiVite />
              </ChipIcon>
              <ChipLabel>Vite</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiNodedotjs />
              </ChipIcon>
              <ChipLabel>Node.js</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiMongodb />
              </ChipIcon>
              <ChipLabel>MongoDB</ChipLabel>
            </Chip>
          </div>
          <H3 mono>Period</H3>
          <span>February 2023 - July 2023</span>
          <H3 mono>Links</H3>
          <Button asChild>
            <Link
              href="https://github.com/Sislab-Developers/sislab-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <SiGithub />
                Frontend repo
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://github.com/Sislab-Developers/sislab-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <SiGithub />
                Backend repo
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://sislab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <FaLink />
                SISLAB
              </span>
            </Link>
          </Button>
        </TechSummary>
        <ProjectDescriptionSection>
          <H3 mono>Project Background</H3>
          <p>
            <MonoHighlight>SISLAB</MonoHighlight> is a{" "}
            <strong>full stack web application</strong> developed by{" "}
            <strong>CSI PRO</strong> members that aims to{" "}
            <strong>improve the workflow and communication</strong> within a
            chemistry laboratory. The app is designed to be used by{" "}
            <b>laboratory staff and professors</b> to organize and keep track of
            the activities carried out.
          </p>
          <H3 mono>Features</H3>
          <ul className="list-inside list-disc">
            <li>
              User authentication and authorization with{" "}
              <MonoHighlight>Clerk</MonoHighlight>
            </li>
            <li>Role-based routing (staff and professor)</li>
            <li>
              Professors can create laboratory requests for specific assignments
            </li>
            <li>Automatic request management for staff</li>
            <li>User management for staff</li>
            <li>Export requests to PDF</li>
          </ul>
          <H3 mono>Development</H3>
          <p>
            <MonoHighlight>SISLAB</MonoHighlight> was developed with{" "}
            <MonoHighlight>Vite</MonoHighlight> and{" "}
            <MonoHighlight>React</MonoHighlight> on the frontend, and{" "}
            <MonoHighlight>Node.js</MonoHighlight> on the backend with a{" "}
            <MonoHighlight>MongoDB</MonoHighlight> database. Since this was one
            of our very first projects, we started experimenting with UI
            Component Libraries like <MonoHighlight>Material UI</MonoHighlight>.
          </p>
          <p>
            This project was developed in close collaboration with the{" "}
            <strong>Department of Chemical-Biological Sciences</strong> to
            ensure that they&apos;d get exactly the tool they needed.
          </p>
          <H3 mono>Gallery</H3>
          <Carousel className="md:w-3/5 md:self-center">
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/sislab/sislab-cover.webp"
                  alt="Cover image for SISLAB project card"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/sislab/sislab-newreq-m.webp"
                  alt="Screenshot of CSI PRO ACCESS Dashboard screen"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/sislab/sislab-form-m.webp"
                  alt="Screenshot of CSI PRO ACCESS Logs screen"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/sislab/sislab-login-d.webp"
                  alt="Screenshot of CSI PRO ACCESS Members screen for admins"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/sislab/sislab-requests-d.webp"
                  alt="Screenshot of CSI PRO ACCESS Requests screen for admins"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/sislab/sislab-users-d.webp"
                  alt="Screenshot of CSI PRO ACCESS Requests screen for admins"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            {/* <CarouselPrevious variant="default" />
            <CarouselNext variant="default" /> */}
          </Carousel>
        </ProjectDescriptionSection>
      </ProjectDetails>
    </>
  );
}
