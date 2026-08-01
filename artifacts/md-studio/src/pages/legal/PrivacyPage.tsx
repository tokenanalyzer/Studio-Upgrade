import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NAV_H } from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: NAV_H, background: "#f8faff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "5px 14px", borderRadius: "999px",
              background: "#EFF6FF", border: "1px solid #BFDBFE",
              fontSize: "0.78rem", fontWeight: 600, color: "#2563EB",
              marginBottom: "1.2rem",
            }}>
              Legal
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <Section title="1. Introduction">
              <p>MD Studio ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>
              <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.</p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company name provided via our contact form or project inquiry.</li>
                <li><strong>Communication Data:</strong> Messages, emails, and attachments you send us during project discussions.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs collected automatically via analytics tools.</li>
                <li><strong>Project Data:</strong> Files, documents, and requirements you share with us during the course of a project engagement.</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide project quotations</li>
                <li>Deliver and manage web development and software services</li>
                <li>Communicate project updates, invoices, and deliverables</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraudulent or unauthorized activity</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing">
              <p>We process your personal data on the following legal bases:</p>
              <ul>
                <li><strong>Contract:</strong> To fulfill our obligations under a service agreement with you.</li>
                <li><strong>Legitimate Interests:</strong> To improve our services, respond to inquiries, and maintain business records.</li>
                <li><strong>Consent:</strong> Where you have explicitly agreed to receive marketing communications.</li>
                <li><strong>Legal Obligation:</strong> Where required by applicable law or regulation.</li>
              </ul>
            </Section>

            <Section title="5. Data Sharing and Disclosure">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted third-party vendors (e.g., hosting, email, analytics) who assist in our operations under strict confidentiality agreements.</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or government request.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred as part of the transaction.</li>
              </ul>
            </Section>

            <Section title="6. Cookies and Tracking Technologies">
              <p>Our website may use cookies and similar tracking technologies to enhance your experience. Types of cookies we use include:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
              </ul>
              <p>You can control cookie preferences through your browser settings. Note that disabling cookies may affect site functionality.</p>
            </Section>

            <Section title="7. Data Retention">
              <p>We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws. Project-related data is typically retained for 5 years following project completion. You may request deletion of your data at any time by contacting us.</p>
            </Section>

            <Section title="8. Data Security">
              <p>We implement industry-standard security measures including encrypted communications (HTTPS/TLS), secure file storage, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </Section>

            <Section title="9. Your Rights">
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data under certain conditions.</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
              </ul>
              <p>To exercise any of these rights, please contact us at <a href="mailto:hello@mdstudio.dev" style={{ color: "#2563EB" }}>hello@mdstudio.dev</a>.</p>
            </Section>

            <Section title="10. Third-Party Links">
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies before providing any personal information.</p>
            </Section>

            <Section title="11. Children's Privacy">
              <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
            </Section>

            <Section title="12. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date at the top of this page. Your continued use of our services after such changes constitutes your acceptance of the revised policy.</p>
            </Section>

            <Section title="13. Contact Us">
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <div style={{ marginTop: "1rem", padding: "1.5rem", background: "white", borderRadius: "1rem", border: "1px solid #E2E8F0" }}>
                <p style={{ margin: 0, fontWeight: 600, color: "#0f172a" }}>MD Studio — Adil Hussain</p>
                <p style={{ margin: "0.25rem 0 0" }}>Email: <a href="mailto:hello@mdstudio.dev" style={{ color: "#2563EB" }}>hello@mdstudio.dev</a></p>
                <p style={{ margin: "0.25rem 0 0" }}>WhatsApp: <a href="https://wa.me/923001234567" style={{ color: "#2563EB" }}>+92 300 123 4567</a></p>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.85rem", paddingBottom: "0.6rem", borderBottom: "2px solid #EFF6FF" }}>{title}</h2>
      <div style={{ color: "#475569", lineHeight: 1.8, fontSize: "0.96rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}
