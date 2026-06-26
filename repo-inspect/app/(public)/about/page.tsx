import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutTeam from "@/components/sections/AboutTeam";
import AboutValues from "@/components/sections/AboutValues";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "About",
  description: "Learn about M.D Studio — our story, team, and values.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CtaSection />
    </>
  );
}
