import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export const Title: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <span className={cn("text-start", className)} {...props}>
    <h1 className="relative font-sans text-lg font-medium text-white after:absolute after:-bottom-1 after:left-0 after:w-2/5 after:rounded-full after:border-2 after:border-primary">
      saulprl&apos;s portfolio
    </h1>
  </span>
);
