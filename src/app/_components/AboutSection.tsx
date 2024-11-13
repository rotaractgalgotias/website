import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 items-center">
      <Image
        src="/about_image.jpg"
        alt="Community service activity"
        width={600}
        height={400}
        className="rounded-lg object-cover"
      />
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">About Us</h2>
        <p className="text-muted-foreground">
          We are the Rotaract Club of Galgotias Educational Institutions,
          dedicated to creating positive change in our community through
          volunteerism, community service, and professional development. Join us
          to empower young professionals, promote peace, eradicate poverty,
          support education, improve health, protect the environment, develop
          leadership skills, and make a tangible impact.
        </p>
        <ul className="space-y-4 text-muted-foreground">
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
        </ul>
        <Button variant="linkHover2">Learn More About Us</Button>
      </div>
    </section>
  );
}
