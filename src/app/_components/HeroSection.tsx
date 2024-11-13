import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, YoutubeIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full grid lg:grid-cols-2 gap-12 py-16 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Committed to making a positive impact in our community.
        </h1>
        <p className="text-lg text-muted-foreground">
          At Rotaract Galgotias, we function as a service-oriented organization
          that strives to create a better world through volunteerism, community
          service, and professional development.
        </p>
        <div className="flex gap-4">
          <Button variant={"shine"} size="lg">
            Join Now
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Know More
          </Button>
        </div>
      </div>
      <Card>
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
