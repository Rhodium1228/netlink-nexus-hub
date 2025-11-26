import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Feature {
  text: string;
  why?: string;
}

interface Plan {
  name: string;
  speed: string;
  price: string;
  subtitle: string;
  features: Feature[];
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "BASIC",
    speed: "100 Mbps",
    price: "75",
    subtitle: "Perfect for streaming, browsing, work from home, and everyday home use.",
    features: [
      { 
        text: "Standard WiFi Network",
        why: "Reliable connectivity for up to 10 devices"
      },
      { 
        text: "Optional Guest Network",
        why: "Visitors stay isolated from your main devices"
      },
      { 
        text: "On-Site Installation $99",
        why: "Technician ensures perfect setup and WiFi coverage"
      },
      { 
        text: "Bring Your Own Router",
        why: "Keep your current hardware or upgrade anytime"
      },
      { 
        text: "Reliable Speed",
        why: "Smooth 4K streaming and video meetings"
      },
      { 
        text: "ACSU Giveaway Entry",
        why: "Chance to WIN $10,000 every month"
      }
    ],
    popular: false
  },
  {
    name: "PRO",
    speed: "500 Mbps",
    price: "95",
    subtitle: "Designed for gaming, CCTV streaming, 4K video, and homes with many smart devices.",
    features: [
      { 
        text: "VLAN Separation (3 Networks)",
        why: "Separates CCTV, smart TVs, and IoT devices from your laptops and phones. Prevents hacking spread and protects private data."
      },
      { 
        text: "Personal Secure Network",
        why: "Keeps banking, emails, work accounts safe"
      },
      { 
        text: "IoT + CCTV Isolated Network",
        why: "IoT devices are easy targets — isolation protects your home"
      },
      { 
        text: "Guest WiFi Network",
        why: "Visitors can use WiFi but cannot see any of your devices"
      },
      { 
        text: "GI NET Enterprise Modem — $199",
        why: "Built for speed, coverage, and advanced VLAN support"
      },
      { 
        text: "Free Modem + Free Installation",
        why: "Available with 36-month plan — save upfront costs"
      },
      { 
        text: "On-Site Installation $99",
        why: "Technician configures VLANs, router, and WiFi optimisation"
      },
      { 
        text: "Priority Support",
        why: "Faster resolutions and priority queue"
      },
      { 
        text: "ACSU Giveaway Entry",
        why: "Chance to WIN $10,000 every month"
      }
    ],
    popular: true
  },
  {
    name: "ULTRA",
    speed: "1000 Mbps",
    price: "135",
    subtitle: "Built for creators, gamers, home offices, multi-level homes, and heavy data users.",
    features: [
      { 
        text: "Gigabit Speed",
        why: "Zero bottlenecks even with large backups, uploads, or 20+ devices"
      },
      { 
        text: "Full VLAN Security Suite",
        why: "Enterprise-grade protection for modern smart homes"
      },
      { 
        text: "GI NET Enterprise Modem — $199",
        why: "Stronger, faster, supports high device density"
      },
      { 
        text: "Free Modem + Free Installation",
        why: "Available with 36-month plan — best value, no upfront costs"
      },
      { 
        text: "On-Site Installation $99",
        why: "Tech ensures max speed across the entire property"
      },
      { 
        text: "Multi-Home Support",
        why: "Great for granny flats, studios, or home offices"
      },
      { 
        text: "ACSU Giveaway Entry",
        why: "Chance to WIN $10,000 every month"
      }
    ],
    popular: false
  }
];

const PlansCarousel = () => {
  const navigate = useNavigate();

  const handleGetStarted = (planName: string) => {
    navigate(`/signup?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <section id="plans" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Speed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple pricing, powerful performance. No hidden fees, no surprises.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {plans.map((plan, idx) => (
                <CarouselItem key={idx}>
                  <Card 
                    className={`relative p-10 rounded-3xl transition-all hover:scale-[1.02] ${
                      plan.popular 
                        ? 'border-2 border-primary shadow-premium' 
                        : 'border border-border shadow-card'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary text-white px-8 py-2 rounded-full text-sm font-bold shadow-premium">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                        {plan.name} — {plan.speed}
                      </div>
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground text-lg">/month — No Contract</span>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {plan.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-3 group">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                            <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground text-base">{feature.text}</p>
                            {feature.why && (
                              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{feature.why}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="flex-1 h-12 text-base font-semibold shadow-premium" 
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => handleGetStarted(plan.name)}
                      >
                        Choose {plan.name} {plan.speed}
                      </Button>
                      <Button 
                        className="flex-1 h-12 text-base font-semibold" 
                        variant="outline"
                        onClick={() => {
                          document.getElementById('address-checker')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Check Address
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-muted/30 border border-border rounded-2xl p-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Compliance Notice:</strong> Speeds are maximum NBN wholesale tiers. Typical evening speeds (7–11pm): Basic 80–100 Mbps, Pro 400–500 Mbps, Ultra 800–950 Mbps. Actual speeds vary by location, wiring, and congestion. Check your address at nbnco.com.au. Unlimited data. No lock-in contracts. Full terms at /terms. Privacy policy at /privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansCarousel;
