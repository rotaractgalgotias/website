"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 items-center">
      <motion.div
        className="w-full space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Committed to making a positive impact in our community.
        </motion.h1>
        <motion.p
          className="text-base text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          At Rotaract Galgotias, we function as a service-oriented organization
          that strives to create a better world through volunteerism, community
          service, and professional development.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/join-now">
            <Button variant={"shine"}>
              Join Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline">Know More</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="p-0 aspect-video">
            <motion.div
              className="relative w-full h-full bg-muted rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <YoutubeIcon className="w-12 h-12 text-muted-foreground" />
              <span className="sr-only">Watch our introduction video</span>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
