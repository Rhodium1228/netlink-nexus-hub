import { CANONICAL } from "@/config/canonical";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="GI NET Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-foreground">{CANONICAL.company.displayName}</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Australian-owned Internet Provider. Fast. Secure. Professionally installed.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`tel:${CANONICAL.contact.phone.normalized}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>{CANONICAL.contact.phone.display}</span>
              </a>
              <a href={`mailto:${CANONICAL.contact.email.support}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>{CANONICAL.contact.email.support}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">{CANONICAL.address.formatted}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" }
              ].map(({ icon: Icon, label }) => (
                <a 
                  key={label}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" 
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Plans */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">Plans</h4>
            <ul className="space-y-3">
              <li><a href="/#plans" className="text-muted-foreground hover:text-primary transition-colors text-sm">Residential Plans</a></li>
              <li><a href="/#plans" className="text-muted-foreground hover:text-primary transition-colors text-sm">Business Plans</a></li>
              <li><a href="/critical-information-summaries" className="text-muted-foreground hover:text-primary transition-colors text-sm">Plan Details (CIS)</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">Support</h4>
            <ul className="space-y-3">
              <li><a href="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Service Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/aup" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/consumer-advice" className="text-muted-foreground hover:text-primary transition-colors text-sm">Consumer Advice</a></li>
              <li><a href="/accessibility-and-disability" className="text-muted-foreground hover:text-primary transition-colors text-sm">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GI NET — Australian-Owned Internet Provider. All rights reserved.
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
