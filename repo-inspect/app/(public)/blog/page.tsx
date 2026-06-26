import BlogHero from "@/components/sections/BlogHero";
import BlogGrid from "@/components/sections/BlogGrid";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Blog",
  description: "Insights on web development, design, SaaS engineering, and digital innovation.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <CtaSection />
    </>
  );
}
