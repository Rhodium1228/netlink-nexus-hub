import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { CANONICAL } from "@/config/canonical";

const FooterModern = () => {
  // Debug log to check CANONICAL structure
  console.log("CANONICAL:", CANONICAL);
  console.log("CANONICAL.address:", CANONICAL?.address);
  
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{CANONICAL?.company?.name || "GI NET Pty Ltd"}</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Melbourne's smarter, safer internet provider. Professional installation, 
              enterprise-grade security, and no lock-in contracts.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${CANONICAL?.contact?.phone?.normalized}`} className="text-background/90 hover:text-primary transition-colors">
                  {CANONICAL?.contact?.phone?.display || "03 8797 3795"}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${CANONICAL?.contact?.email?.sales || "sales@ginet.au"}`} className="text-background/90 hover:text-primary transition-colors">
                    Sales: {CANONICAL?.contact?.email?.sales || "sales@ginet.au"}
                  </a>
                  <a href={`mailto:${CANONICAL?.contact?.email?.support || "support@ginet.au"}`} className="text-background/90 hover:text-primary transition-colors">
                    Support: {CANONICAL?.contact?.email?.support || "support@ginet.au"}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-background/90">
                  {CANONICAL?.address?.formatted || "12 Stelvio Close, Lynbrook VIC 3975, Australia"}
                </span>
              </div>
            </div>
          </div>

          {/* Plans */}
          <div>
            <h4 className="font-bold text-lg mb-4">Plans</h4>
            <ul className="space-y-3">
              <li><Link to="/?plan=basic#plans" className="text-background/80 hover:text-primary transition-colors">Basic 100 Mbps</Link></li>
              <li><Link to="/?plan=pro#plans" className="text-background/80 hover:text-primary transition-colors">Pro 500 Mbps</Link></li>
              <li><Link to="/?plan=ultra#plans" className="text-background/80 hover:text-primary transition-colors">Ultra 1 Gbps</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-background/80 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/critical-information-summaries" className="text-background/80 hover:text-primary transition-colors">Critical Info</Link></li>
              <li><Link to="/consumer-advice" className="text-background/80 hover:text-primary transition-colors">Consumer Advice</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/acceptable-use-policy" className="text-background/80 hover:text-primary transition-colors">AUP</Link></li>
              <li><Link to="/accessibility-and-disability" className="text-background/80 hover:text-primary transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} GI NET — Australian-Owned Internet Provider. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
