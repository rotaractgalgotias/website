import { prisma } from "@/lib/prisma";
import Hero from "./_components/Hero";
import OurSponsors from "./_components/OurSponsors";
import Projects from "./_components/Projects";
export default async function Sponsor() {
  const projects = await prisma.event.findMany({
    where: {
      featured: true,
    },
  });
  return (
    <main>
      <Hero />
      <OurSponsors />
      <Projects projects={projects} />
    </main>
  );
}
