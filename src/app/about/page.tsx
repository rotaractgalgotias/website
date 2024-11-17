import { Metadata } from "next";
import React from "react";
import AboutUs from "./_component/About";

export const metadata: Metadata = {
  title: "About Us",
  openGraph: {
    description:
      "Learn more about Rotaract Galgotias, our mission, and the various domains we work in to create a positive impact in our community.",
  },
};

export default function page() {
  return <AboutUs />;
}
