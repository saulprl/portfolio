import { FC, HTMLAttributes } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { cn } from "@/lib/utils";

export const ProjectCard: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "relative w-fit overflow-hidden border-muted bg-primary",
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
  return <CardContent className={cn("p-0", className)} {...props} />;
};

export const ProjectCardFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <CardFooter
      className={cn(
        "absolute bottom-0 left-0 right-0 flex-col items-start gap-2 bg-gradient-to-t from-muted px-4 pb-4 pt-8 text-white",
        className,
      )}
      {...props}
    />
  );
};
