import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const SectionTitle: FC<Props> = ({ children, className, as = "h2" }) => {
  const Component = as;

  return (
    <Component
      className={cn(
        "rounded border-2 border-muted bg-primary px-2 py-1 text-center font-mono text-3xl font-semibold tracking-wide text-background",
        className,
      )}
    >
      {children}
    </Component>
  );
};
