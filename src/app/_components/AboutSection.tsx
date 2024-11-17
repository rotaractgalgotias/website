"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Image
          src="/about_image.jpg"
          alt="Community service activity"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </motion.div>
      <motion.div
        className="space-y-6 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold tracking-tighter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We are the Rotaract Club of Galgotias Educational Institutions,
          dedicated to creating positive change in our community through
          volunteerism, community service, and professional development. Join us
          to empower young professionals, promote peace, eradicate poverty,
          support education, improve health, protect the environment, develop
          leadership skills, and make a tangible impact.
        </motion.p>
        <motion.ul
          className="space-y-4 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Engaged in volunteerism, community service, and professional
            development.
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Focus on empowering young professionals, promoting peace,
            eradicating poverty, supporting education, improving health, and
            protecting the environment.
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Opportunities to develop leadership skills and make a tangible
            impact.
          </li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href={"/about"}>
            <Button variant="linkHover2">Learn More About Us</Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
