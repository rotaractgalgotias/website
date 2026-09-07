import { prisma } from "@/lib/prisma";
import Hero from "./_components/Hero";
import OurSponsors from "./_components/OurSponsors";
import Projects from "./_components/Projects";
export const dynamic = "force-dynamic";

export default async function Sponsor() {
  let projects: any[] = [];
  try {
    projects = await prisma.event.findMany({
      where: {
        featured: true,
      },
    });
  } catch (error) {
    console.error("Failed to fetch featured projects:", error);
  }
  return (
    <main>
      <Hero />
      <OurSponsors />
      <Projects projects={projects} />
    </main>
  );
}
