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

import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { College } from "@prisma/client";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { toast } from "sonner";

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
    title: "Membership and Updates",
    description:
      "Join the membership and get updates, or just join the updates group",
  },
  {
    title: "Review Your Application",
    description: "Review all the information you have provided",
  },
  {
    title: "Welcome to Rotaract!",
    description: "Your registration is complete. Here's what's next.",
  },
];

export default function JoinForm({
  colleges,
  president,
}: {
  colleges: College[];
  president: { name: string };
}) {
  const [currentStep, setCurrentStep] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [collegeId, setCollegeId] = useState<string | null>(null);
  const progress = ((currentStep + 1) / steps.length) * 100;
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    year: "",
    branch: "",
    whatsappNumber: "",
    callingNumber: "",
    referral: "",
  });
  const [membershipDetails, setMembershipDetails] = useState({
    membershipType: "full",
    agreeToTerms: false,
  });

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      ...membershipDetails,
      collegeId,
    };

    const toastId = toast.loading("Submitting your application...");

    try {
      const googleFormFields: Record<string, string> = {
        email: "entry.1219425003",
        name: "entry.279267065",
        year: "entry.1322653397",
        branch: "entry.1891920853",
        whatsappNumber: "entry.433756221",
        callingNumber: "entry.532101315",
        referral: "entry.1517602782",
      };

      const url = new URL(
        `https://docs.google.com/forms/d/e/1FAIpQLSdNZFtEsPdc7kkPohz59DgsgzIqIiY1ze488YpgbfcRIEBHFg/viewform`
      );
      const params = new URLSearchParams();

      params.append(googleFormFields["email"], payload.email);
      params.append(googleFormFields["name"], payload.name);
      params.append(googleFormFields["year"], payload.year);
      params.append(googleFormFields["branch"], payload.branch);
      params.append(googleFormFields["whatsappNumber"], payload.whatsappNumber);
      params.append(googleFormFields["callingNumber"], payload.callingNumber);
      params.append(googleFormFields["referral"], payload.referral);

      url.search = params.toString();
      window.open(url.toString(), "_blank");
      // console.log(url.toString());
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        id: toastId,
      });
      console.error(error);
    }
  };

  const StepProvider = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step0
            colleges={colleges}
            setCollegeId={setCollegeId}
            setCurrentStep={setCurrentStep}
          />
        );
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <Step2
            setCurrentStep={setCurrentStep}
            setMembershipDetails={setMembershipDetails}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            membershipDetails={membershipDetails}
            handleSubmit={handleSubmit}
          />
        );
      case 4:
        return (
          <Step4
            whatsappGroupLink={
              colleges.find((college) => college.id === collegeId)
                ?.whatsappGroupLink ?? ""
            }
          />
        );
    }
  };

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
                disabled={currentStep === 0 || currentStep === 4}
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
              <StepProvider />

              <div className="mt-8">
                <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                  <p>
                    &quot;Joining Rotaract was one of the best decisions I made.
                    The opportunities for personal growth and community service
                    are incredible.&quot;
                  </p>
                  <footer className="mt-2 font-medium text-foreground">
                    - {president.name}, Club President
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
