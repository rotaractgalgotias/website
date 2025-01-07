import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="w-full bg-primary text-primary-foreground text-xs xl:text-sm">
      <MaxWidthWrapper>
        <div className="w-full flex items-center gap-3 justify-center h-10">
          <p>Visit our detailed page for more information about the club.</p>
          <Link
            href="/about"
            prefetch
            className="font-medium underline underline-offset-4 hidden lg:block"
          >
            Know More
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
