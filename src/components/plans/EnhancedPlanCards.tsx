import { useEffect, useRef, useState } from "react";
import { Check, Star, Wifi, Shield, Filter, Zap, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: 75,
    description: "For everyday households needing reliable browsing and HD streaming.",
    icon: Wifi,
    color: "from-slate-500 to-slate-600",
    popular: false,
    features: [
      "Unlimited data",
      "HD streaming ready",
      "Up to 10 devices",
      "Standard support",
      "$99 installation",
    ],
    speedPercent: 10,
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: 95,
    description: "For gamers, CCTV users and homes with many devices. Includes VLAN security.",
    icon: Shield,
    color: "from-primary to-secondary",
    popular: true,
    features: [
      "Unlimited data",
      "4K streaming ready",
      "Up to 30 devices",
      "3 Dedicated VLANs",
      "IoT device isolation",
      "Guest network security",
      "Priority support",
      "$99 installation",
    ],
    speedPercent: 50,
  },
  {
    name: "Halal",
    speed: "500 Mbps",
    price: 95,
    description: "Filtered internet with network-level protection for safe digital environments.",
    icon: Filter,
    color: "from-emerald-500 to-teal-500",
    popular: false,
    features: [
      "Unlimited data",
      "4K streaming ready",
      "Up to 30 devices",
      "Family-safe filtering",
      "Content protection",
      "Priority support",
      "$99 installation",
    ],
    speedPercent: 50,
  },
  {
    name: "Ultra",
    speed: "1000 Mbps (Gigabit)",
    price: 135,
    description: "For power users, 4K CCTV systems, businesses, and heavy multi-device homes.",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    popular: false,
    features: [
      "Unlimited data",
      "8K streaming ready",
      "50+ devices",
      "3 Dedicated VLANs",
      "IoT device isolation",
      "Guest network security",
      "Business-grade speeds",
      "VIP support",
      "$99 installation",
    ],
    speedPercent: 100,
  },
];

const EnhancedPlanCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            plans.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background" id="plans-comparison">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Speed Plans{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Engineered for Every Need
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All plans include unlimited data, no lock-in contracts, and local Melbourne-based support.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group rounded-2xl border transition-all duration-500 ${
                plan.popular 
                  ? "border-primary bg-gradient-to-b from-primary/5 to-background" 
                  : "border-border bg-card"
              } ${
                visibleCards.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              } ${
                hoveredCard === index ? "scale-[1.02] shadow-2xl z-10" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <span className="text-xs font-bold text-primary-foreground flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Plan Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <span className="text-sm text-muted-foreground">{plan.speed}</span>
                  </div>
                </div>

                {/* Speed Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${plan.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: visibleCards.includes(index) ? `${plan.speedPercent}%` : "0%",
                        transitionDelay: `${index * 150 + 300}ms`
                      }}
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* ACSU Badge */}
                <div className="flex items-center gap-2 px-3 py-2 bg-accent/20 rounded-lg mb-6">
                  <Gift className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-foreground">WIN $10,000 ACSU Giveaway Entry</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                        visibleCards.includes(index) 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${(index * 150) + (featureIndex * 50) + 200}ms` }}
                    >
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full group/btn ${plan.popular ? "" : "variant-outline"}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => navigate(`/signup?plan=${encodeURIComponent(plan.name)}`)}
                >
                  Get {plan.name}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* 36-Month Option */}
                <p className="text-xs text-center text-muted-foreground mt-4">
                  36-month: Free modem + Free installation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedPlanCards;
