"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function OurArchivePage({
  tenures,
}: {
  tenures: {
    roles: {
      member: {
        name: string;
      };
    }[];
    id: string;
    year: number;
    imageUrl: string | null;
  }[];
}) {
  return (
    <MaxWidthWrapper className="py-6 lg:py-8">
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Archive
      </motion.h1>
      <motion.p
        className="text-muted-foreground text-center mb-8 lg:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our journey through the years and the impact we&apos;ve made
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tenures.map((tenure, index) => (
          <motion.div
            key={tenure.year}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              target="_blank"
              href={`https://${tenure.year}-${
                (tenure.year + 1) % 100
              }.rotaractgalgotias.org/`}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={tenure.imageUrl as string}
                    alt={`Tenure ${tenure.year}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tenure.year}
                  </h3>
                  <p className="text-white/80">
                    President:{" "}
                    <span className="text-primary-foreground font-medium">
                      Rtr. {tenure.roles[0]?.member?.name || "Unknown"}
                    </span>
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Archive
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
