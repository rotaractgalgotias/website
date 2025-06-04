import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await prisma.event.findMany({
    select: {
      slug: true,
    },
    where: {
      year: {
        year: currentYear,
      },
    },
  });
  return [
    {
      url: "https://rotaractgalgotias.org/",
      lastModified: new Date(),
    },
    {
      url: "https://rotaractgalgotias.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://rotaractgalgotias.org/contact-us",
      lastModified: new Date(),
    },
    {
      url: "https://rotaractgalgotias.org/team",
      lastModified: new Date(),
    },
    {
      url: "https://rotaractgalgotias.org/events",
      lastModified: new Date(),
    },
    {
      url: "https://rotaractgalgotias.org/our-archive",
      lastModified: new Date(),
    },
    {
      url: "https://rotaractgalgotias.org/sponsor-us",
      lastModified: new Date(),
    },
    ...events.map((event) => ({
      url: `https://rotaractgalgotias.org/events/${event.slug}`,
      lastModified: new Date(),
    })),
  ];
}
