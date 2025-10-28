import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "39.99",
    features: [
      "Perfect for browsing & streaming",
      "Connect up to 5 devices",
      "24/7 customer support",
      "Free installation"
    ],
    popular: false
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "59.99",
    features: [
      "Ideal for families & gaming",
      "Connect up to 15 devices",
      "Priority customer support",
      "Free Wi-Fi router included",
      "No contracts required"
    ],
    popular: true
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: "89.99",
    features: [
      "Maximum speed for power users",
      "Unlimited devices",
      "Premium 24/7 support",
      "Advanced Wi-Fi 6 router",
      "Free security suite included"
    ],
    popular: false
  }
];

const Plans = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Speed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple pricing, powerful performance. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`relative p-8 rounded-3xl transition-all hover:scale-105 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl' 
                  : 'border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {plan.speed}
                </div>
                <div className="text-muted-foreground">
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  <span>/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          All plans include unlimited data and no annual contracts
        </p>
      </div>
    </section>
  );
};

export default Plans;
