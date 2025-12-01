import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Wifi, Users, Headphones, Router, Star, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "$75",
    period: "/month",
    subtitle: "Perfect for streaming, browsing, work from home, and everyday home use.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    features: [
      "Standard WiFi Network",
      "Up to 10 devices",
      "Optional Guest Network",
      "On-Site Installation $99",
      "HD streaming ready"
    ],
    popular: false,
    color: "from-slate-500 to-slate-600"
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "$95",
    period: "/month",
    subtitle: "Designed for gaming, CCTV streaming, 4K video, and homes with many smart devices.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    features: [
      "3 Dedicated VLANs",
      "Up to 30 devices",
      "IoT device isolation",
      "Guest network security",
      "GI NET Enterprise Modem — $199",
      "Priority support",
      "On-Site Installation $99"
    ],
    popular: true,
    color: "from-primary to-primary/80"
  },
  {
    name: "Halal",
    speed: "500 Mbps",
    price: "$95",
    period: "/month",
    subtitle: "Filtered internet with network-level protection for safe digital environments.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    features: [
      "Family-safe content filtering",
      "Adult & gambling site blocking",
      "Up to 30 devices",
      "4K streaming ready",
      "GI NET Enterprise Modem — $199",
      "Priority support",
      "On-Site Installation $99"
    ],
    popular: false,
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Ultra",
    speed: "1000 Mbps",
    price: "$135",
    period: "/month",
    subtitle: "Built for creators, gamers, home offices, multi-level homes, and heavy data users.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    features: [
      "Full VLAN Security Suite",
      "50+ devices",
      "8K streaming ready",
      "Business-grade speeds",
      "GI NET Enterprise Modem — $199",
      "VIP support",
      "On-Site Installation $99"
    ],
    popular: false,
    color: "from-violet-500 to-purple-600"
  }
];

const PlanCarousel = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleGetStarted = (planName: string) => {
    navigate(`/signup?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <section id="plans" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>
      
      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Pricing Plans
          </span>
          <h2 className="heading-lg mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            No lock-in contracts. Switch or cancel anytime. All plans include unlimited data.
          </p>
        </div>

        {/* Plans Carousel */}
        <Carousel 
          className="max-w-6xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {plans.map((plan, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className={`relative h-full bg-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    plan.popular 
                      ? 'border-primary shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  } ${
                    hoveredCard === index 
                      ? 'shadow-xl scale-[1.02]' 
                      : 'hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-xl flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> MOST POPULAR
                    </div>
                  )}

                  <div className="p-6">
                    {/* Plan Name & Speed */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                      <span className="text-sm text-muted-foreground">{plan.speed}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">No contract required</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{plan.subtitle}</p>

                    {/* ACSU Badge */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-warning/10 border border-warning/20 rounded-lg mb-6">
                      <span className="text-xs font-medium text-foreground">🎁 $10,000 ACSU Giveaway Entry</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-success'}`} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                      {plan.features.length > 5 && (
                        <li className="text-sm text-muted-foreground pl-6">
                          +{plan.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full group ${plan.popular ? '' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleGetStarted(plan.name)}
                    >
                      Get {plan.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {/* 36-Month Option */}
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      36-month: Free modem + Free installation
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => navigate('/plans')}
            className="group"
          >
            Compare all plans in detail
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlanCarousel;
