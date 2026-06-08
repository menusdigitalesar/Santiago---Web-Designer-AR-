import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ScrollSection } from "@/components/sections/ScrollSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhySantiagoSection } from "@/components/sections/WhySantiagoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ShaderSection } from "@/components/sections/ShaderSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { NavBar } from "@/components/NavBar";
import { FooterSection } from "@/components/sections/FooterSection";
import { FloatingWA } from "@/components/FloatingWA";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <NavBar />
      <HeroSection />
      <MarqueeSection />
      <ScrollSection />
      <PortfolioSection />
      <WhySantiagoSection />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <ShaderSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
      <FloatingWA />
    </main>
  );
}
