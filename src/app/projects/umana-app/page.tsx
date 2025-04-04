import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiMysql,
  SiSqlite,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import { Carousel } from "@/components/carousel/carousel";
import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { H2 } from "@/components/heading/heading";
import { MonoHighlight } from "@/components/mono-highlight/mono-highlight";
import {
  ProjectDescriptionSection,
  ProjectDetails,
} from "@/components/project-details/project-details";
import { TechSummary } from "@/components/project-details/tech-summary";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umana App | saulprl's portfolio",
  description:
    "A mobile fitness app with on-demand workout videos for subscribed users.",
  keywords:
    "umana, fitness, app, flutter, dart, javascript, typescript, vue.js, sqlite, mysql, mobile, workout, video, on-demand, program, livestream, push notifications, firebase, play store, app store",
  openGraph: {
    images: "/images/projects/umana/umana-cover.png",
    title: "Umana App | saulprl's portfolio",
    description:
      "A mobile fitness app with on-demand workout videos for subscribed users.",
  },
};

export default function UmanaPage() {
  return (
    <>
      <SectionTitle as="h1">UMANA APP</SectionTitle>
      <p className="text-center">
        A mobile fitness app with on-demand workout videos for subscribed users.
      </p>
      <ProjectDetails>
        <TechSummary>
          <H2 mono>Tech stack</H2>
          <div className="flex w-full flex-wrap items-center gap-1">
            <Chip>
              <ChipIcon>
                <SiFlutter />
              </ChipIcon>
              <ChipLabel>Flutter</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiDart />
              </ChipIcon>
              <ChipLabel>Dart</ChipLabel>
            </Chip>
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
                <SiVuedotjs />
              </ChipIcon>
              <ChipLabel>Vue.js</ChipLabel>
            </Chip>
          </div>
          <H2 mono>Additional technologies</H2>
          <div className="flex w-full flex-wrap items-center gap-1">
            <Chip>
              <ChipIcon>
                <SiSqlite />
              </ChipIcon>
              <ChipLabel>SQLite</ChipLabel>
            </Chip>
            <Chip>
              <ChipIcon>
                <SiMysql />
              </ChipIcon>
              <ChipLabel>MySQL</ChipLabel>
            </Chip>
          </div>
          <H2 mono>Period</H2>
          <span>October 2024 - January 2025</span>
          <H2 mono>Links</H2>
          <Button asChild>
            <Link
              href="https://umana.com.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <FaLink />
                Umana Web App
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://play.google.com/store/apps/details?id=com.umana.umanaapp2&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <IoLogoGooglePlaystore />
                Play Store
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://apps.apple.com/us/app/umana/id1550976756"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 text-base">
                <IoLogoAppleAppstore />
                App Store
              </span>
            </Link>
          </Button>
        </TechSummary>
        <ProjectDescriptionSection>
          <H2 mono>Project Background</H2>
          <p>
            <MonoHighlight>Umana</MonoHighlight> is a{" "}
            <strong>fitness app</strong> that provides a structured approach to
            training through <strong>on-demand classes</strong>, guided
            programs, and livestreamed workouts. Users can follow individual
            classes or complete multi-session programs while{" "}
            <strong>tracking their progress</strong>.
          </p>
          <p>
            This app was developed to create a{" "}
            <strong>personalized and flexible fitness experience</strong>,
            allowing users to follow structured programs, track progress, and
            stay engaged through interactive features like comments, likes, and
            live chat.
          </p>
          <H2 mono>App features</H2>
          <ul className="list-inside list-disc">
            <li>
              <strong>Structured programs</strong> with sessions and multiple
              classes
            </li>
            <li>
              <strong>Progress tracking</strong> for each class and program
              (watch time and completion status)
            </li>
            <li>
              <strong>Offline downloads</strong> for classes
            </li>
            <li>
              <strong>User comments</strong> on programs and classes
            </li>
            <li>
              <strong>Weekly Calendar</strong> with recommended workouts, meal
              plans (PDFs), and motivational messages
            </li>
            <li>
              <strong>Livestreamed classes</strong> with real-time chat
            </li>
            <li>
              <strong>Push notifications</strong> via{" "}
              <MonoHighlight>Firebase</MonoHighlight>
            </li>
            <li>
              <strong>Like feature</strong> for programs, recipes, and classes
            </li>
          </ul>
          <H2 mono>How it works</H2>
          <p>
            Built with Flutter, <MonoHighlight>Umana</MonoHighlight> delivers{" "}
            <strong>high-quality video content via the Vimeo API</strong>.{" "}
            <MonoHighlight>SQLite</MonoHighlight> is used for local storage,
            enabling <strong>offline playback</strong>.{" "}
            <strong>
              <MonoHighlight>Firebase</MonoHighlight> handles push notifications
            </strong>{" "}
            to keep users engaged, while the app&apos;s Weekly Calendar ensures
            structured recommendations with meals and motivation. Livestreams
            allow for real-time interaction, making workouts more engaging and
            dynamic.
          </p>
          <p>
            <MonoHighlight>Umana</MonoHighlight> has been officially{" "}
            <strong>
              published on the Google Play Store and Apple App Store
            </strong>
            , making it easily accessible to users on both Android and iOS
            devices. With its seamless cross-platform experience, users can
            enjoy their workouts anytime, anywhere.
          </p>
          <H2 mono>Gallery</H2>
          <Carousel className="md:w-3/5 md:self-center">
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-1.webp"
                  alt="Umana App home and weekly calendar screens"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-2.webp"
                  alt="Umana App programs and meal plans screens"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-3.webp"
                  alt="Umana App program screen"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-4.webp"
                  alt="Umana App class categories screens"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-5.webp"
                  alt="Umana App class and recipes screens"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-6.webp"
                  alt="Umana App live chat and profile screens"
                  fill
                  className="rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <div className="relative h-full w-full p-2 md:p-1">
                <Image
                  src="/images/projects/umana/umana-7.webp"
                  alt="Umana App user profile and achievements screens"
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
