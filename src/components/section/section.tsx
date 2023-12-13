import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export const Section: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-2",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
