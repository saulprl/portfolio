import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { ToolCard, ToolIcon } from "../tool-card/tool-card";

interface Props extends HTMLAttributes<HTMLDivElement> {
  contentClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Chip: FC<Props> = ({
  children,
  className,
  contentClassName,
  ...props
}) => {
  return (
    <ToolCard
      className={cn("w-auto select-none rounded-full", className)}
      contentClassName={cn("gap-2 p-1 pr-4", contentClassName)}
      {...props}
    >
      {children}
    </ToolCard>
  );
};

export const ChipIcon: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <ToolIcon className={cn("text-base md:text-sm", className)} {...props} />
  );
};

export const ChipLabel: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        "font-mono text-sm font-semibold tracking-wide text-background",
      )}
      {...props}
    ></p>
  );
};
