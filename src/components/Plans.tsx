import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "69",
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
    price: "95",
    features: [
      "🚀 500 Mbps ultra-fast speed for gaming, CCTV, 4K streaming & remote work",
      "🔗 Supports up to 15 devices simultaneously",
      "🛠 Priority customer support with faster resolutions",
      "📶 BYO Wi-Fi router or WiFi 6 router $199",
      "👨‍🔧 Free onsite installation & network setup included",
      "1️⃣ Personal/Work VLAN (Secure Zone) for laptops & phones",
      "2️⃣ Smart Device + CCTV VLAN (IoT Zone) for cameras & appliances",
      "3️⃣ Guest WiFi Network (Isolated) with QR code login",
      "🔒 Business-grade network security included",
      "No lock-in contracts"
    ],
    popular: true
  },
  {
    name: "Halal",
    speed: "500 Mbps",
    price: "95",
    features: [
      "Family-friendly internet",
      "Adult sites & gambling blocked",
      "Best for gaming & CCTV streaming",
      "Connect up to 15 devices",
      "GI NET router $199",
      "Free onsite installation & training",
      "Priority customer support"
    ],
    popular: false
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: "129",
    features: [
      "Perfect for gaming & 4K CCTV streaming",
      "Unlimited devices",
      "Premium 24/7 support",
      "BYO Wi-Fi router or WiFi 6 router $199",
      "Onsite installation included",
      "Free security suite included"
    ],
    popular: false
  }
];

const Plans = () => {
  const navigate = useNavigate();

  const handleGetStarted = (planName: string) => {
    navigate(`/signup?plan=${encodeURIComponent(planName)}`);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                onClick={() => handleGetStarted(plan.name)}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-muted/30 border border-border rounded-2xl p-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Compliance Notice:</strong> Speeds are maximum NBN wholesale tiers. Typical evening speeds (7–11pm): Basic 80–100 Mbps, Pro/Halal 400–500 Mbps, Ultra 800–950 Mbps. Actual speeds vary by location, wiring, and congestion. Check your address at nbnco.com.au. Unlimited data. No lock-in contracts. Full terms at /terms. Privacy policy at /privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
