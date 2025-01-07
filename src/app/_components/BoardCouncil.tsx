"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MemberType, Position } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function BoardCouncil({
  members,
}: {
  members: {
    roles: {
      memberType: MemberType;
      position: Position;
      id: string;
      yearId: string;
      memberId: string;
    }[];
    id: string;
    name: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // Shuffle all members except council members
  const shuffledMembers = members
    .filter((member) => member.roles[0].memberType !== "COUNCIL")
    .sort(() => Math.random() - 0.5);

  const slicedMembers = shuffledMembers.slice(0, 10);

  // Filter only council members
  const councilMembers = members.filter(
    (member) => member.roles[0].memberType === "COUNCIL"
  );

  return (
    <section className="w-full">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Board Council 2024-25
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12"
      >
        {councilMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex flex-col items-center text-center"
          >
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={member.imageUrl} alt={member.name} />
              <AvatarFallback>{member.name.split(" ")[0]}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">Rtr. {member.name}</h3>
            <p className="text-sm text-muted-foreground">
              {member.roles[0].position.replaceAll("_", " ")}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex -space-x-4"
        >
          {slicedMembers.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
            >
              <Avatar className="w-10 h-10 border-2 border-background z-10">
                <AvatarImage
                  src={shuffledMembers[i].imageUrl}
                  alt={`Team member ${i + 1}`}
                />
                <AvatarFallback>
                  {shuffledMembers[i].name.split(" ")[0]}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-sm z-20"
          >
            +{shuffledMembers.length - slicedMembers.length}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link href={"/team"}>
            <Button variant="link" className="text-primary">
              View Full RcGEI Team
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
