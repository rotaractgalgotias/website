import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Newsletter from "./_components/NewsletterPage";

export const metadata: Metadata = {
  title: "Newsletter",
  openGraph: {
    description:
      "Explore our archive of past newsletters. Discover the impact we've made in our community over the years.",
  },
};

export const dynamic = "force-dynamic";

export default async function page() {
  let newslettes: any[] = [];
  try {
    newslettes = await prisma.newsletter.findMany();
  } catch (error) {
    console.error("Failed to fetch newsletters:", error);
  }

  return (
    <div>
      <Newsletter newsletters={newslettes} />
    </div>
  );
}
