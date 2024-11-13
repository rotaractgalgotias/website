import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <section className="w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center lg:-my-6">
        {PARTNER_LOGOS.map((i, index) => (
          <Link
            href={i.href || "#"}
            key={index}
            className="flex items-center justify-center relative w-full h-16"
          >
            <Image
              src={i.src}
              alt={i.alt}
              //   width={i.width}
              //   height={i.height}
              fill
              title={i.title}
              className="opacity-70 hover:opacity-100 transition-opacity object-contain scale-90 lg:scale-100"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
