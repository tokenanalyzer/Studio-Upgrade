import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NAV_H } from "@/components/Navbar";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <Section title="1. Acceptance of Terms">
              <p>By accessing or using MD Studio's website or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.</p>
              <p>These Terms constitute a legally binding agreement between you ("Client") and MD Studio, operated by Adil Hussain ("Agency", "we", "us", "our").</p>
            </Section>

            <Section title="2. Services">
              <p>MD Studio provides custom software development, web development, mobile application development, UI/UX design, AI integration, and related digital services ("Services"). The specific scope, deliverables, timeline, and fees for each engagement are defined in a separate Statement of Work (SOW) or project agreement signed by both parties.</p>
              <p>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.</p>
            </Section>

            <Section title="3. Project Agreements and Statements of Work">
              <p>Each project begins with a written project agreement or Statement of Work that defines:</p>
              <ul>
                <li>Project scope, deliverables, and milestones</li>
                <li>Timeline and delivery schedule</li>
                <li>Fees, payment schedule, and payment terms</li>
                <li>Revision rounds and change request procedures</li>
                <li>Intellectual property ownership upon full payment</li>
              </ul>
              <p>These documents supplement and are incorporated into these Terms. In case of conflict, the project agreement governs.</p>
            </Section>

            <Section title="4. Payment Terms">
              <p>Standard payment terms are as follows unless otherwise specified in the project agreement:</p>
              <ul>
                <li><strong>Deposit:</strong> 50% of the total project fee is due before work commences.</li>
                <li><strong>Milestone Payments:</strong> Remaining fees are invoiced at agreed project milestones.</li>
                <li><strong>Final Payment:</strong> All outstanding fees must be paid before delivery of final files or deployment.</li>
                <li><strong>Late Payments:</strong> Invoices unpaid after 14 days may incur a 2% monthly late fee.</li>
              </ul>
              <p>All prices are quoted in USD unless otherwise agreed. We accept bank transfers, PayPal, and other mutually agreed payment methods.</p>
            </Section>

            <Section title="5. Revisions and Change Requests">
              <p>Each project includes an agreed number of revision rounds as specified in the project agreement. Revisions beyond the agreed scope will be billed at our standard hourly rate. Significant scope changes may require a new or amended Statement of Work.</p>
              <p>A "revision" means modifications within the original agreed scope. New features, additional pages, or substantial design overhauls constitute scope changes and will be quoted separately.</p>
            </Section>

            <Section title="6. Intellectual Property">
              <p>Upon receipt of full payment:</p>
              <ul>
                <li>The Client receives full ownership of all custom code, designs, and deliverables created specifically for their project.</li>
                <li>MD Studio retains the right to display the work in our portfolio unless the Client requests confidentiality in writing.</li>
                <li>Third-party libraries, frameworks, fonts, and stock assets included in deliverables are subject to their respective licenses, which the Client assumes responsibility for.</li>
                <li>MD Studio retains ownership of any proprietary tools, templates, or methodologies used in delivering the Services.</li>
              </ul>
            </Section>

            <Section title="7. Client Responsibilities">
              <p>To ensure successful project delivery, the Client agrees to:</p>
              <ul>
                <li>Provide accurate and complete project requirements in a timely manner</li>
                <li>Provide necessary access to third-party accounts, servers, or APIs as required</li>
                <li>Review and provide feedback within agreed timeframes (typically 5 business days)</li>
                <li>Ensure all content, images, and materials provided are owned by the Client or properly licensed</li>
                <li>Ensure compliance with applicable laws in their jurisdiction</li>
              </ul>
              <p>Delays caused by the Client may result in timeline adjustments or additional fees.</p>
            </Section>

            <Section title="8. Confidentiality">
              <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. MD Studio will not share your project details, source code, or business information with third parties without your written consent, except as required by law.</p>
            </Section>

            <Section title="9. Warranties and Representations">
              <p>MD Studio warrants that:</p>
              <ul>
                <li>Services will be performed professionally and in accordance with industry standards</li>
                <li>Deliverables will substantially conform to the agreed specifications</li>
                <li>We have the right to provide the services described</li>
              </ul>
              <p>We provide a 30-day bug warranty post-delivery, covering issues directly caused by our implementation. This does not cover issues arising from Client modifications, third-party changes, or new feature requests.</p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, MD Studio's total liability for any claims arising from or related to our services shall not exceed the total fees paid by the Client in the 3 months preceding the claim.</p>
              <p>We are not liable for indirect, incidental, consequential, or punitive damages, including loss of profits, loss of data, business interruption, or loss of goodwill.</p>
            </Section>

            <Section title="11. Termination">
              <p>Either party may terminate a project engagement with 14 days' written notice. Upon termination:</p>
              <ul>
                <li>The Client pays for all work completed to date at the pro-rated project rate</li>
                <li>MD Studio delivers all completed work to the Client</li>
                <li>Any unpaid invoices become immediately due</li>
                <li>If terminated by MD Studio without cause, a pro-rated refund of any unused prepaid fees will be issued</li>
              </ul>
            </Section>

            <Section title="12. Governing Law">
              <p>These Terms are governed by the laws of Pakistan. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration in Karachi, Pakistan.</p>
            </Section>

            <Section title="13. Amendments">
              <p>We may update these Terms periodically. Material changes will be communicated via our website or direct notification. Your continued use of our services after changes take effect constitutes acceptance of the revised Terms.</p>
            </Section>

            <Section title="14. Contact">
              <p>Questions about these Terms should be directed to:</p>
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
