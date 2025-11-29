import { useEffect, useRef, useState } from "react";
import { Wifi, Shield, Cpu, Network, Check, X } from "lucide-react";
import enterpriseModem from "@/assets/enterprise-modem.jpg";

const features = [
  { icon: Wifi, label: "WiFi HIDE Technology", description: "Latest wireless standard for maximum speed" },
  { icon: Shield, label: "VLAN Support", description: "Hardware-level network segmentation" },
  { icon: Cpu, label: "Enterprise Processor", description: "Powerful chipset for heavy workloads" },
  { icon: Network, label: "Multi-Device", description: "Handle 50+ simultaneous connections" },
];

const comparison = [
  { feature: "WiFi HIDE Support", ginet: true, standard: false },
  { feature: "VLAN Configuration", ginet: true, standard: false },
  { feature: "50+ Device Support", ginet: true, standard: false },
  { feature: "Guest Network Isolation", ginet: true, standard: false },
  { feature: "IoT Security Features", ginet: true, standard: false },
  { feature: "Professional Setup", ginet: true, standard: false },
];

const EnterpriseRouter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through features
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Heart of Your Network:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              GI NET Enterprise Router
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlike commodity ISPs that provide basic consumer routers, every GI NET plan includes 
            access to our enterprise-grade hardware designed for modern home networks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Router Image with Feature Callouts */}
          <div className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              
              {/* Router Image */}
              <div className="relative bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border">
                <img 
                  src={enterpriseModem} 
                  alt="GI NET Enterprise Router" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                
                {/* Feature Callouts */}
                {features.map((feature, index) => (
                  <div
                    key={feature.label}
                    className={`absolute flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur-sm rounded-lg border shadow-lg transition-all duration-500 ${
                      activeFeature === index ? "scale-110 border-primary" : "scale-100 border-border"
                    }`}
                    style={{
                      top: index === 0 ? "10%" : index === 1 ? "30%" : index === 2 ? "60%" : "80%",
                      left: index % 2 === 0 ? "-10%" : "auto",
                      right: index % 2 === 1 ? "-10%" : "auto",
                    }}
                  >
                    <feature.icon className={`w-4 h-4 ${activeFeature === index ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-xs font-medium text-foreground whitespace-nowrap">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Badge */}
            <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="text-primary-foreground font-bold">$199 Value • Free with 36-month plan</span>
            </div>
          </div>

          {/* Features & Comparison */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeFeature === index 
                      ? "bg-primary/10 border-primary" 
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <feature.icon className={`w-8 h-8 mb-2 ${activeFeature === index ? "text-primary" : "text-muted-foreground"}`} />
                  <h4 className="font-semibold text-foreground text-sm">{feature.label}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4">
                <span className="font-semibold text-foreground text-sm">Feature</span>
                <span className="font-semibold text-primary text-sm text-center">GI NET</span>
                <span className="font-semibold text-muted-foreground text-sm text-center">Standard ISP</span>
              </div>
              {comparison.map((item, index) => (
                <div 
                  key={item.feature} 
                  className={`grid grid-cols-3 p-4 border-t border-border transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-sm text-foreground">{item.feature}</span>
                  <div className="flex justify-center">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-center">
                    <X className="w-5 h-5 text-destructive/50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseRouter;
