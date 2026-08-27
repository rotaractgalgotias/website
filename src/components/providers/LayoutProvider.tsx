"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import TopLoader from "../loaders/TopLoader";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noLayoutPages = ["/join-now", "/sustainability-hackathon"];
  if (noLayoutPages.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col relative">
      {/* <ScrollToTop /> */}
      <TopLoader />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
