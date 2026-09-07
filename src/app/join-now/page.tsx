import React from "react";
import JoinForm from "./_components/JoinForm";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function page() {
  let colleges: any[] = [];
  let president: any = null;
  try {
    colleges = await prisma.college.findMany();
    president = await prisma.member.findFirst({
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
  } catch (error) {
    console.error("Failed to fetch join-now page data:", error);
  }
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
