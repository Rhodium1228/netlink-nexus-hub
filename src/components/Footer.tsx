import { CANONICAL } from "@/config/canonical";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-foreground">{CANONICAL.company.displayName}</h3>
            <p className="text-muted-foreground mb-4">
              Australian-owned Internet Provider. Fast. Secure. Professionally installed.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Address:</strong><br />{CANONICAL.address.formatted}</p>
              <p><strong>Sales:</strong> Sales@ginet.au</p>
              <p><strong>Support:</strong> {CANONICAL.contact.email.support}</p>
              <p><strong>Phone:</strong> {CANONICAL.contact.phone.display}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Plans */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Plans</h4>
            <ul className="space-y-2">
              <li><a href="/#plans" className="text-muted-foreground hover:text-primary transition-colors">Residential Plans</a></li>
              <li><a href="/#plans" className="text-muted-foreground hover:text-primary transition-colors">Business Plans</a></li>
              <li><a href="/critical-information-summaries" className="text-muted-foreground hover:text-primary transition-colors">Plan Details (CIS)</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="/support" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Service Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/aup" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/consumer-advice" className="text-muted-foreground hover:text-primary transition-colors">Consumer Advice</a></li>
              <li><a href="/accessibility-and-disability" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © GI NET — Australian-Owned Internet Provider. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              ABN: {CANONICAL.company.abn.formatted}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
