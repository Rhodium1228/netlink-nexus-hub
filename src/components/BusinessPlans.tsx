import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";
import BusinessQuoteModal from "./BusinessQuoteModal";

const businessPlans = [
  {
    name: "Business Basic",
    speed: "100 Mbps",
    price: "99",
    features: [
      "Perfect for small offices & browsing",
      "Connect up to 5 devices",
      "Static IP included",
      "99.95% uptime SLA",
      "Priority Australian support"
    ]
  },
  {
    name: "Business Pro",
    speed: "500 Mbps",
    price: "125",
    popular: true,
    features: [
      "Ideal for VoIP, cloud apps & CCTV",
      "Connect up to 15 devices",
      "Static IP included",
      "GI NET Cyber Guard available",
      "Onsite installation + SLA",
      "99.95% uptime"
    ]
  },
  {
    name: "Business Smart",
    speed: "500 Mbps",
    price: "115",
    features: [
      "Family-safe for Islamic businesses",
      "Adult & gambling sites blocked",
      "Connect up to 15 devices",
      "Static IP + Cyber Guard",
      "Free onsite install + training"
    ]
  },
  {
    name: "Business Ultra",
    speed: "1 Gbps",
    price: "169",
    features: [
      "4K streaming, large backups, AI workloads",
      "Unlimited devices",
      "Static IP + Enterprise security",
      "Onsite install + SLA",
      "Premium 24/7 support"
    ]
  }
];

const BusinessPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleGetQuote = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            <Building2 className="w-4 h-4" />
            For Business
          </span>
          <h2 className="heading-lg mb-4">
            Business Plans
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Reliable, secure, and scalable internet for Australian businesses
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {businessPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-background rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                plan.popular ? 'border-primary' : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold mb-1 text-foreground">{plan.name}</h3>
                <span className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {plan.speed}
                </span>
                <div>
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-success" />
                    </div>
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleGetQuote(plan.name)}
              >
                Get Quote
              </Button>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="max-w-4xl mx-auto bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Note:</strong> Business plans include static IPv4 address. GI NET Cyber Guard (managed firewall $69/mo, DDoS mitigation $10/mo) available as add-on. Subject to NBN Business Fibre availability. Pricing excludes GST.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="group"
            onClick={() => {
              setSelectedPlan("");
              setIsModalOpen(true);
            }}
          >
            Get Custom Business Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <BusinessQuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedPlan={selectedPlan}
      />
    </section>
  );
};

export default BusinessPlans;
