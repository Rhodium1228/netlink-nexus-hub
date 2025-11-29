import { useEffect, useRef, useState } from "react";
import { Zap, Shield, Headphones } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Performance & Power",
    description: "Premium hardware and speed plans engineered for demanding use cases.",
    features: ["Up to 1 Gbps speeds", "Enterprise-grade router", "Unlimited data", "Low latency gaming"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Protection & Privacy",
    description: "Enterprise-grade security features made standard for every home.",
    features: ["3 Dedicated VLANs", "IoT device isolation", "Guest network security", "Family-safe filtering"],
    color: "from-primary to-secondary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "Professional Service",
    description: "A premium end-to-end experience, from installation to ecosystem integration.",
    features: ["Professional installation", "Melbourne-based support", "ACSU partnership", "No lock-in contracts"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
];

const ThreePillars = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            pillars.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
            });
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

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Three Pillars of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Excellence
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We engineered an ISP for the modern Australian household. Fast internet, protected networks, 
            and a safer, cleaner experience for every family.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                visibleItems.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${pillar.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className={`w-7 h-7 bg-gradient-to-br ${pillar.color} text-transparent bg-clip-text`} style={{ stroke: "url(#gradient)" }} />
                <pillar.icon className={`w-7 h-7 text-primary`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground mb-6">{pillar.description}</p>

              {/* Features List */}
              <ul className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className={`flex items-center gap-3 text-sm text-foreground transition-all duration-300 ${
                      visibleItems.includes(index) 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
