import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Projects",
  description: "Explore all our projects across web development, SaaS, and brand design.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CtaSection />
    </>
  );
}
