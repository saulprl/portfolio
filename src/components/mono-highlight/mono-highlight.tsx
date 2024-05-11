import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export const MonoHighlight: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "rounded bg-primary/20 px-0.5 font-mono font-medium",
        className,
      )}
      {...props}
    ></span>
  );
};
