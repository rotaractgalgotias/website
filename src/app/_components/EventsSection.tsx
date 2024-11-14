"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon, LightbulbIcon } from "lucide-react";
import React from "react";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const EVENTS_IMAGES = [
  {
    image: "/cover/nandotsav.jpg",
  },
  {
    image: "/cover/antarang.jpg",
  },
  {
    image: "/cover/chaav20.jpg",
  },
];

export default function EventsSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          className="space-y-6 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Events
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We do events which not only bring the community together but also
            strive to create a lasting impact. From fundraising initiatives to
            awareness campaigns, our events aim to inspire change, foster
            collaboration, and address pressing social issues. We believe in the
            power of collective action and the potential of each individual to
            make a difference. Join us in our events and be a part of the
            positive transformation we seek to create in our society.
          </motion.p>
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card>
                <CardContent className="p-6 space-y-2">
                  <CalendarIcon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">View All Events</h3>
                  <p className="text-sm text-muted-foreground">
                    We organize a variety of events throughout the year. Check
                    out our calendar to see what&apos;s coming up next.
                  </p>
                  <Button variant="link" className="p-0">
                    All Events
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card>
                <CardContent className="p-6 space-y-2">
                  <LightbulbIcon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Suggest an Event</h3>
                  <p className="text-sm text-muted-foreground">
                    We are always open to new ideas and suggestions. If you have
                    an idea for an event, please let us know.
                  </p>
                  <Button variant="link" className="p-0">
                    Contact us
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <Carousel
            className="w-full h-[inherit]"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {EVENTS_IMAGES.map((image, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="p-1 relative h-80 lg:h-[30rem]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src={image.image}
                      alt={image.image}
                      fill
                      className="rounded-lg object-cover w-full"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
