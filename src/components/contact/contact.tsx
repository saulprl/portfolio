import Link from "next/link";
import { SocialLink } from "../social-link/social-link";
import { Button } from "../ui/button";
import { FC } from "react";
import { SocialArray } from "@/payload/collections/page";

interface Props {
  socials?: SocialArray;
}

export const Contact: FC<Props> = ({ socials }) => {
  return (
    <div className="flex w-fit overflow-hidden rounded-full bg-muted">
      <Button asChild className="rounded-l-full bg-muted sm:text-base">
        <Link
          href={
            socials?.find(({ social }) => social.socialNetwork === "email")
              ?.social.url ?? "mailto://saulramos378@gmail.com"
          }
        >
          Contact me
        </Link>
      </Button>
      {socials?.map(({ social: { id, socialNetwork } }) => (
        <SocialLink key={id} variant={socialNetwork.toLowerCase()} />
      ))}
    </div>
  );
};
