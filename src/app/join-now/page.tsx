import React from "react";
import JoinForm from "./_components/JoinForm";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";

export default async function page() {
  const colleges = await prisma.college.findMany();
  const president = await prisma.member.findFirst({
    where: {
      roles: {
        some: {
          position: "PRESIDENT",
          year: {
            year: currentYear,
          },
        },
      },
    },
    select: {
      name: true,
    },
  });
  return (
    <JoinForm
      colleges={colleges}
      president={
        president ?? {
          name: "President",
        }
      }
    />
  );
}
