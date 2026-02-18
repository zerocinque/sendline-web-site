import ServicesHero from "@/components/services/ServicesHero";
import CoreCapabilities from "@/components/services/CoreCapabilities";
import CaseStudy from "@/components/services/CaseStudy";
import TechnologyStack from "@/components/services/TechnologyStack";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <CoreCapabilities />
      {/* <CaseStudy /> */}
      <TechnologyStack />
      <ServicesCTA />
    </>
  );
}
