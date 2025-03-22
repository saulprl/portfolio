import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  mono?: boolean;
  underline?: boolean;
}

export const H1: FC<Props> = ({
  mono = false,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(
        "text-3xl font-semibold",
        className,
        mono && "font-mono",
        underline && "underline",
      )}
    >
      {children}
    </h1>
  );
};

export const H2: FC<Props> = ({
  mono = false,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={cn(
        "text-xl font-semibold",
        className,
        mono && "font-mono",
        underline && "underline",
      )}
    >
      {children}
    </h2>
  );
};

export const H3: FC<Props> = ({
  mono = false,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <h3
      {...props}
      className={cn(
        "text-xl font-semibold",
        className,
        mono && "font-mono",
        underline && "underline",
      )}
    >
      {children}
    </h3>
  );
};
