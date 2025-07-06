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
      roles: {
        some: {
          position: "PRESIDENT",
        },
      },
    },
  });

  console.log(years);

  // Filter out years that don't have any PRESIDENT roles with valid members
  const filteredYears = years.filter((year) => 
    year.roles.length > 0 && 
    year.roles[0]?.member?.name
  );

  console.log("filtered years", filteredYears);

  return (
    <div>
      <OurArchivePage tenures={filteredYears} />
    </div>
  );
}
