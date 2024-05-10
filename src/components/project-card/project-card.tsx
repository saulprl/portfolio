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
        "relative flex w-full flex-col gap-2 overflow-hidden rounded-md border-muted bg-muted p-1",
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
  return (
    <CardContent
      className={cn("relative aspect-square w-full p-0", className)}
      {...props}
    />
  );
};

export const ProjectCardFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <CardFooter
      className={cn(
        "relative flex-col items-start gap-2 px-4 py-2 text-white",
        className,
      )}
      {...props}
    />
  );
};

export const ProjectCardFooterHighlight: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "absolute bottom-2 left-1 top-2 w-1 rounded-full bg-background",
        className,
      )}
      {...props}
    />
  );
};
