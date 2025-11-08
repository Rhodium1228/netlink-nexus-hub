import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
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
      "GI NET Cyber Guard (firewall $69/mo optional + DDoS $15/mo optional) available for all businesses",
      "Dedicated business installation & SLA",
      "99.95% uptime",
      "Priority Australian support"
    ]
  },
  {
    name: "Business Pro",
    speed: "500 Mbps",
    price: "125",
    features: [
      "Ideal for VoIP, cloud apps & CCTV",
      "Connect up to 15 devices",
      "Static IP included",
      "GI NET Cyber Guard (firewall $69/mo optional + DDoS $15/mo optional)",
      "BYO router or WiFi 6 $199",
      "Onsite installation + SLA",
      "99.95% uptime",
      "Priority support"
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
      "Static IP + GI NET Cyber Guard (firewall $69/mo optional + DDoS $15/mo optional)",
      "GI NET router $199",
      "Free onsite install + training + SLA",
      "99.95% uptime",
      "Priority support"
    ]
  },
  {
    name: "Business Ultra",
    speed: "1 Gbps",
    price: "169",
    features: [
      "For 4K streaming, large backups, AI workloads",
      "Unlimited devices",
      "Static IP + GI NET Cyber Guard (firewall $69/mo optional + DDoS $15/mo optional)",
      "BYO or WiFi 6 router $199",
      "Onsite install + SLA",
      "Free enterprise security suite",
      "99.95% uptime",
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
    <section className="py-20 px-6 bg-background">
      <div className="bg-primary py-16 px-6 -mx-6 mb-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Business Plans
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Reliable, secure, and scalable internet for Australian businesses
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {businessPlans.map((plan, idx) => (
            <Card 
              key={idx} 
              className="relative p-8 rounded-3xl transition-all hover:scale-105 border border-border bg-card shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">{plan.name}</h3>
                <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {plan.speed}
                </div>
                <div className="text-muted-foreground">
                  <span className="text-4xl font-bold text-accent">${plan.price}</span>
                  <span>/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                size="lg"
                onClick={() => handleGetQuote(plan.name)}
              >
                Get Quote
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-muted/30 border border-border rounded-2xl p-8">
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            <strong className="text-foreground">Compliance & Pricing Note:</strong> Business plans include static IPv4 address and GI NET Cyber Guard (managed firewall $69 per month, DDoS mitigation $10 per month, content filtering $10 per month). Subject to NBN Business Fibre availability. Full SLA and Cyber Guard terms at /business-terms. Pricing excludes GST. Speeds are maximum NBN wholesale tiers. Typical evening speeds: 80–95% of max. Check availability at nbnco.com.au.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-12 py-6 h-auto"
            onClick={() => {
              setSelectedPlan("");
              setIsModalOpen(true);
            }}
          >
            Get Business Quote
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
