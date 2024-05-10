import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
  children: ReactNode;
}

export const SectionTitle: FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "rounded border-2 border-muted bg-primary px-2 py-1 font-mono text-3xl font-semibold tracking-wide text-background",
        className,
      )}
    >
      {children}
    </h2>
  );
};
