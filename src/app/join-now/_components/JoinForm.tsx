"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

const steps = [
  {
    title: "Choose Your College",
    description: "Select which college you are from",
  },
  {
    title: "Personal Information",
    description: "Tell us about yourself",
  },
  {
    title: "Areas of Interest",
    description: "Select your preferred areas of involvement",
  },
  {
    title: "Confirmation",
    description: "Review and confirm your application",
  },
];

const colleges = [
  {
    id: 1,
    name: "Galgotias University",
    members: "120 Members",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Galgotias College of Engineering and Technology",
    members: "85 Members",
    image: "/placeholder.svg",
  },
];

export default function JoinForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <MaxWidthWrapper className="max-w-2xl">
        <div className="w-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div className="ml-auto">
                {currentStep + 1}/{steps.length}
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <CardDescription>
                {steps[currentStep].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 0 && (
                <div className="space-y-4">
                  {colleges.map((club) => (
                    <div
                      key={club.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={club.image} alt={club.name} />
                          <AvatarFallback>{club.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{club.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {club.members}
                          </p>
                        </div>
                      </div>
                      <Button onClick={() => setCurrentStep(currentStep + 1)}>
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                  <p>
                    &quot;Joining Rotaract was one of the best decisions I made.
                    The opportunities for personal growth and community service
                    are incredible.&quot;
                  </p>
                  <footer className="mt-2 font-medium text-foreground">
                    - Sarah Chen, Club President
                  </footer>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
