import { Metadata } from "next";
import React from "react";
import OurArchivePage from "./_components/Archive";

export const metadata: Metadata = {
  title: "Our Archive",
  openGraph: {
    description:
      "Explore our archive of past events, projects, and activities. Discover the impact we've made in our community over the years.",
  },
};

export default function page() {
  return (
    <div>
      <OurArchivePage />
    </div>
  );
}
