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
              <h1 className="text-4xl font-bold text-foreground mb-4">GiNet Privacy Policy</h1>
              <p className="text-lg mb-2">
                <strong>Effective: November 8, 2025</strong> | Last Updated: November 8, 2025
              </p>
              <p className="text-muted-foreground leading-relaxed">
                GiNet Pty Ltd (ABN 12 345 678 901) is committed to protecting your privacy under the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>. This policy explains how we collect, use, disclose, store, and secure personal information as an NBN wholesale partner providing fiber internet services. If you have questions, contact <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a> or 1300 GI NET.
              </p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Personal Information Do We Collect?</h2>
              <p className="text-muted-foreground mb-3">We collect information necessary for service delivery, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>From Quote Forms/Signups:</strong> Name, email, phone, postcode, address (for NBN eligibility).</li>
                <li><strong>From Billing/Support:</strong> Payment details (via secure gateway), usage data, IP address.</li>
                <li><strong>From Cookies/Analytics:</strong> Device info, browsing behavior (e.g., Google Analytics; opt-out available).</li>
                <li><strong>Sensitive Information:</strong> Rarely (e.g., health data for vulnerable consumer support under TCP Code); only with consent.</li>
              </ul>
              <p className="text-muted-foreground mt-3">We do not collect children's data without parental consent (per 2025 Children's Online Privacy Code, phased in 2026).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How Do We Collect It?</h2>
              <p className="text-muted-foreground">Directly from you (forms, calls) or automatically (cookies, logs). We notify you at collection (e.g., form notices) per APP 5.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Why Do We Collect, Use, and Disclose It? (APPs 6 & 8)</h2>
              <p className="text-muted-foreground mb-3"><strong>Primary Purposes:</strong> Process quotes, provide internet services, billing, support, marketing (opt-out anytime).</p>
              <p className="text-muted-foreground mb-3"><strong>Secondary Purposes:</strong> Share with NBN Co (for activation), payment processors (e.g., Stripe), or affiliates (with consent).</p>
              <p className="text-muted-foreground mb-3"><strong>Disclosures:</strong> To law enforcement (warrant required, per Telecommunications Act s 306); third parties only if consented or required (e.g., ACMA reporting). Overseas: To US/UK partners (e.g., cloud storage); see APP 8 safeguards.</p>
              <p className="text-muted-foreground mb-3"><strong>Marketing:</strong> Opt-out via unsubscribe or <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a> (Spam Act 2003 compliant).</p>
              <p className="text-muted-foreground"><strong>Automated Decisions:</strong> Used for fraud detection; you can request human review (2025 amendment).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security & Breaches (APP 11)</h2>
              <p className="text-muted-foreground">We use encryption, firewalls (GI NET Cyber Guard), and access controls. Metadata retained 2 years per law. If a breach occurs (likely harm), we notify you, OAIC (within 72 hours), and affected parties ASAP.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights (APPs 12 & 13)</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access/correct your info (free, within 30 days).</li>
                <li>Opt-out of direct marketing or cookies.</li>
                <li>Complain: Email <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a>; response in 30 days. Escalate to OAIC (oaic.gov.au or 1300 363 992).</li>
              </ul>
              <p className="text-muted-foreground mt-3">From June 2025, sue for serious invasions (statutory tort).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates</h2>
              <p className="text-muted-foreground">We review annually. Changes posted here; major updates notified via email/site notice.</p>
            </section>

            <footer className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                GiNet Pty Ltd | Suite 1, 123 Example St, Sydney NSW 2000 | ABN 12 345 678 901 | <a href="mailto:privacy@ginet.au" className="text-primary hover:underline">privacy@ginet.au</a>
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
