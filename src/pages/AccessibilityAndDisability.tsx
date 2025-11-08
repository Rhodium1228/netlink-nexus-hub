import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Phone, Mail, FileText, Users, AlertCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccessibilityAndDisability = () => {
  const [alternativeFormatForm, setAlternativeFormatForm] = useState({
    name: "",
    contact: "",
    document: "",
    format: "",
    notes: ""
  });

  const [websiteIssueForm, setWebsiteIssueForm] = useState({
    name: "",
    email: "",
    pageUrl: "",
    issue: ""
  });

  const handleAlternativeFormatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll contact you within 2 business days.");
    setAlternativeFormatForm({
      name: "",
      contact: "",
      document: "",
      format: "",
      notes: ""
    });
  };

  const handleWebsiteIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reporting this issue. We'll investigate and respond soon.");
    setWebsiteIssueForm({
      name: "",
      email: "",
      pageUrl: "",
      issue: ""
    });
  };

  const today = new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:ring-2 focus:ring-primary p-3 bg-card rounded-md shadow-lg text-foreground font-medium"
      >
        Skip to main content
      </a>
      
      <Navbar />

      <main id="main" className="flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-6 py-4 text-sm">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="text-foreground">Accessibility & Disability Support</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 border-b border-border">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Accessibility & Disability Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We're committed to inclusive services. If you need information in another format or extra support, we'll make it happen.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 1. Our Commitment */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <CardTitle>Our Commitment</CardTitle>
                      <CardDescription>Making our services accessible to everyone</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    We aim to meet WCAG 2.1 AA across our website and provide reasonable adjustments for customers with disability. Tell us what you need and we'll work with you.
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Semantic, keyboard-friendly pages with visible focus states</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>High-contrast colours and readable typography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Captions/transcripts for key videos (where provided)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Screen-reader labels on forms and controls</span>
                    </li>
                  </ul>
                  <Button variant="outline" asChild>
                    <a href="/accessibility-and-disability#statement">Read our Accessibility Statement</a>
                  </Button>
                </CardContent>
              </Card>

              {/* 2. Accessible Information & Alternative Formats */}
              <Card id="alternative-formats">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <CardTitle>Accessible Information & Alternative Formats</CardTitle>
                      <CardDescription>Bills, plan details and policies in your preferred format</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground">
                    Bills, plan details and policies can be provided in alternative formats on request.
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Large print (A4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Plain text / tagged accessible PDF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Email or Braille-ready file (BRF) where feasible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Audio summary (on request)</span>
                    </li>
                  </ul>

                  <form onSubmit={handleAlternativeFormatSubmit} className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground">Request Alternative Format</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="alt-name">Name <span className="text-destructive" aria-label="required">*</span></Label>
                      <Input
                        id="alt-name"
                        required
                        value={alternativeFormatForm.name}
                        onChange={(e) => setAlternativeFormatForm({...alternativeFormatForm, name: e.target.value})}
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alt-contact">Account/Service Address or Contact <span className="text-destructive" aria-label="required">*</span></Label>
                      <Input
                        id="alt-contact"
                        required
                        value={alternativeFormatForm.contact}
                        onChange={(e) => setAlternativeFormatForm({...alternativeFormatForm, contact: e.target.value})}
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alt-document">Document Needed <span className="text-destructive" aria-label="required">*</span></Label>
                      <Select
                        required
                        value={alternativeFormatForm.document}
                        onValueChange={(value) => setAlternativeFormatForm({...alternativeFormatForm, document: value})}
                      >
                        <SelectTrigger id="alt-document" aria-required="true">
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bill">Bill</SelectItem>
                          <SelectItem value="plan-details">Plan Details</SelectItem>
                          <SelectItem value="terms">Terms & Conditions</SelectItem>
                          <SelectItem value="privacy">Privacy Policy</SelectItem>
                          <SelectItem value="aup">Acceptable Use Policy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alt-format">Preferred Format <span className="text-destructive" aria-label="required">*</span></Label>
                      <Select
                        required
                        value={alternativeFormatForm.format}
                        onValueChange={(value) => setAlternativeFormatForm({...alternativeFormatForm, format: value})}
                      >
                        <SelectTrigger id="alt-format" aria-required="true">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="large-print">Large Print (A4)</SelectItem>
                          <SelectItem value="plain-text">Plain Text</SelectItem>
                          <SelectItem value="accessible-pdf">Tagged Accessible PDF</SelectItem>
                          <SelectItem value="braille">Braille-Ready File (BRF)</SelectItem>
                          <SelectItem value="audio">Audio Summary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alt-notes">Additional Notes</Label>
                      <Textarea
                        id="alt-notes"
                        value={alternativeFormatForm.notes}
                        onChange={(e) => setAlternativeFormatForm({...alternativeFormatForm, notes: e.target.value})}
                        placeholder="Any specific requirements or preferences"
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full sm:w-auto">Submit Request</Button>
                    <div role="status" aria-live="polite" className="sr-only">Form will display success message on submission</div>
                  </form>
                </CardContent>
              </Card>

              {/* 3. Contact and Communication Options */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <CardTitle>Contact & Communication Options</CardTitle>
                      <CardDescription>Choose how to contact us</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Standard Contact</h3>
                    <p className="text-foreground">Phone: <a href="tel:0387973795" className="text-primary hover:underline">03 8797 3795</a></p>
                    <p className="text-foreground">Email: <a href="mailto:support@ginet.au" className="text-primary hover:underline">support@ginet.au</a></p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">National Relay Service (NRS)</h3>
                    <p className="text-foreground">
                      If you use the NRS, you can contact us through <a href="https://www.relayservice.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">relayservice.gov.au</a>. Tell the relay officer you want to call GI NET on 03 8797 3795.
                    </p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Translating & Interpreting Service (TIS National)</h3>
                    <p className="text-foreground">
                      Call <strong>131 450</strong> and ask to be connected to GI NET on 03 8797 3795.
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground border-t border-border pt-4">
                    <strong>Note:</strong> Authorised representatives can be added to your account on request.
                  </p>
                </CardContent>
              </Card>

              {/* 4. Making Our Services Easier to Use */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <CardTitle>Making Our Services Easier to Use</CardTitle>
                      <CardDescription>Support options to help you manage your service</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Account & Billing</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Accessible bills and reminders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Longer payment windows and bill smoothing for hardship on request</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Authorised representative or support person options</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Technical Support</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Clear, step-by-step troubleshooting guides</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Option to summarise support steps by email/SMS after a call</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Priority callback if you can't wait on hold</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Website Accessibility Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Website Accessibility Features</CardTitle>
                  <CardDescription>How we've built this site to be accessible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>"Skip to main content" link visible on focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Logical heading structure (H1→H2→H3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Form labels and error messages announced to screen readers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Keyboard-only navigation verified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Colour contrast meets or exceeds WCAG 2.1 AA</span>
                    </li>
                  </ul>

                  <form onSubmit={handleWebsiteIssueSubmit} className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground">Report a Website Accessibility Issue</h3>

                    <div className="space-y-2">
                      <Label htmlFor="issue-name">Name <span className="text-destructive" aria-label="required">*</span></Label>
                      <Input
                        id="issue-name"
                        required
                        value={websiteIssueForm.name}
                        onChange={(e) => setWebsiteIssueForm({...websiteIssueForm, name: e.target.value})}
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue-email">Email <span className="text-destructive" aria-label="required">*</span></Label>
                      <Input
                        id="issue-email"
                        type="email"
                        required
                        value={websiteIssueForm.email}
                        onChange={(e) => setWebsiteIssueForm({...websiteIssueForm, email: e.target.value})}
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue-url">Page URL <span className="text-destructive" aria-label="required">*</span></Label>
                      <Input
                        id="issue-url"
                        type="url"
                        required
                        value={websiteIssueForm.pageUrl}
                        onChange={(e) => setWebsiteIssueForm({...websiteIssueForm, pageUrl: e.target.value})}
                        placeholder="https://ginet.au/page"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue-description">Issue Description <span className="text-destructive" aria-label="required">*</span></Label>
                      <Textarea
                        id="issue-description"
                        required
                        value={websiteIssueForm.issue}
                        onChange={(e) => setWebsiteIssueForm({...websiteIssueForm, issue: e.target.value})}
                        placeholder="Please describe the accessibility issue you encountered"
                        rows={4}
                        aria-required="true"
                      />
                    </div>

                    <Button type="submit" className="w-full sm:w-auto">Submit Report</Button>
                    <div role="status" aria-live="polite" className="sr-only">Form will display success message on submission</div>
                  </form>
                </CardContent>
              </Card>

              {/* 6. Feedback & Complaints */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <CardTitle>Feedback & Complaints about Accessibility</CardTitle>
                      <CardDescription>Tell us what's not working</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Tell us what's not working and how we can improve. We aim to acknowledge within 2 business days and resolve within 10 business days.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="/complaints">Start a Complaint</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/complaints">Read our Complaints Handling Process</a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground border-t border-border pt-4">
                    <strong>Note:</strong> If you're not satisfied after we respond, you can contact the Telecommunications Industry Ombudsman (<a href="https://www.tio.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tio.com.au</a> or <a href="tel:1800062058" className="text-primary hover:underline">1800 062 058</a>).
                  </p>
                </CardContent>
              </Card>

              {/* 7. Accessibility Statement */}
              <Card id="statement">
                <CardHeader>
                  <CardTitle>Accessibility Statement</CardTitle>
                  <CardDescription>Our commitment to WCAG 2.1 AA compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    GI NET aims to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. We test keyboard navigation, colour contrast, form labels and reading order. Some legacy or third-party content may not fully meet guidelines; when this happens we'll provide an alternative on request. For accessibility support, email <a href="mailto:accessibility@ginet.au" className="text-primary hover:underline">accessibility@ginet.au</a> or call <a href="tel:0387973795" className="text-primary hover:underline">03 8797 3795</a>.
                  </p>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Known Limitations</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Some third-party embedded content (e.g., map widgets) may have accessibility limitations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Legacy PDF documents are being updated to accessible formats</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Improvement Roadmap</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ongoing accessibility audits and remediation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Staff training on disability awareness and accessible communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Enhanced self-service portal accessibility features</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Need Help Now */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help Now?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                      <a href="tel:0387973795" className="hover:text-primary transition-colors">03 8797 3795</a>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                      <a href="mailto:accessibility@ginet.au" className="hover:text-primary transition-colors break-all">accessibility@ginet.au</a>
                    </div>
                    <p className="text-sm text-muted-foreground">Hours: Mon–Fri 9am–6pm AET</p>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="#alternative-formats">Request Alternative Format</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav aria-label="Quick links">
                    <ul className="space-y-2">
                      <li>
                        <a href="/consumer-advice" className="text-foreground hover:text-primary transition-colors">Consumer Advice</a>
                      </li>
                      <li>
                        <a href="/support" className="text-foreground hover:text-primary transition-colors">Support Hub</a>
                      </li>
                      <li>
                        <a href="/complaints" className="text-foreground hover:text-primary transition-colors">Complaints</a>
                      </li>
                      <li>
                        <a href="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy</a>
                      </li>
                    </ul>
                  </nav>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="bg-accent/10">
                <CardHeader>
                  <CardTitle className="text-lg">Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground">
                  <p>Place your Wi-Fi router in the open and off the floor for best signal.</p>
                  <p>Use Ethernet for accurate speed tests.</p>
                </CardContent>
              </Card>
            </aside>

          </div>

          {/* Last Reviewed */}
          <p className="text-center text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
            Last reviewed: {today}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityAndDisability;