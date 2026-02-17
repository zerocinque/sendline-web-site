import { useTranslations } from "next-intl";
import HeroSection from "@/components/home/HeroSection";
import TechLogos from "@/components/home/TechLogos";
import AboutSection from "@/components/home/AboutSection";
import HowIWork from "@/components/home/HowIWork";
import Specializations from "@/components/home/Specializations";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechLogos />
      <Specializations />
      <AboutSection />
      <HowIWork />
      <FeaturedProjects />
      <Stats />
      <CTASection />
    </>
  );
}
