import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  TreesIcon as Threads,
  GithubIcon,
} from "lucide-react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";

const footerLinks = {
  about: [
    { name: "Rotaract", href: "https://www.rotary.org/en" },
    { name: "Rotary", href: "https://www.rotary.org/en" },
    {
      name: "Rotarct District 3011",
      href: "https://www.rotaractdistrict3011.org/",
    },
    { name: "Club History", href: "/our-archive" },
    { name: "Our Events", href: "/events" },
  ],
  team: [
    { name: "Team Page", href: "/team" },
    { name: "Board Council", href: "/team/#boardcoumcil" },
    { name: "Board of Directors", href: "/team/#boardOfDirectors" },
    { name: "Past Teams", href: "/our-archive" },
  ],
  documents: [
    { name: "Newsletters", href: "/" },
    { name: "Reports", href: "/" },
    { name: "Club Aggrements", href: "/" },
    { name: "Media Kit", href: "#" },
    { name: "Press Release", href: "/" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/RotaractGEI?mibextid=ZbWKwL",
  },
  { icon: Instagram, href: "https://www.instagram.com/rotaract_galgotias" },
  {
    icon: Twitter,
    href: "https://x.com/rotaractGEI?t=ABHSgBJ-SOAbS7yvwIe9cA&s=09",
  },
  { icon: Youtube, href: "https://youtube.com/@rotaractgalgotias" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/rotaract-club-of-galgotias-educational-institutions/",
  },
  { icon: Threads, href: "https://www.threads.net/@rotaract_galgotias" },
  {
    icon: GithubIcon,
    href: "https://github.com/rotaractgalgotias/website-rewrite",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <MaxWidthWrapper>
        <div className="w-full py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-6">
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Rotaract Club Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <div>
                  <h2 className="text-xl font-semibold">Rotaract Club</h2>
                  <p className="text-sm text-muted-foreground">
                    Galgotias Educational Institutions
                  </p>
                </div>
              </Link>
              <p className="text-muted-foreground">
                Rotaract Galgotias, we function as a service-oriented
                organization that strives to create a better world through
                volunteerism, community service, and professional development.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.icon.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 grid gap-8 sm:grid-cols-3">
              <div className="space-y-4">
                <h2 className="text-base font-semibold">About</h2>
                <ul className="space-y-3">
                  {footerLinks.about.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-semibold">Team</h2>
                <ul className="space-y-3">
                  {footerLinks.team.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-semibold">Documents</h2>
                <ul className="space-y-3">
                  {footerLinks.documents.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-sm text-muted-foreground">
              Since 2010, Rotaract Club of Galgotias Educational Institutions
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
