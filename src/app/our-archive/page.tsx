import { Metadata } from "next";
import OurArchivePage from "./_components/Archive";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Archive",
  openGraph: {
    description:
      "Explore our archive of past events, projects, and activities. Discover the impact we've made in our community over the years.",
  },
};

export const dynamic = "force-dynamic";

export default async function page() {
  let years: any[] = [];
  try {
    years = await prisma.year.findMany({
      include: {
        roles: {
          where: {
            position: "PRESIDENT",
          },
          select: {
            member: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        year: {
          not: currentYear,
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch archive years:", error);
  }

  // write a function to convert 2024 to 2024-
  return (
    <div>
      <OurArchivePage tenures={years} />
    </div>
  );
}
