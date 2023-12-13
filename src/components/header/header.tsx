"use client";

import { IoMenu } from "react-icons/io5";

import { Sheet, SheetContent, SheetPortal, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Navbar } from "../navbar/navbar";

export const Header = () => {
  return (
    <Sheet>
      <header className="sticky top-0 z-50 w-full bg-muted">
        <div className="container relative flex h-14 max-w-5xl items-center justify-between gap-8 md:justify-start">
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-2xl text-white hover:bg-primary md:hidden"
            >
              <IoMenu />
            </Button>
          </SheetTrigger>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-sans text-lg font-medium text-white md:static md:translate-x-0 md:translate-y-0">
            saulprl&apos;s portfolio
          </h1>
          <div className="flex flex-grow" />
          <div className="hidden md:inline-flex">
            <Navbar />
          </div>
        </div>
      </header>
      <SheetPortal>
        <SheetContent side="left">
          <Navbar orientation="vertical" />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
