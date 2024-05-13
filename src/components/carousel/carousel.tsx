"use client";

import { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react";

import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "../ui/carousel";
import { cn } from "@/lib/utils";

interface Props {
  orientation?: "horizontal" | "vertical";
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
}

export const Carousel: FC<Props> = ({
  className,
  orientation = "horizontal",
  children,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!api) return;

    setTotalSlides(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <ShadCarousel
      orientation={orientation}
      opts={{ loop: true }}
      setApi={setApi}
      className={cn("rounded bg-muted", className)}
    >
      <CarouselContent className="">{children}</CarouselContent>
      <div className="relative flex h-8 w-full items-center justify-center rounded-b bg-muted">
        <CarouselPrevious variant="default" className="left-0 rounded" />
        <span className="text-background">{`Slide ${currentSlide} of ${totalSlides}`}</span>
        <CarouselNext variant="default" className="right-0 rounded" />
      </div>
    </ShadCarousel>
  );
};
