import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Title: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Link href="/">
    <span className={cn("text-start", className)} {...props}>
      <span className="relative font-sans text-lg font-medium text-white after:absolute after:-bottom-1 after:left-0 after:w-2/5 after:rounded-full after:border-2 after:border-primary after:transition-all after:duration-700 after:ease-in-out after:hover:w-4/5 after:focus:w-4/5">
        saulprl&apos;s portfolio
      </span>
    </span>
  </Link>
);
