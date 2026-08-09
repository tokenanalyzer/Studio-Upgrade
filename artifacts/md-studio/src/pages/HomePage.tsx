import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesTicker from "@/components/ServicesTicker";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function HomePage() {
  usePageSEO({
    title: "MD Studio — Full Stack & AI Development Agency by Adil Hussain",
    description: "MD Studio is a boutique software agency by Adil Hussain — Full Stack Developer & AI Engineer. We build scalable web apps, AI agents, SaaS platforms, and mobile products that create real business impact.",
    canonical: "/",
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesTicker />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <PortfolioSection />
        <CaseStudiesSection />
        <TechStackSection />
        <IndustriesSection />
        <TestimonialsSection />
        <BlogPreview />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
