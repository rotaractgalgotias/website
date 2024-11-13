import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import HeroSection from "./_components/HeroSection";
import PartnersSection from "./_components/PartnersSection";
import { Separator } from "@/components/ui/separator";
import AboutSection from "./_components/AboutSection";
import EventsSection from "./_components/EventsSection";

export default function Home() {
  return (
    <main className="min-h-dvh w-full space-y-8 lg:space-y-16 py-8 lg:py-16">
      <div>
        <MaxWidthWrapper>
          <HeroSection />
        </MaxWidthWrapper>
      </div>
      <Separator />
      <div>
        <MaxWidthWrapper>
          <PartnersSection />
        </MaxWidthWrapper>
      </div>
      <Separator />
      <div>
        <MaxWidthWrapper>
          <AboutSection />
        </MaxWidthWrapper>
      </div>
      <div>
        <MaxWidthWrapper>
          <EventsSection />
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
