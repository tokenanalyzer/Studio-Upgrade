import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export const metadata = {
  title: "Contact",
  description: "Get in touch with M.D Studio. We would love to hear about your project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-20 lg:py-32 bg-slate-50/50">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
