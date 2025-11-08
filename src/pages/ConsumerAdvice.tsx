import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Gauge, 
  CreditCard, 
  Home, 
  Accessibility, 
  MessageSquareWarning,
  FileText,
  Phone,
  Mail,
  AlertTriangle,
  Lightbulb
} from "lucide-react";

const ConsumerAdvice = () => {
  const today = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <Helmet>
        <title>Consumer Advice | GI NET Australian Broadband</title>
        <meta name="description" content="Important information to help you get the most from your GI NET service — speeds, billing, safety, support, and complaints guidance." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Skip link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        >
          Skip to main content
        </a>

        <main id="main-content" className="pt-20">
          {/* Breadcrumb */}
          <div className="container mx-auto px-6 py-4">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-foreground">Consumer Advice</li>
              </ol>
            </nav>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Consumer Advice
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Important information to help you get the most from your GI NET service — from speeds and billing to safety and support.
              </p>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="container mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* 1. Scams & Online Safety */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Scams & Online Safety</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Beware of calls, SMS or emails asking for your account details or payment codes. GI NET will never ask for your password or one-time codes over the phone or via links.
                    </p>
                    <p className="text-muted-foreground">
                      If you receive a suspicious message: do not click links, do not share codes, and contact us directly.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Report a suspected scam to support@ginet.au</li>
                      <li>Change your portal password if you think it's compromised</li>
                      <li>Enable 2-step verification on your email and GI NET portal</li>
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button asChild>
                        <a href="mailto:support@ginet.au?subject=Scam Report">Report a scam</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/support#security">Security tips</a>
                      </Button>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg mt-4">
                      <AlertTriangle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        If money has been lost, contact your bank immediately.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* 2. Understanding Speeds */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Gauge className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Understanding Speeds</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Typical evening speeds (7–11pm) reflect the performance most customers can expect during busy hours. Actual speeds vary due to in-home Wi-Fi, device limits, internal wiring and network conditions.
                    </p>
                    <Button variant="link" asChild className="px-0">
                      <a href="/plans">See our plan speeds →</a>
                    </Button>
                    
                    <div className="space-y-3 pt-2">
                      <div className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">What affects my Wi-Fi?</h3>
                        <p className="text-sm text-muted-foreground">
                          Router placement, interference from other devices, number of connected devices, and physical obstructions.
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">How do I test speed?</h3>
                        <p className="text-sm text-muted-foreground">
                          Use Ethernet where possible; test multiple times at different hours for accurate results.
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-foreground mb-1">What is CGNAT vs Static IP?</h3>
                        <p className="text-sm text-muted-foreground">
                          CGNAT shares IP addresses among customers. Static IP provides a dedicated address for hosting or remote access.{" "}
                          <a href="/support#static-ip" className="text-primary hover:underline">Learn more</a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 3. Billing, Payments & Financial Hardship */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Billing, Payments & Financial Hardship</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We offer clear billing with no hidden fees. If you're experiencing financial difficulty, we're here to help with flexible options.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>View bills and usage in the customer portal</li>
                      <li>Payment methods: card/direct debit (no card numbers stored by GI NET)</li>
                      <li>Payment reminders available by email/SMS</li>
                      <li>Financial hardship assistance: tailored payment plans on request</li>
                    </ul>
                    <Button asChild>
                      <a href="/support#billing-help">Request payment support</a>
                    </Button>
                    <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg mt-4">
                      <AlertTriangle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Contact us early — it's easier to help before a bill becomes overdue.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* 4. Moving Home */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Home className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Moving Home</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Moving? We can transfer or reconnect your service. Tell us your new address and preferred date — we'll check availability and schedule activation.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground text-sm">Checklist:</p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                        <li>Provide new address</li>
                        <li>Confirm moving date</li>
                        <li>Provide access details</li>
                        <li>Share preferred contact times</li>
                      </ul>
                    </div>
                    <Button asChild>
                      <a href="/support#moving-home">Book a move</a>
                    </Button>
                  </CardContent>
                </Card>

                {/* 5. Accessibility & Inclusive Support */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Accessibility className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Accessibility & Inclusive Support</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We aim to meet WCAG 2.1 AA across our website and offer alternative formats on request.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Accessible copies of bills and policies available</li>
                      <li>Support via email/phone/chat; we can speak slowly, repeat, and summarise</li>
                      <li>You can nominate an authorised representative for your account</li>
                    </ul>
                    <Button variant="outline" asChild>
                      <a href="/support#accessibility">Accessibility options</a>
                    </Button>
                  </CardContent>
                </Card>

                {/* 6. Complaints & Escalation */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MessageSquareWarning className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Complaints & Escalation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      If something's not right, we want to fix it.
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Contact us:</strong> support@ginet.au or 03 8797 3795 — we aim to acknowledge within 2 business days.
                      </li>
                      <li>
                        <strong className="text-foreground">Resolution:</strong> we aim to resolve within 10 business days and keep you updated.
                      </li>
                      <li>
                        <strong className="text-foreground">If unresolved,</strong> you may contact the Telecommunications Industry Ombudsman (tio.com.au or 1800 062 058).
                      </li>
                    </ol>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button asChild>
                        <a href="/support#complaints">Start a complaint</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.tio.com.au" target="_blank" rel="noopener noreferrer">
                          Contact the TIO
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 7. Our Policies */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Our Policies</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <a href="/privacy" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all group">
                        <h3 className="font-semibold text-foreground group-hover:text-primary mb-1">Privacy Policy</h3>
                        <p className="text-sm text-muted-foreground">How we handle your personal information</p>
                      </a>
                      <a href="/terms" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all group">
                        <h3 className="font-semibold text-foreground group-hover:text-primary mb-1">Terms & Conditions</h3>
                        <p className="text-sm text-muted-foreground">Service terms and responsibilities</p>
                      </a>
                      <a href="/support" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all group">
                        <h3 className="font-semibold text-foreground group-hover:text-primary mb-1">Support Hub</h3>
                        <p className="text-sm text-muted-foreground">Help centre and contact options</p>
                      </a>
                      <a href="/status" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all group">
                        <h3 className="font-semibold text-foreground group-hover:text-primary mb-1">Service Status</h3>
                        <p className="text-sm text-muted-foreground">Network outages and maintenance</p>
                      </a>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Need Help Now */}
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Need help now?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href="tel:0387973795" className="text-sm text-primary hover:underline">03 8797 3795</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href="mailto:support@ginet.au" className="text-sm text-primary hover:underline">support@ginet.au</a>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong className="text-foreground">Hours:</strong> Mon–Fri 9am–6pm AET
                      </p>
                      <Button className="w-full" asChild>
                        <a href="/support#contact">Open a support ticket</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <a href="/plans" className="text-sm text-primary hover:underline">→ Check plan speeds</a>
                      </li>
                      <li>
                        <a href="/support#billing-help" className="text-sm text-primary hover:underline">→ Payment help</a>
                      </li>
                      <li>
                        <a href="/support#moving-home" className="text-sm text-primary hover:underline">→ Moving home</a>
                      </li>
                      <li>
                        <a href="mailto:support@ginet.au?subject=Scam Report" className="text-sm text-primary hover:underline">→ Report a scam</a>
                      </li>
                      <li>
                        <a href="/support#complaints" className="text-sm text-primary hover:underline">→ Complaints process</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Tips */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Tips</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Place your Wi-Fi router in the open, off the floor, away from obstructions.</p>
                    <p>Use Ethernet for speed testing.</p>
                  </CardContent>
                </Card>
              </aside>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Last reviewed: {today}
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ConsumerAdvice;
