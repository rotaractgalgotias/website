import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 items-center">
      <div className="w-full space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
          Committed to making a positive impact in our community.
        </h1>
        <p className="text-base text-muted-foreground">
          At Rotaract Galgotias, we function as a service-oriented organization
          that strives to create a better world through volunteerism, community
          service, and professional development.
        </p>
        <div className="flex gap-4">
          <Link href="/join-now">
            <Button variant={"shine"}>
              Join Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline">Know More</Button>
        </div>
      </div>
      <Card className="w-full">
        <CardContent className="p-0 aspect-video">
          <div className="relative w-full h-full bg-muted rounded-lg flex items-center justify-center">
            <YoutubeIcon className="w-12 h-12 text-muted-foreground" />
            <span className="sr-only">Watch our introduction video</span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
