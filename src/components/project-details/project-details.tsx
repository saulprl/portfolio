import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const ProjectDetails: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-2 md:flex-row-reverse md:items-start",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const ProjectDescriptionSection: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("flex basis-2/3 flex-col gap-2", className)} {...props}>
      {children}
    </div>
  );
};
