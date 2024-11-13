import Image from "next/image";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";

const NAV_LINKS = [
  "Home",
  "About",
  "Team",
  "Events",
  "Past Teams",
  "Sponsor Us",
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <div className="w-full flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Rotaract Galgotias Logo"
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
          <nav className="ml-auto flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replaceAll(" ", "-")}`}
              >
                <Button
                  variant={"linkHover2"}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3"
                >
                  {item}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
