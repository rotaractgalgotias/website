import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="w-full bg-primary text-primary-foreground text-sm">
      <MaxWidthWrapper>
        <div className="w-full flex items-center gap-3 justify-center h-10">
          <p>Visit our detailed page for more information about the club.</p>
          <Link href="#" className="font-medium underline underline-offset-4">
            Know More
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
