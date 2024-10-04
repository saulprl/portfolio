import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import {
  SiDart,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiJavascript,
  SiReact,
  SiTypescript,
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

export default function AccessPage() {
  return (
    <>
      <SectionTitle>CSI PRO ACCESS</SectionTitle>
      <p className="text-center">
        Fully featured security and access-control system
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
                <SiTypescript />
              </ChipIcon>
              <ChipLabel>TypeScript</ChipLabel>
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
                <SiFirebase />
              </ChipIcon>
              <ChipLabel>Firebase</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiReact />
              </ChipIcon>
              <ChipLabel>React Native</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiExpo />
              </ChipIcon>
              <ChipLabel>Expo</ChipLabel>
            </Chip>
          </div>
          <H3 mono>Additional technologies</H3>
          <div className="flex w-full flex-wrap items-center gap-1">
            <Chip>
              <ChipIcon>
                <SiDart />
              </ChipIcon>
              <ChipLabel>Dart</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiFlutter />
              </ChipIcon>
              <ChipLabel>Flutter</ChipLabel>
            </Chip>
          </div>
          <H3 mono>Period</H3>
          <p>
            February 2023 - <i>Present</i>
          </p>
          <H3 mono>Links</H3>
          <Button asChild>
            <Link
              href="https://github.com/CSIPro/native-access"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <SiGithub />
                Mobile app repo
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://github.com/CSIPro/access-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <SiGithub />
                Web app repo
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://access.csipro.isi.unison.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <FaLink />
                CSI PRO ACCESS
              </span>
            </Link>
          </Button>
        </TechSummary>
        <ProjectDescriptionSection>
          <H3 mono>Project Background</H3>
          <p>
            <MonoHighlight>CSI PRO ACCESS</MonoHighlight> is a{" "}
            <strong>security and access-control system</strong> developed within
            the <b>CSI PRO Laboratory</b> in <i>Universidad de Sonora</i>.
          </p>
          <p>
            This project started as an experiment to attempt to build a system
            that allowed us to open the laboratory&apos;s door without having to
            use a key, since <b>CSI PRO</b> was steadily growing at the time and
            we didn&apos;t really have the resources to provide everyone with a
            key. Additionally, achieving this would make it more convenient to
            access the laboratory and would provide us with a reliable way of
            tracking who has entered.
          </p>
          <H3 mono>App features</H3>
          <ul className="list-inside list-disc">
            <li>Login with Google or GitHub</li>
            <li>Real-time access logs</li>
            <li>Support for multiple rooms</li>
            <li>Role-based permissions</li>
            <li>Ability to grant or remove access to specific users</li>
          </ul>
          <H3 mono>How it works</H3>
          <p>
            <MonoHighlight>CSI PRO ACCESS</MonoHighlight> consists of many
            different scripts and apps. Firstly, a{" "}
            <MonoHighlight>Python</MonoHighlight> script that handles the user
            input coming from a keypad and controls the door&apos;s electric
            lock. The script communicates with a{" "}
            <MonoHighlight>Node.js</MonoHighlight> RESTful API which, in turn,
            communicates with the <MonoHighlight>Firebase</MonoHighlight>{" "}
            services to validate the user input.
          </p>
          <p>
            I developed a <MonoHighlight>Next.js</MonoHighlight> webapp that
            displays the 20 latest access logs in real-time for us to see from
            inside the laboratory.
          </p>
          <p>
            After the keypad method was stable, I coded a new{" "}
            <MonoHighlight>Python</MonoHighlight> script that leveraged{" "}
            <MonoHighlight>Bluetooth</MonoHighlight> to authenticate and access
            the lab. To take advantage of it, I developed the{" "}
            <MonoHighlight>CSI PRO ACCESS</MonoHighlight> mobile app with{" "}
            <MonoHighlight>Flutter</MonoHighlight> with OAuth authentication via
            Firebase and a more sophisticated data layer.
          </p>
          <p>
            As the project grew, I decided to migrate the mobile experience to{" "}
            <MonoHighlight>React Native</MonoHighlight> because I wanted to
            explore it as a <MonoHighlight>Flutter</MonoHighlight> alternative,
            leading to providing a better user experience overall. At the same
            time, I developed a PWA with <MonoHighlight>Vite</MonoHighlight> for
            iOS users.
          </p>
          <H3 mono>Gallery</H3>
          <Carousel className="md:w-3/5 md:self-center">
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/csipro-access/access-cover.png"
                  alt="Cover image for CSI PRO ACCESS project card"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/csipro-access/access-dashboard.png"
                  alt="Screenshot of CSI PRO ACCESS Dashboard screen"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/csipro-access/access-logs.png"
                  alt="Screenshot of CSI PRO ACCESS Logs screen"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/csipro-access/access-members.png"
                  alt="Screenshot of CSI PRO ACCESS Members screen for admins"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/csipro-access/access-requests.png"
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
