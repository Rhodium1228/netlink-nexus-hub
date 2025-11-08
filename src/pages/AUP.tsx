import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, Shield } from "lucide-react";

const AUP = () => {
  return (
    <>
      <Helmet>
        <title>GiNet Acceptable Use Policy | Internet Services</title>
        <meta name="description" content="GiNet's Acceptable Use Policy (AUP) for NBN fibre internet. Rules for lawful, safe, and fair use." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <article className="container mx-auto px-6 py-12 max-w-4xl">
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">GiNet Acceptable Use Policy (AUP)</h1>
              <p className="text-lg">
                <strong>Last Updated: November 8, 2025</strong>
              </p>
            </header>

            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
              <p className="font-semibold text-foreground text-lg mb-2">
                This policy keeps the internet fast, safe, and fair for everyone.
              </p>
              <p className="text-muted-foreground">
                By using GiNet internet services, you agree to follow these rules.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Who This Policy Applies To</h2>
              <p className="text-muted-foreground mb-3">This AUP applies to <strong className="text-foreground">all users</strong> of GiNet services, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Residential customers (Basic, Pro, Halal, Ultra plans)</li>
                <li>Business customers (Business Basic, Pro, Halal, Ultra)</li>
                <li>Anyone using a GiNet connection (including guests, employees, or family)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                GiNet Pty Ltd (ABN 71 608 672 608) provides NBN-based fibre internet. This AUP forms part of your <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Your Responsibilities</h2>
              <p className="text-muted-foreground mb-3">You <strong className="text-foreground">must</strong>:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the service <strong className="text-foreground">lawfully</strong> and in line with Australian community standards</li>
                <li>Respect others' rights (privacy, copyright, safety)</li>
                <li>Keep your devices and passwords secure</li>
                <li>Comply with all applicable laws, including the <em>Online Safety Act 2021</em> and <em>Copyright Act 1968</em></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">You <strong className="text-foreground">must not</strong> use GiNet services to:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Illegal or Harmful Content</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access, share, or distribute <strong className="text-foreground">child exploitation material</strong> (mandatory reporting to eSafety)</li>
                    <li>Promote terrorism, violence, or hate speech</li>
                    <li>Engage in fraud, phishing, or identity theft</li>
                    <li>Defame, harass, bully, or threaten anyone (including cyber abuse)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Network Abuse</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Send spam, bulk unsolicited emails, or SMS (breaches <em>Spam Act 2003</em>)</li>
                    <li>Launch DDoS attacks, malware, or viruses</li>
                    <li>Scan ports, hack, or interfere with other networks</li>
                    <li>Run unauthorised servers (e.g., public torrents, proxy relays)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Copyright & Intellectual Property</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Download or share copyrighted material without permission (e.g., movies, music, software)</li>
                    <li>Use peer-to-peer (P2P) for illegal file sharing</li>
                    <li>GiNet participates in the <strong className="text-foreground">Copyright Notice Scheme</strong> — repeated infringers may be suspended</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Excessive or Disruptive Use</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Use the service in a way that <strong className="text-foreground">degrades performance</strong> for others (e.g., 24/7 high-bandwidth bots)</li>
                    <li>Resell or share the connection commercially without written approval</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 mt-6 rounded-r-lg flex gap-3">
                <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Halal Plans:</p>
                  <p className="text-muted-foreground">
                    Adult sites and online gambling are <strong className="text-foreground">automatically blocked</strong> via GI NET Cyber Guard. Attempts to bypass filtering may result in suspension.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Monitoring & Enforcement</h2>
              <p className="text-muted-foreground mb-3">We may:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Monitor traffic for security, performance, and compliance (per <em>Telecommunications Act s 313</em>)</li>
                <li>Block malicious IPs, filter spam, or throttle abusive traffic</li>
                <li>Issue warnings, suspend, or terminate service for breaches</li>
                <li>Report illegal activity to authorities (AFP, eSafety, ACMA)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong className="text-foreground">You will receive notice</strong> before suspension unless urgent (e.g., child safety).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Fair Use & Network Management</h2>
              <p className="text-muted-foreground mb-3">
                All plans include <strong className="text-foreground">unlimited data</strong>. However, we manage the network to ensure fairness:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Peak-hour prioritisation for interactive use (browsing, streaming, gaming)</li>
                <li>Temporary shaping of heavy P2P during congestion (7–11 PM)</li>
                <li>Business plans include <strong className="text-foreground">priority traffic</strong> and 99.95% uptime SLA</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Full details in your plan's <a href="/terms" className="text-primary hover:underline">Critical Information Summary</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Reporting Abuse</h2>
              <p className="text-muted-foreground mb-3">Help keep the network safe:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Report spam/phishing: <a href="mailto:abuse@ginet.au" className="text-primary hover:underline">abuse@ginet.au</a></li>
                <li>Report child safety issues: Forward to <a href="https://www.esafety.gov.au/report" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eSafety.gov.au</a></li>
                <li>General complaints: <a href="mailto:support@ginet.au" className="text-primary hover:underline">support@ginet.au</a> or 03 8797 3795</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this AUP. Changes are posted here and emailed to active customers. Continued use = acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <div className="text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">GiNet Pty Ltd</p>
                <p>12 Stelvio Close, Lynbrook VIC 3975, Australia</p>
                <p>ABN 71 608 672 608</p>
                <p>Email: <a href="mailto:abuse@ginet.au" className="text-primary hover:underline">abuse@ginet.au</a></p>
                <p>Phone: 03 8797 3795</p>
              </div>
            </section>

            <footer className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                GiNet Pty Ltd | ABN 71 608 672 608 | 12 Stelvio Close, Lynbrook VIC 3975, Australia | <a href="mailto:abuse@ginet.au" className="text-primary hover:underline">abuse@ginet.au</a> | 03 8797 3795
              </p>
            </footer>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AUP;
