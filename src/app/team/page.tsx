import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";
import { allPositions } from "@/utils/positions";
import { Position } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Team",
  openGraph: {
    description:
      "Meet the dedicated team members of Rotaract Galgotias who are committed to making a difference through various initiatives and projects.",
  },
};

export default async function TeamPage() {
  const councilPromise = prisma.member.findMany({
    where: {
      roles: {
        some: {
          memberType: "COUNCIL",
          year: {
            year: currentYear,
          },
        },
      },
    },
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

  const directorPromise = prisma.member.findMany({
    where: {
      roles: {
        every: {
          year: {
            year: currentYear,
          },
          memberType: "DIRECTOR",
        },
      },
    },
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

  const [council, director] = await Promise.all([
    councilPromise,
    directorPromise,
  ]);

  const sortedCouncil = council.sort((a, b) => {
    const order = ["COUNCIL", "DIRECTOR", "COORDINATOR", "MEMBER"];
    const typeComparison =
      order.indexOf(a.roles[0].memberType ?? "") -
      order.indexOf(b.roles[0].memberType ?? "");
    if (typeComparison !== 0) return typeComparison;

    if (
      (a.roles[0].memberType ?? "") === "COUNCIL" &&
      (b.roles[0].memberType ?? "") === "COUNCIL"
    ) {
      return (
        allPositions.indexOf(a.roles[0].position as Position) -
        allPositions.indexOf(b.roles[0].position as Position)
      );
    }

    return 0;
  });

  const teamHierarchy = [
    { title: "Board Council", members: council },
    { title: "Board of Directors", members: director },
  ];
  return (
    <div className="min-h-screen bg-background">
      <MaxWidthWrapper className="py-6 lg:py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Team 2025-26</h1>
            <p className="text-muted-foreground mb-6">
              Rotaract Galgotias follows a hierarchical system where the college
              year determines the roles and responsibilities of its members. The
              core council comprises final year students, while directors are
              selected from the third year students. Second year students, on
              the other hand, actively contribute as coordinators.
            </p>
            <div className="my-12">
              <h2 className="text-2xl font-semibold mb-4">Team Hierarchy</h2>
              <div className="space-y-4">
                {teamHierarchy.map((section) => (
                  <div
                    key={section.title}
                    className="flex flex-col lg:flex-row lg:items-center justify-start space-y-3 space-x-2"
                  >
                    <p className="font-medium w-40">{section.title}</p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {section.members.slice(0, 7).map((member, index) => (
                        <Avatar
                          key={index}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
                        >
                          <AvatarImage
                            src={member.imageUrl}
                            alt={member.name}
                            className="object-cover object-center"
                          />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {section.members.length > 7 && (
                        <Avatar className="inline-block h-10 w-10 rounded-full ring-2 ring-background">
                          <AvatarFallback>
                            +{section.members.length - 7}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-0">
              <Image
                src={"/about_image1.jpg"}
                alt="Rotaract Club Team 2024-25"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mb-12" id="boardCouncil">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Board Council
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {sortedCouncil.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="size-28 lg:size-32 mx-auto mb-2">
                  <AvatarImage
                    src={member.imageUrl}
                    alt={member.name}
                    className="object-cover object-center"
                  />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-sm">Rtr. {member.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {member.roles[0].position.replaceAll("_", " ")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div id="boardOfDirectors">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Board Of Directors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {Object.entries(
              director.reduce((acc, member) => {
                const position = member.roles[0].position;
                if (!acc[position]) {
                  acc[position] = [];
                }
                acc[position].push(member);
                return acc;
              }, {} as Record<string, typeof director>)
            ).map(([position, members]) => (
              <React.Fragment key={position}>
                {members.map((member, memberIndex) => (
                  <div key={memberIndex} className="text-center">
                    <Avatar className="size-28 lg:size-32 mx-auto mb-2">
                      <AvatarImage
                        src={member.imageUrl}
                        alt={member.name}
                        className="object-cover object-center"
                      />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-medium text-sm">Rtr. {member.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {member.roles[0].position.replaceAll("_", " ")}
                    </p>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
