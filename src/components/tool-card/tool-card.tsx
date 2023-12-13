import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "../ui/card";

export const ToolCard: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "relative w-full overflow-hidden rounded-sm border-muted bg-muted",
        className,
      )}
      {...props}
    >
      <CardContent
        className={cn("flex flex-row items-center gap-4 p-2", className)}
        {...props}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export const ToolIcon: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-white p-2 text-2xl text-muted",
        className,
      )}
      {...props}
    />
  );
};

export const ToolTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h3 className="font-sans text-2xl font-bold tracking-wide text-white">
      {children}
    </h3>
  );
};
