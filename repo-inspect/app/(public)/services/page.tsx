import ServicesHero from "@/components/sections/ServicesHero";
import ServicesList from "@/components/sections/ServicesList";
import ServicesProcess from "@/components/sections/ServicesProcess";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Services",
  description: "Explore our comprehensive digital services — web development, SaaS, UI/UX, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <CtaSection />
    </>
  );
}
