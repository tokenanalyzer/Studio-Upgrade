import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Portfolio",
  description: "Browse our curated portfolio of web development, SaaS, and brand design projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CtaSection />
    </>
  );
}
