import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";
import EventCard from "./_components/EventCard";
import Heading from "./_components/Heading";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    where: {
      year: {
        year: currentYear,
      },
    },
    orderBy: {
      date: "desc",
    },
  });
  return (
    <div className="min-h-screen bg-background py-8 space-y-8 lg:space-y-12 lg:py-12">
      <Heading />
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
