"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  "Home",
  "About",
  "Team",
  "Events",
  "Our Archive",
  "Sponsor Us",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Rotaract Club Logo"
              width={40}
              height={40}
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-bold">Rotaract Club</span>
              <span className="text-xs text-muted-foreground">
                Galgotias Educational Institutions
              </span>
            </div>
          </Link>

          <nav className="ml-auto hidden md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replaceAll(" ", "-")}`
                }
              >
                <Button
                  variant={"linkHover2"}
                  className={cn(
                    "text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110 px-3",
                    {
                      "text-primary scale-110":
                        pathname ===
                        `/${item.toLowerCase().replaceAll(" ", "-")}`,
                    }
                  )}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                {NAV_LINKS.map((item, index) => (
                  <Link
                    key={index}
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replaceAll(" ", "-")}`
                    }
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button className="mt-4" onClick={() => setIsOpen(false)}>
                  Join Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
