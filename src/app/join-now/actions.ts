"use server";

import { prisma } from "@/lib/prisma";

export const addNewMember = async ({
  data,
}: {
  data: {
    collegeId: string | null;
    membershipType: string;
    agreeToTerms: boolean;
    email: string;
    name: string;
    year: string;
    branch: string;
    whatsappNumber: string;
    callingNumber: string;
    referral: string;
  };
}) => {
  try {
    await prisma.member.create({
      data: {
        college: {
          connect: {
            id: data.collegeId ?? undefined,
          },
        },
        membershipType: data.membershipType,
        email: data.email,
        name: data.name,
        year: data.year,
        branch: data.branch,
        whatsappNumber: data.whatsappNumber,
        phone: data.callingNumber,
        referralSource: data.referral,
        verified: false,
        imageUrl: "/user.png",
      },
    });
    return {
      success: true,
      message:
        "Registration successful. Please check your email for further instructions.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
};
