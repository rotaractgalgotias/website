import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";
import { allPositions } from "@/utils/positions";
import { Position } from "@prisma/client";
import Link from "next/link";
import React from "react";

export default async function BoardCouncil() {
  // Fetch all members from the database
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

  // Shuffle all members except council members
  const shuffledMembers = sortedMembers
    .filter((member) => member.roles[0].memberType !== "COUNCIL")
    .sort(() => Math.random() - 0.5);

  const slicedMembers = shuffledMembers.slice(0, 10);

  // Filter only council members
  const councilMembers = sortedMembers.filter(
    (member) => member.roles[0].memberType === "COUNCIL"
  );

  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-center mb-12">
        Board Council 2024-25
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
        {councilMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={member.imageUrl} alt={member.name} />
              <AvatarFallback>{member.name.split(" ")[0]}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{member.name}</h3>
            <p className="text-sm text-muted-foreground">
              {member.roles[0].position}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex -space-x-4">
          {slicedMembers.map((_, i) => (
            <Avatar
              key={i}
              className="w-10 h-10 border-2 border-background z-10"
            >
              <AvatarImage
                src={shuffledMembers[i].imageUrl}
                alt={`Team member ${i + 1}`}
              />
              <AvatarFallback>
                {shuffledMembers[i].name.split(" ")[0]}
              </AvatarFallback>
            </Avatar>
          ))}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-sm z-20">
            +{shuffledMembers.length - slicedMembers.length}
          </div>
        </div>
        <Link href={"/team"}>
          <Button variant="link" className="text-primary">
            View Full RcGEI Team
          </Button>
        </Link>
      </div>
    </section>
  );
}
