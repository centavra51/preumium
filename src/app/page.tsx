import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StudioStatement } from "@/components/StudioStatement";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ServicesProcess } from "@/components/ServicesProcess";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <StudioStatement />
      <FeaturedWork />
      <ServicesProcess />
      <Footer />
    </main>
  );
}
