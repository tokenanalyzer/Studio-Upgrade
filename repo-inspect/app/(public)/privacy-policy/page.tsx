import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "M.D Studio privacy policy and data protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
      <div className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              We collect information you provide directly to us, such as when you fill out our contact form or subscribe to our newsletter.
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to respond to your inquiries, provide services, and improve our website.
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate security measures to protect your personal information.
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this privacy policy, please{" "}
              <Link href="/contact" className="text-accent-600 hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
