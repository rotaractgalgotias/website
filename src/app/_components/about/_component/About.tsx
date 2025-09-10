"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Briefcase,
  BookOpen,
  Globe,
  Camera,
  Share2,
  Radio,
  Laptop,
  Mic2,
  Wrench,
  UserPlus,
  Computer,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { LucideIcon } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export interface Domain {
  icon: LucideIcon;
  title: string;
  description: string;
  activities: string[];
}

export const domains: Domain[] = [
  {
    icon: Users,
    title: "Community Services",
    description: "Lead initiatives that make a direct impact in local communities through service and outreach programs.",
    activities: [
      "Organize cleanliness drives",
      "Host community health camps",
      "Distribute essential supplies"
    ]
  },
  {
    icon: Globe,
    title: "International Services",
    description: "Foster global understanding through international collaboration and cultural exchange.",
    activities: [
      "Coordinate global Rotaract collaborations",
      "Promote cultural exchange",
      "Support international causes"
    ]
  },
  {
    icon: Share2,
    title: "Public Relations",
    description: "Enhance the club's visibility and reputation through strategic communication and media outreach.",
    activities: [
      "Manage public image",
      "Write press releases",
      "Handle external communications"
    ]
  },
  {
    icon: BookOpen,
    title: "Literary Services",
    description: "Encourage literary expression and intellectual engagement through various activities.",
    activities: [
      "Host debates and quizzes",
      "Organize writing competitions",
      "Conduct reading circles"
    ]
  },
  
  {
    icon: UserPlus,
    title: "Club Services",
    description: "Facilitate smooth internal functioning and foster fellowship within the club.",
    activities: [
      "Organize member induction",
      "Host internal events",
      "Maintain club harmony"
    ]
  },
  {
    icon: Users,
    title: "Management Services",
    description: "Oversee planning and implementation of club projects and ensure operational excellence.",
    activities: [
      "Supervise logistics",
      "Monitor event timelines",
      "Coordinate with service chairs"
    ]
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description: "Empower members through career-oriented workshops, seminars, and industry exposure.",
    activities: [
      "Host skill-building sessions",
      "Organize internships and networking",
      "Conduct mentorship programs"
    ]
  },
  {
    icon: Mic2,
    title: "Performing Arts",
    description: "Promote creativity through cultural performances and artistic expression.",
    activities: [
      "Organize dance and music events",
      "Coordinate talent shows",
      "Promote art-based outreach"
    ]
  },
  {
    icon: Radio,
    title: "Social Media Services",
    description: "Engage audiences and promote the club's work on social platforms.",
    activities: [
      "Create and schedule posts",
      "Run awareness campaigns",
      "Analyze social engagement"
    ]
  },
  {
    icon: Wrench,
    title: "Technical Services",
    description: "Support all tech-based operations and ensure smooth event execution with digital tools.",
    activities: [
      "Maintain tech infrastructure",
      "Provide event tech support",
      "Develop internal tools"
    ]
  },
  {
    icon: Computer,
    title: "Media Services",
    description: "Create and distribute engaging visual content to promote the club's initiatives and activities.",
    activities: [
      "Create and distribute engaging visual content",
      "Promote the club's initiatives and activities",
      "Create and distribute engaging visual content"
    ]
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <MaxWidthWrapper className="py-2 space-y-2 lg:py-6 lg:space-y-6">
        <motion.div variants={fadeIn}>
          <Card className="border-none bg-background/50 shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mx-auto max-w-3xl text-muted-foreground">
                At Rotaract Galgotias, we strive to create a better world
                through volunteerism, community service, and professional
                development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/council.jpg"
              alt="Rotaract Club Logo"
              width={400}
              height={400}
              className="h-auto w-full max-w-md"
              priority
            />
          </motion.div>
          <Card className="border-none bg-background/50 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                At Rotaract Galgotias, we function as a service-oriented
                organization that strives to create a better world through
                volunteerism, community service, and professional development.
                We are a part of the global network of Rotaract clubs sponsored
                by Rotary International, which gives us access to a wealth of
                resources and opportunities for growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Parent Club Section */}
        <motion.div
          variants={fadeIn}
          className="grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <Card className="border-none bg-background/50 shadow-none order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                Parent Club
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Rotary Club of Delhi SouthEnd proudly serves as the Parent
                Club of the Rotaract Club of Galgotias Educational Institutions.
                Through this partnership, we nurture and support the young
                leaders of the Rotaract Club, empowering them to create a
                positive impact in their community and beyond. Together, we work
                hand in hand to foster a spirit of service, fellowship, and
                social responsibility, making a meaningful difference in the
                lives of those we touch. Through collaborative efforts and
                shared values, we aim to build a better future and inspire a new
                generation of compassionate change-makers.
              </p>
            </CardContent>
          </Card>
          <motion.div
            className="flex justify-center lg:order-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/about/rotary.jpeg"
              alt="Rotary District Logo"
              width={400}
              height={400}
              className="h-auto w-full max-w-md rounded-lg"
            />
          </motion.div>
        </motion.div>

        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Our Domains</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work across 12 distinctive domains to attain our common goal of
              Service above Self, exploring the power of teamwork and providing
              humanitarian aid.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <domain.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">{domain.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {domain.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                  <Link href={`/about/domains/${domain.title.toLowerCase().replace(/\s+/g, "-")}`} prefetch>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary hover:underline"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
