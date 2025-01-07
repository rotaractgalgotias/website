import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import HeroSection from "./_components/HeroSection";
import PartnersSection from "./_components/PartnersSection";
import { Separator } from "@/components/ui/separator";
import AboutSection from "./_components/AboutSection";
import EventsSection from "./_components/EventsSection";
import BoardCouncil from "./_components/BoardCouncil";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";
import { allPositions } from "@/utils/positions";
import { Position } from "@prisma/client";

export default async function Home() {
  const members = await prisma.member.findMany({
    include: {
      roles: {
        where: {
          year: {
            year: currentYear,
          },
        },
      },
    },
    where: {
      roles: {
        every: {
          year: {
            year: currentYear,
          },
        }
      }
    }
  });
  // Sort members by their position and type
  const sortedMembers = members.sort((a, b) => {
    const order = ["COUNCIL", "DIRECTOR", "COORDINATOR", "MEMBER"];
    const typeComparison =
      order.indexOf(a.roles[0].memberType) -
      order.indexOf(b.roles[0].memberType);
    if (typeComparison !== 0) return typeComparison;

    if (
      a.roles[0].memberType === "COUNCIL" &&
      b.roles[0].memberType === "COUNCIL"
    ) {
      return (
        allPositions.indexOf(a.roles[0]?.position as Position) -
        allPositions.indexOf(b.roles[0]?.position as Position)
      );
    }

    return 0;
  });
  return (
    <main className="min-h-dvh w-full space-y-8 lg:space-y-16 py-8 lg:py-16">
      <div>
        <MaxWidthWrapper>
          <HeroSection />
        </MaxWidthWrapper>
      </div>
      <Separator />
      <div>
        <MaxWidthWrapper>
          <PartnersSection />
        </MaxWidthWrapper>
      </div>
      <Separator />
      <div>
        <MaxWidthWrapper>
          <AboutSection />
        </MaxWidthWrapper>
      </div>
      <div>
        <MaxWidthWrapper>
          <EventsSection />
        </MaxWidthWrapper>
      </div>
      <Separator />
      <div>
        <MaxWidthWrapper>
          <BoardCouncil members={sortedMembers} />
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
