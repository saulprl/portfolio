import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export const TechSummary: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1 rounded border-2 border-muted p-2 md:basis-1/3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
