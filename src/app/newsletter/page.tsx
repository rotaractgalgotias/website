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

export const revalidate = 60;
export default async function page() {
  const newslettes = await prisma.newsletter.findMany(
    {
      where: {
        year: {
          year: parseInt(process.env.CURRENT_YEAR!)
        }
      }
    }
  );

  if (newslettes.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-4">No Newsletters Available</h1>
        <p className="text-muted-foreground text-center max-w-md">
          We haven't published any newsletters for the current year yet. 
          Please check back later for updates.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Newsletter newsletters={newslettes} />
    </div>
  );
}
