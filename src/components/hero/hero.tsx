import Image from "next/image";

import { Contact } from "../contact/contact";
import { Section } from "../section/section";

export const Hero = () => {
  return (
    <Section>
      <div className="flex w-full flex-col justify-center gap-6 rounded-md border-2 border-muted p-4 text-center md:text-start">
        <h1 className="text-3xl font-medium">
          Hello, my name is{" "}
          <strong className="font-mono text-primary">Saúl</strong> and I&apos;m
          a{" "}
          <span className="bg-primary font-mono font-bold text-background">
            software developer
          </span>
        </h1>
        <hr className="mx-auto w-2/3 rounded-full border-2 border-primary md:mx-0 md:w-2/5" />
        <p>
          I&apos;m a passionate learner and enjoy making a positive impact in
          people through software development
        </p>
        <div className="flex flex-grow" />
        <div className="flex w-full items-center justify-center md:justify-start">
          <Contact />
        </div>
      </div>
      <div className="relative flex h-80 overflow-hidden rounded-md bg-muted p-2">
        <Image
          src="/images/csipro-access-conf.jpg"
          alt="Saúl Ramos at Encuentro Nacional en ISI 2023"
          fill
          className="object-cover"
        />
      </div>
    </Section>
  );
};
