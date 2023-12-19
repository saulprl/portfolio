import Link from "next/link";

import { SocialLink } from "../social-link/social-link";
import { Button } from "../ui/button";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Contact: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex w-fit overflow-hidden rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      <Button asChild className="rounded-l-full bg-transparent sm:text-base">
        <Link href="mailto:saulramos378@gmail.com">Contact me</Link>
      </Button>
      <SocialLink variant="github" />
      <SocialLink variant="linkedin" />
      <SocialLink variant="email" />
    </div>
  );
};
