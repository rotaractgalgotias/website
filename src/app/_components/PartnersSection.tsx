"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PARTNER_LOGOS = [
  {
    href: "https://www.rotary.org/en",
    height: 100,
    width: 170,
    title: "Rotary International",
    alt: "Rotary International",
    src: "/logos/rotary.png",
  },
  {
    href: "https://www.rotary.org/en/get-involved/rotaract-clubs",
    height: 120,
    width: 230,
    title: "Rotaract",
    alt: "Rotaract",
    src: "/logos/rotaract.png",
  },
  {
    height: 120,
    width: 145,
    title: "Rotary Theme",
    alt: "Rotary Theme",
    src: "/logos/MagicIcon.png",
  },
  {
    height: 90,
    width: 90,
    title: "Galgotias Educational Institutions",
    alt: "Galgotias Educational Institutions",
    src: "/logos/galgotia.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full -my-2 lg:-my-10">
      <motion.div
        className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {PARTNER_LOGOS.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={logo.href || "#"}
              className="flex items-center justify-center relative w-full h-16"
            >
              <motion.div
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              // transition={{ type: "spring", stiffness: 400, damping: 100 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  title={logo.title}
                  className="object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
