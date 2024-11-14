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

export default async function page() {
  const years = await prisma.year.findMany({
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

  // write a function to convert 2024 to 2024-
  return (
    <div>
      <OurArchivePage tenures={years} />
    </div>
  );
}
