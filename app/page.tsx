import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
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
      <FeaturedProject />
      <ProjectGrid />
      <MobileAppShowcase />
      <Services />
      <TechStack />
      <AboutPreview />
      <CTA />
    </main>
  );
}
