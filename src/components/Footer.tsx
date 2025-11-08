import { Wifi, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Residential Internet", "Business Solutions", "TV & Streaming", "Phone Service"]
    },
    {
      title: "Support",
      links: ["Help Center", "Network Status", "Contact Us", "Installation Guide"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Room", "Legal"]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">
                GiNet
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Connecting communities with lightning-fast fiber-optic internet. Experience the future of connectivity today.
            </p>
            <div className="text-sm space-y-1 mb-6">
              <p className="text-muted-foreground"><strong className="text-foreground">ABN:</strong> 12 345 678 901</p>
              <p className="text-muted-foreground"><strong className="text-foreground">Email:</strong> support@ginet.au</p>
              <p className="text-muted-foreground"><strong className="text-foreground">Phone:</strong> 1300 GI NET</p>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <span>•</span>
            <a href="/business-terms" className="hover:text-primary transition-colors">Business Terms</a>
            <span>•</span>
            <a href="/halal-policy" className="hover:text-primary transition-colors">Halal Policy</a>
            <span>•</span>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          <p className="text-center text-muted-foreground text-sm">
            © 2024 GiNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
