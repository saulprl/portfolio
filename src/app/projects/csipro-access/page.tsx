import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { MonoHighlight } from "@/components/mono-highlight/mono-highlight";
import { SectionTitle } from "@/components/section-title/section-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import {
  SiDart,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export default function AccessPage() {
  return (
    <>
      <SectionTitle>CSI PRO ACCESS</SectionTitle>
      <p className="text-center">
        Fully featured security and access-control system.
      </p>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-col gap-1 rounded border-2 border-muted p-2">
          <SpecsTitle>Tech stack</SpecsTitle>
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
          <SpecsTitle>Additional technologies</SpecsTitle>
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
          <SpecsTitle>Period</SpecsTitle>
          <p>
            <b>February 2023</b> -{" "}
            <b>
              <i>Present</i>
            </b>
          </p>
        </div>
      </div>
      <div>
        <SpecsTitle>Project Background</SpecsTitle>
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
        {/* <SpecsTitle>First iteration</SpecsTitle>
        <p>
          <MonoHighlight>CSI PRO ACCESS</MonoHighlight>&apos; first iteration
          was built by a team that consisted of <b>Javier Chávez</b>,{" "}
          <b>Enrique Córdova</b>, <b>Mariel Cota</b>, <b>Brandon Pérez</b>, and{" "}
          <i>me</i>. We leveraged a microcontroller to build a keypad from
          scratch, as well as a <b>Raspberry Pi</b> to control the door&apos;s
          electric lock.
        </p>
        <p>
          My teammates were mainly involved in the hardware side of the project,
          while I focused more on the software. I leveraged my experience with{" "}
          <MonoHighlight>Firebase</MonoHighlight> and{" "}
          <MonoHighlight>Node.js</MonoHighlight> to build a{" "}
          <MonoHighlight>RESTful API</MonoHighlight> in order to securely
          interact with the database, which would store all user data such as
          name and access passcode.
        </p>
        <p>
          By the end of February 2023, we got the whole system working. It
          consisted of a <MonoHighlight>CLI</MonoHighlight> app I created for
          adding users, a <MonoHighlight>Next.js</MonoHighlight> app to display
          the access logs in real time, a script that validates the user input
          (running on the Raspberry Pi), and the{" "}
          <MonoHighlight>RESTful API</MonoHighlight> previously mentioned.
        </p> */}
        <SpecsTitle>How it works</SpecsTitle>
        <p>
          <MonoHighlight>CSI PRO ACCESS</MonoHighlight> consists of many
          different scripts and apps. Firstly, a{" "}
          <MonoHighlight>Python</MonoHighlight> script that handles the user
          input coming from a keypad and controls the door&apos;s electric lock.
          The script communicates with a <MonoHighlight>Node.js</MonoHighlight>{" "}
          RESTful API which, in turn, communicates with the{" "}
          <MonoHighlight>Firebase</MonoHighlight> services to validate the user
          input.
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
        <p>As the project grew, I decided to migrate the mobile experience to <MonoHighlight>React Native</MonoHighlight></p>
      </div>
      {/* <div className="flex w-full items-center justify-center rounded bg-muted md:p-2">
        <div className="relative aspect-square w-full md:w-1/2 md:max-w-2xl">
          <Image
            src="/images/projects/csipro-access/access-cover.png"
            alt="Cover image for CSI PRO ACCESS project card"
            fill
            className="fit-cover h-full w-full rounded"
          />
        </div>
      </div> */}
    </>
  );
}

const SpecsTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3 className={cn("font-mono text-lg font-semibold", className)} {...props}>
      {children}
    </h3>
  );
};
