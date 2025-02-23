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
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import {
  SiGithub,
  SiGraphql,
  SiReact,
  SiRemix,
  SiShopify,
  SiTypescript,
} from "react-icons/si";

export default function CPC() {
  return (
    <>
      <SectionTitle>Culto al Perro Café</SectionTitle>
      <p className="text-center">
        Culto al Perro Café landing page integrated with Shopify
      </p>
      <ProjectDetails>
        <TechSummary>
          <H3 mono>Tech stack</H3>
          <div className="flex w-full flex-wrap items-center gap-1">
            <Chip>
              <ChipIcon>
                <SiRemix />
              </ChipIcon>
              <ChipLabel>Remix.run</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiShopify />
              </ChipIcon>
              <ChipLabel>Shopify</ChipLabel>
            </Chip>
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
                <SiGraphql />
              </ChipIcon>
              <ChipLabel>GraphQL</ChipLabel>
            </Chip>
          </div>
          <H3 mono>Period</H3>
          <p>March 2023 - June 2023</p>
          <H3 mono>Links</H3>
          <Button asChild>
            <Link
              href="https://github.com/tepachelabs/perro-cafe-storefront"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <SiGithub />
                GitHub Repository
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://perro.cafe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <FaLink />
                Website
              </span>
            </Link>
          </Button>
        </TechSummary>
        <ProjectDescriptionSection>
          <H3 mono>Project Description</H3>
          <p>
            <b>Culto al Perro Café</b> is a coffee shop located in Hermosillo,
            Sonora. This project consists of a landing page integrated with{" "}
            <MonoHighlight>Shopify</MonoHighlight> to showcase their products.
          </p>
          <H3 mono>Responsibilities</H3>
          <p>
            I was involved in some of the decision making regarding the
            technologies to use, leveraging <b>Shopify&apos;s</b>{" "}
            <MonoHighlight>Liquid</MonoHighlight> and{" "}
            <MonoHighlight>Hydrogen</MonoHighlight> frameworks, with the latter
            including the use of <MonoHighlight>Remix.run</MonoHighlight> for
            the frontend.
          </p>
          <ul className="list-inside list-disc">
            <li>Leveraging tech alternatives</li>
            <li>Frontend development</li>
            <li>Custom design implementation</li>
            <li>Shopify integration</li>
          </ul>
          <H3 mono>Project Development</H3>
          <p>
            During development, I learned about{" "}
            <MonoHighlight>Remix.run</MonoHighlight>, <b>Shopify</b>,{" "}
            <MonoHighlight>Styled Components</MonoHighlight>,{" "}
            <MonoHighlight>GraphQL</MonoHighlight>, and{" "}
            <b>SEO best practices</b> as a whole.
          </p>
          <p>
            Since I worked under experienced engineers, I received constant
            feedback during meetings about the <b>quality of my code</b> and the{" "}
            <b>best practices</b> to follow. This greatly helped me improve my
            skills and learn how to work in a team.
          </p>
          <p>
            Additionally, I had to solve some unforeseen issues with{" "}
            <MonoHighlight>Remix</MonoHighlight>&apos;s{" "}
            <b>Server Side Rendering</b>, having to perform a complete migration
            to <MonoHighlight>Emotion Styled</MonoHighlight> in place of{" "}
            <MonoHighlight>Styled Components</MonoHighlight>.
          </p>
          <H3 mono>Gallery</H3>
          <Carousel className="md:w-3/5 md:self-center">
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/CPC-cover.webp"
                  alt="Cover image for Culto al Perro Café landing page project card"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-landing-m.webp"
                  alt="Screenshot of Culto al Perro Café landing page on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-menu-m.webp"
                  alt="Screenshot of Culto al Perro Café Menu section on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-cult-m.webp"
                  alt="Screenshot of Culto al Perro Café Cult section on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-footer-m.webp"
                  alt="Screenshot of Culto al Perro Café footer on mobile"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-landing-d.webp"
                  alt="Screenshot of Culto al Perro Café landing page on desktop"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-cult-d.webp"
                  alt="Screenshot of Culto al Perro Café Cult section on desktop"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-temple-d.webp"
                  alt="Screenshot of Culto al Perro Café Temple section on desktop"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/cpc/cpc-footer-d.webp"
                  alt="Screenshot of Culto al Perro Café footer on desktop"
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
