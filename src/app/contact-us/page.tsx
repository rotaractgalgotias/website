"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { ContactHeader } from "./_components/ContactHeader";
import { ContactForm } from "./_components/ContactForm";
import { ContactCards } from "./_components/ContactCards";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <div>
      <MaxWidthWrapper>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
          <ContactHeader />

          <div className="container px-4 md:px-6 pb-12">
            <div className="grid gap-8 lg:gap-12">
              <ContactCards />
              <ContactForm
                isSubmitting={isSubmitting}
                submitSuccess={submitSuccess}
                setIsSubmitting={setIsSubmitting}
                setSubmitSuccess={setSubmitSuccess}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
