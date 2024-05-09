import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardFooter } from "../ui/card";

export const ProjectCard: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "relative flex w-full flex-col gap-4 overflow-hidden rounded-md border-muted bg-muted p-1",
        className,
      )}
      {...props}
    />
  );
};

export const ProjectCardContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <CardContent className={cn("h-72 p-0", className)} {...props} />;
};

export const ProjectCardFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <CardFooter
      className={cn(
        "flex-col items-start gap-2 px-4 pb-2 text-white",
        className,
      )}
      {...props}
    />
  );
};
