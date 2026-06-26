import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "M.D Studio terms of service and usage conditions.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
      <div className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by these terms.
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Services</h2>
            <p className="text-slate-600 mb-4">
              M.D Studio provides digital services including web development, UI/UX design, and SaaS engineering.
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-slate-600 mb-4">
              All content on this website is the property of M.D Studio and is protected by copyright laws.
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Contact</h2>
            <p className="text-slate-600 mb-4">
              For questions about these terms, please{" "}
              <Link href="/contact" className="text-accent-600 hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
