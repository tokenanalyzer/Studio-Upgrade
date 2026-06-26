import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import CaseStudiesList from "@/components/sections/CaseStudiesList";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Case Studies",
  description: "Deep dives into our most impactful projects with measurable results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesList />
      <CtaSection />
    </>
  );
}
