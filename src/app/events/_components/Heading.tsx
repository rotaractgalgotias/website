"use client";

import React from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function Heading() {
  return (
    <MaxWidthWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-1 lg:space-y-6"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
        >
          Our Events
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          We organize a variety of fundraising activities, community service
          projects, and professional development workshops throughout the year.
          Join us in creating meaningful impact in our community.
        </motion.p>
      </motion.div>
    </MaxWidthWrapper>
  );
}
