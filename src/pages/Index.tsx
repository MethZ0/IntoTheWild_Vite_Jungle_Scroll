import { VideoBackground } from "@/components/VideoBackground";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { ExploreSection } from "@/components/ExploreSection";
import { DiscoverSection } from "@/components/DiscoverSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WildlifeCarousel } from "@/components/WildlifeCarousel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <VideoBackground />
      <Header />
      <HeroSection />
      <ContentSection />
      <ExploreSection />
      <WildlifeCarousel />
      <DiscoverSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
};

export default Index;
