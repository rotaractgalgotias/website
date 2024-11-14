"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const tenures = [
  {
    year: "2023-24",
    president: "John Doe",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    year: "2022-23",
    president: "Alice Johnson",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    year: "2021-22",
    president: "Charlie Brown",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    year: "2020-21",
    president: "Eva Green",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    year: "2019-20",
    president: "George Black",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function OurArchivePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Archive
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our journey through the years and the impact we&apos;ve made
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenures.map((tenure, index) => (
          <motion.div
            key={tenure.year}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/our-archive/${tenure.year}`} className="block h-full">
              <Card className="h-full flex flex-col overflow-hidden transition-transform duration-200 hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={tenure.image}
                    alt={`Tenure ${tenure.year}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{tenure.year}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>
                    <strong>President:</strong> {tenure.president}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
