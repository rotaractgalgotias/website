"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MotionCard = motion(Card);

export default function EventCard({
  event,
  index,
}: {
  event: {
    title: string;
    id: string;
    slug: string;
    coverImage: string;
    description: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    yearId: string;
    location: string;
    numberOfVolunteers: number | null;
    peopleImpacted: number | null;
    duration: number | null;
  };
  index: number;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <MotionCard
      key={event.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="overflow-hidden group cursor-pointer h-full"
    >
      <Link href={`/events/${event.slug}`} prefetch>
        <div className="relative aspect-square">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <p className="text-sm opacity-90 mb-2 line-clamp-1">
              {event.description}
            </p>
            <div className="flex items-center text-sm opacity-75">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{event.date.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    </MotionCard>
  );
}
