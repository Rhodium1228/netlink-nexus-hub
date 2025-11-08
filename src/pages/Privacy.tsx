import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>GiNet Privacy Policy | Australian ISP Compliance</title>
        <meta name="description" content="GiNet's Privacy Policy under the Privacy Act 1988. How we collect, use, and protect your personal information." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <article className="container mx-auto px-6 py-12 max-w-4xl">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy — GI NET</h1>
              <p className="text-lg mb-4">
                <strong>Last updated: 8 November 2025</strong>
              </p>
              <div className="text-muted-foreground leading-relaxed space-y-2 mb-6">
                <p><strong>Entity:</strong> GI NET Pty Ltd (ABN 71 608 672 608)</p>
                <p><strong>Address:</strong> 12 Stelvio Close, Lynbrook VIC 3975, Australia</p>
                <p><strong>Phone:</strong> 03 8797 3795</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a></p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                GI NET ("we", "us", "our") provides retail broadband and related services to residential and business customers in Australia. We respect your privacy and handle personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
              </p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1) What this policy covers</h2>
              <p className="text-muted-foreground">
                This policy explains how we collect, use, disclose, store and protect your personal information; how you can access or correct it; and how to make a privacy complaint. It applies to ginet.au, our customer portal, and our contact channels (phone, email, chat, forms).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2) The information we collect</h2>
              <p className="text-muted-foreground mb-3">We collect the minimum information needed to provide and support our services:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Identity & contact:</strong> name, business name (if applicable), service and postal addresses, email, phone.</li>
                <li><strong>Service details:</strong> plan type, service identifiers (e.g., NBN service ID), static IP allocations, installation dates, fault tickets, support history.</li>
                <li><strong>Billing & payments:</strong> invoices, payment status, payment method tokens from our payment processor (we do not store full card numbers).</li>
                <li><strong>Technical logs:</strong> router/NBN connection status, network performance metrics, uptime, IP logs relevant to fault diagnosis and security.</li>
                <li><strong>Website & portal data:</strong> pages viewed, device/browser details, cookies (see §7), portal activity.</li>
                <li><strong>Marketing preferences:</strong> your opt-in/opt-out status for emails/SMS.</li>
                <li><strong>Sensitive information:</strong> we don't seek to collect sensitive information. If it arises incidentally (e.g., within support notes), we protect it under this policy.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                You may choose to interact anonymously or using a pseudonym where lawful and practical (e.g., general enquiries). We will need verified details to supply and support a broadband service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3) How we collect it</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Directly from you:</strong> when you order or activate a service, contact us, use the portal, or complete forms.</li>
                <li><strong>From your service use:</strong> connection logs, speed/performance measures, support interactions.</li>
                <li><strong>From partners:</strong> wholesale carriers/wholesalers (e.g., NBN/OptiComm providers through their authorised channels), number portability, or address validation services—only what's needed to provision/support your service.</li>
                <li><strong>From publicly available sources:</strong> to validate business details or addresses when necessary.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4) Why we collect and use it (purposes)</h2>
              <p className="text-muted-foreground mb-3">We use personal information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, activate, and maintain your broadband service.</li>
                <li>Diagnose faults, deliver support, and improve service quality.</li>
                <li>Bill for services, process payments, manage accounts and credit risks.</li>
                <li>Communicate about outages, maintenance, plan changes, and important service updates.</li>
                <li>Meet legal, regulatory, and security obligations (e.g., fraud prevention, misuse investigations).</li>
                <li>Send marketing only in line with your permissions and Australian spam laws (see §8).</li>
              </ul>
              <p className="text-muted-foreground mt-3">We do not sell personal information.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5) Disclosing your information</h2>
              <p className="text-muted-foreground mb-3">We may disclose personal information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Wholesale network providers and technical partners strictly to provision and support your connection.</li>
                <li>Payment processors (e.g., Stripe/Paydock) to process payments; we receive tokens/confirmations, not full card data.</li>
                <li>IT/Cloud and support vendors (hosting, email, CRM, ticketing, analytics) under confidentiality and privacy terms.</li>
                <li>Professional advisers (legal, accounting, audit) under duty of confidence.</li>
                <li>Regulators or law enforcement when required or authorised by law.</li>
                <li>Prospective acquirers of our business, subject to confidentiality and applicable privacy requirements.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                When we disclose information, we require recipients to protect it and use it only for the purpose supplied.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6) Overseas disclosures</h2>
              <p className="text-muted-foreground">
                Some service providers or their systems may be located outside Australia (for example, cloud hosting or ticketing tools). Where we transfer personal information overseas, we take reasonable steps to ensure recipients protect it consistently with the APPs (e.g., contractual safeguards, technical controls). You can contact us for a current list of relevant countries and vendors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7) Cookies, analytics, and tracking</h2>
              <p className="text-muted-foreground mb-3">Our website and portal use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>maintain secure sessions and account logins;</li>
                <li>remember preferences;</li>
                <li>measure site usage to improve content and performance.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                You can control cookies via your browser settings. Blocking essential cookies may limit portal functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8) Direct marketing & the Spam Act</h2>
              <p className="text-muted-foreground">
                We may send service and marketing communications where permitted by law and your preferences. Every marketing email/SMS includes a functional unsubscribe. You can opt out at any time via the message link or by contacting <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a>. Service/transactional notices (e.g., outage or billing notices) may still be sent as they are not marketing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9) Security and retention</h2>
              <p className="text-muted-foreground mb-3">
                We use administrative, technical, and physical safeguards to protect personal information from misuse, interference, loss, and unauthorised access, modification, or disclosure. Measures include role-based access, TLS encryption in transit, secure hosting, logging/monitoring, and staff confidentiality obligations.
              </p>
              <p className="text-muted-foreground">
                We retain personal information only as long as needed for the purposes above or as required by law (e.g., tax/audit). Then we securely delete or de-identify it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10) Access and correction</h2>
              <p className="text-muted-foreground mb-3">
                You can request access to the personal information we hold about you, or ask us to correct it if it is inaccurate, out-of-date, or incomplete. We'll respond within a reasonable time (usually 30 days). We may need to verify your identity and, where permitted by law, charge a reasonable fee for large or complex requests.
              </p>
              <p className="text-muted-foreground">
                Contact: <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a> or 03 8797 3795.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11) Your choices</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You may opt out of marketing at any time.</li>
                <li>You may use a pseudonym for general enquiries (but not for provisioning/supporting a live service).</li>
                <li>You can disable non-essential cookies in your browser.</li>
                <li>You can close your account; we will retain only what is required by law and for legitimate business purposes (e.g., billing records).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12) Complaints (how to raise a privacy concern)</h2>
              <div className="text-muted-foreground space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Contact us first</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Email: <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a></li>
                    <li>Phone: 03 8797 3795</li>
                    <li>Address: Privacy Officer, GI NET Pty Ltd, 12 Stelvio Close, Lynbrook VIC 3975</li>
                  </ul>
                  <p className="mt-2">Tell us what happened and what you'd like us to do. We'll acknowledge your complaint and aim to resolve it within 30 days.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">If you're not satisfied</p>
                  <p className="mb-2">You can lodge a complaint with the Office of the Australian Information Commissioner (OAIC):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Online: <a href="https://www.oaic.gov.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">oaic.gov.au</a></li>
                    <li>Phone: 1300 363 992</li>
                    <li>Mail: GPO Box 5288, Sydney NSW 2001</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13) Third-party sites and services</h2>
              <p className="text-muted-foreground">
                Our website may link to third-party sites or embed third-party widgets. Those services are governed by their own privacy policies. We recommend reviewing those policies before providing personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">14) Changes to this policy</h2>
              <p className="text-muted-foreground">
                We may update this policy from time to time. The "Last updated" date reflects the latest revision. Significant changes will be highlighted on our website or notified by email/portal message where appropriate.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">15) Contact us</h2>
              <p className="text-muted-foreground mb-3">Questions about this policy or your privacy at GI NET:</p>
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">Privacy Officer — GI NET Pty Ltd</p>
                <p>Email: <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a></p>
                <p>Phone: 03 8797 3795</p>
                <p>Address: 12 Stelvio Close, Lynbrook VIC 3975, Australia</p>
              </div>
            </section>

            <footer className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                GI NET Pty Ltd | ABN 71 608 672 608 | 12 Stelvio Close, Lynbrook VIC 3975, Australia | <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a> | 03 8797 3795
              </p>
            </footer>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
