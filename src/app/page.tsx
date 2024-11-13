import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import HeroSection from "./_components/HeroSection";
import PartnersSection from "./_components/PartnersSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-dvh w-full space-y-8 lg:space-y-12 py-8 lg:py-12">
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
    </main>
  );
}
