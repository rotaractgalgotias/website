import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-dvh w-full">
      <div>
        <MaxWidthWrapper>
          <HeroSection />
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
