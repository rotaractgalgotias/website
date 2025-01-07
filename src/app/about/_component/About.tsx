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
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// const stagger = {
//   visible: { transition: { staggerChildren: 0.2 } },
// };

const domains = [
  {
    icon: Users,
    title: "Community Services",
    description:
      "Engage in vital community service projects focusing on education, healthcare, and social welfare.",
    activities: [
      "Organize blood donation camps",
      "Conduct health awareness programs",
      "Support local schools",
    ],
  },
  {
    icon: UserPlus,
    title: "Club Services",
    description:
      "Contribute to planning events, meetings, and member activities. Develop leadership skills within the club.",
    activities: [
      "Organize club meetings",
      "Plan team-building activities",
      "Mentor new members",
    ],
  },
  {
    icon: Briefcase,
    title: "Vocational Services",
    description:
      "Enhance vocational skills through workshops and seminars. Gain insights related to your future profession.",
    activities: [
      "Host career guidance sessions",
      "Arrange industry visits",
      "Conduct skill development workshops",
    ],
  },
  {
    icon: BookOpen,
    title: "Literary Services",
    description:
      "Participate in writing contests, poetry readings, and book discussions. Explore and share your passion for words.",
    activities: [
      "Organize book clubs",
      "Host writing workshops",
      "Conduct poetry slams",
    ],
  },
  {
    icon: Globe,
    title: "International Services",
    description:
      "Engage in global projects, cultural exchanges, and collaborations with Rotaract clubs worldwide.",
    activities: [
      "Participate in international conferences",
      "Organize cultural exchange programs",
      "Collaborate on global initiatives",
    ],
  },
  {
    icon: Laptop,
    title: "Multimedia Services",
    description:
      "Contribute to graphic design, video production, and digital media projects. Showcase creativity and technical skills.",
    activities: [
      "Create promotional videos",
      "Design club merchandise",
      "Develop digital content for social media",
    ],
  },
  {
    icon: Share2,
    title: "Public Relations Services",
    description:
      "Shape the club's public image through communication strategies and social media management.",
    activities: [
      "Manage club's social media presence",
      "Write press releases",
      "Coordinate with local media",
    ],
  },
  {
    icon: Camera,
    title: "Photography Services",
    description:
      "Capture moments at events and community projects. Develop photography skills and enhance the club's visual narrative.",
    activities: [
      "Document club events",
      "Create photo essays of projects",
      "Conduct photography workshops",
    ],
  },
  {
    icon: Radio,
    title: "Social Media",
    description:
      "Manage online presence, create content, and run campaigns. Connect with a wider audience.",
    activities: [
      "Develop social media strategy",
      "Create engaging content",
      "Analyze social media metrics",
    ],
  },
  {
    icon: Users,
    title: "Management Services",
    description:
      "Contribute to event planning and execution. Hone organizational and leadership skills.",
    activities: [
      "Plan and execute club events",
      "Manage project timelines",
      "Coordinate with external partners",
    ],
  },
  {
    icon: Mic2,
    title: "Performing Arts",
    description:
      "Showcase talents in music, dance, theater, and more. Contribute creatively to cultural events.",
    activities: [
      "Organize talent shows",
      "Conduct drama workshops",
      "Perform at community events",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Services",
    description:
      "Contribute to web design, content management and maintenance of the Rotaract website.",
    activities: [
      "Maintain club website",
      "Provide technical support for events",
      "Develop club management software",
    ],
  },
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
              src="/about_image.jpg"
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
              src="/about/parent.jpg"
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
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
