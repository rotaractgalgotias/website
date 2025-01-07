"use client";

import { usePathname } from "next/navigation";
import React from "react";
import TopHeader from "../layout/TopHeader";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ScrollToTop from "../layout/ScrollToTop";
import TopLoader from "../loaders/TopLoader";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/join-now") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-dvh flex flex-col relative">
      <ScrollToTop />
      <TopLoader />
      <TopHeader />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
