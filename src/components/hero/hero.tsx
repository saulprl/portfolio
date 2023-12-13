import { FC } from "react";
import { Contact } from "../contact/contact";
import Image from "next/image";
import { Media } from "@/payload/collections/media";
import { Section } from "../section/section";
import { Social } from "@/payload/collections/social";
import { Page, SocialArray } from "@/payload/collections/page";

interface Props {
  image?: Media;
  socials?: SocialArray;
}

export const Hero: FC<Props> = ({ image, socials }) => {
  return (
    <Section>
      <div className="flex w-full flex-col justify-center gap-4 rounded-md border-2 border-muted p-4 text-center md:text-start">
        <h1 className="text-3xl font-medium">
          Hello, my name is <strong className="text-primary">Saúl</strong> and
          I&apos;m a{" "}
          <span className="bg-accent font-mono font-bold text-white">
            software developer
          </span>
        </h1>
        <h2 className="">
          I&apos;m a passionate learner and enjoy making a positive impact in
          people through software development
        </h2>
        <div className="flex flex-grow" />
        <div className="flex w-full items-center justify-center md:justify-start">
          <Contact socials={socials} />
        </div>
      </div>
      <div className="relative flex h-80 overflow-hidden rounded-md">
        <Image
          src={image?.url ?? ""}
          alt={image?.title ?? "Hero image placeholder"}
          fill
          className="object-cover"
        />
      </div>
    </Section>
  );
};
