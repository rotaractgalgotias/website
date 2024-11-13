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
      <div className="container mx-auto px-4 py-16 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Rotaract Galgotias, we strive to create a better world through
            volunteerism, community service, and professional development.
          </p>
        </section>

        <section className="flex flex-col-reverse lg:flex-row-reverse gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              At Rotaract Galgotias, we function as a service-oriented
              organization that strives to create a better world through
              volunteerism, community service, and professional development. We
              are a part of the global network of Rotaract clubs sponsored by
              Rotary International, which gives us access to a wealth of
              resources and opportunities for growth.
            </p>
          </div>
          <Image
            src="/logo.png"
            alt="Rotaract members in action"
            width={500}
            height={400}
            className="rounded-lg object-contain w-full h-[300px]"
          />
        </section>

        <section className="flex flex-col lg:flex-row items-center">
          <Image
            src="/about/parent.jpg"
            alt="Rotary Club of Delhi SouthEnd"
            width={500}
            height={400}
            className="rounded-lg object-contain w-full h-[300px] md:order-last"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Parent Club</h2>
            <p className="text-muted-foreground text-lg">
              The Rotary Club of Delhi SouthEnd proudly serves as the Parent
              Club of the Rotaract Club of Galgotias Educational Institutions.
              Through this partnership, we nurture and support the young leaders
              of the Rotaract Club, empowering them to create a positive impact
              in their community and beyond. Together, we work hand in hand to
              foster a spirit of service, fellowship, and social responsibility,
              making a meaningful difference in the lives of those we touch.
              Through collaborative efforts and shared values, we aim to build a
              better future and inspire a new generation of compassionate
              change-makers.
            </p>
          </div>
        </section>

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
      </div>
    </div>
  );
}
