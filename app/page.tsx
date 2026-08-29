import Hero from "@/components/Hero";
import FeaturedClientProject from "@/components/FeaturedClientProject";
import ProjectGrid from "@/components/ProjectGrid";
import MobileAppShowcase from "@/components/MobileAppShowcase";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Real-world client work gets top priority */}
      <FeaturedClientProject />

      {/* Concepts and templates */}
      <ProjectGrid />

      <MobileAppShowcase />
      <Services />
      <TechStack />
      <AboutPreview />
      <CTA />
    </main>
  );
}
