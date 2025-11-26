import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Wifi, Users, Headphones, Router } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import planBasicBg from "@/assets/plan-basic-bg.jpg";
import planProBg from "@/assets/plan-pro-bg.jpg";
import planUltraBg from "@/assets/plan-ultra-bg.jpg";
import animatedBg from "@/assets/plan-background-animated.mp4";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "$75",
    period: "month — No Contract",
    subtitle: "Perfect for streaming, browsing, work from home, and everyday home use.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    backgroundImage: planBasicBg,
    features: [
      {
        icon: Wifi,
        title: "Standard WiFi Network",
        why: "Reliable connectivity for up to 10 devices."
      },
      {
        icon: Users,
        title: "Optional Guest Network",
        why: "Visitors stay isolated from your main devices."
      },
      {
        icon: Router,
        title: "On-Site Installation $99",
        why: "Technician ensures perfect setup and WiFi coverage."
      },
      {
        icon: Router,
        title: "Bring Your Own Router",
        why: "Keep your current hardware or upgrade anytime."
      },
      {
        icon: Zap,
        title: "Reliable Speed",
        why: "Smooth 4K streaming and video meetings."
      }
    ],
    popular: false
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "$95",
    period: "month — No Contract",
    subtitle: "Designed for gaming, CCTV streaming, 4K video, and homes with many smart devices.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    backgroundImage: planProBg,
    features: [
      {
        icon: Shield,
        title: "VLAN Separation (3 Networks)",
        why: "Separates CCTV, smart TVs, and IoT devices from your laptops and phones. Prevents hacking spread and protects private data."
      },
      {
        icon: Shield,
        title: "Personal Secure Network",
        why: "Keeps banking, emails, work accounts safe."
      },
      {
        icon: Shield,
        title: "IoT + CCTV Isolated Network",
        why: "IoT devices are easy targets — isolation protects your home."
      },
      {
        icon: Users,
        title: "Guest WiFi Network",
        why: "Visitors can use WiFi but cannot see any of your devices."
      },
      {
        icon: Router,
        title: "GI NET Enterprise Modem — $199",
        why: "Built for speed, coverage, and advanced VLAN support."
      },
      {
        icon: Router,
        title: "Free GI NET Modem + Free Installation (36-Month Plan Option)",
        why: "Long-term customers save upfront costs."
      },
      {
        icon: Router,
        title: "On-Site Installation $99",
        why: "Technician configures VLANs, router, and WiFi optimisation."
      },
      {
        icon: Headphones,
        title: "Priority Support",
        why: "Faster resolutions and priority queue."
      }
    ],
    popular: true
  },
  {
    name: "Ultra",
    speed: "1000 Mbps (Gigabit)",
    price: "$135",
    period: "month — No Contract",
    subtitle: "Built for creators, gamers, home offices, multi-level homes, and heavy data users.",
    bonusTag: "Chance to WIN $10,000 ACSU Giveaway Every Month",
    backgroundImage: planUltraBg,
    features: [
      {
        icon: Zap,
        title: "Gigabit Speed",
        why: "Zero bottlenecks even with large backups, uploads, or 20+ devices."
      },
      {
        icon: Shield,
        title: "Full VLAN Security Suite",
        why: "Enterprise-grade protection for modern smart homes."
      },
      {
        icon: Router,
        title: "GI NET Enterprise Modem — $199",
        why: "Stronger, faster, supports high device density."
      },
      {
        icon: Router,
        title: "Free GI NET Modem + Free Installation (36-Month Plan Option)",
        why: "Best value — no upfront costs."
      },
      {
        icon: Router,
        title: "On-Site Installation $99",
        why: "Tech ensures max speed across the entire property."
      },
      {
        icon: Users,
        title: "Multi-Home Support",
        why: "Great for granny flats, studios, or home offices."
      }
    ],
    popular: false
  }
];

const PlanCarousel = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleGetStarted = (planName: string) => {
    navigate(`/signup?plan=${encodeURIComponent(planName)}`);
  };

  const handleCardHover = (index: number | null) => {
    setHoveredCard(index);
    if (videoRef.current) {
      if (index !== null) {
        videoRef.current.playbackRate = 0.5; // Slow down video on hover
      } else {
        videoRef.current.playbackRate = 1; // Normal speed when not hovering
      }
    }
  };

  return (
    <section id="plans" className="py-20 relative overflow-hidden">
      {/* Animated Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          hoveredCard !== null ? 'opacity-5' : 'opacity-15'
        }`}
      >
        <source src={animatedBg} type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-muted/90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No lock-in contracts. Switch or cancel anytime.
          </p>
        </div>

        <Carousel 
          className="max-w-5xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {plans.map((plan, index) => (
              <CarouselItem key={index}>
                <Card 
                  className={`relative overflow-hidden p-8 transition-all duration-500 border-2 ${
                    plan.popular ? 'border-primary shadow-xl' : 'border-border'
                  } ${
                    hoveredCard === index 
                      ? 'shadow-2xl scale-[1.02] ring-2 ring-primary/50' 
                      : 'hover:shadow-xl hover:scale-[1.01]'
                  }`}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  {/* Animated Background Image */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-30' : 'opacity-20'
                  }`}>
                    <img 
                      src={plan.backgroundImage} 
                      alt={`${plan.name} plan background`}
                      className="w-full h-full object-cover animate-slow-pan"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                      hoveredCard === index 
                        ? 'from-background/80 via-background/70 to-background/80' 
                        : 'from-background/90 via-background/80 to-background/90'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-primary to-accent text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                      🏆 MOST POPULAR
                    </div>
                  )}
                  
                  {/* ACSU Giveaway Badge */}
                  <div className="bg-accent/10 border border-accent/30 text-accent text-xs font-semibold px-4 py-2 rounded-lg inline-block mb-4">
                    💰 {plan.bonusTag}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-foreground">{plan.name.toUpperCase()}</h3>
                      <span className="text-primary font-semibold">— {plan.speed}</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-lg">{plan.subtitle}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="mt-1">
                          <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{feature.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            <span className="font-medium">Why:</span> {feature.why}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full text-lg font-semibold"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleGetStarted(plan.name)}
                    >
                      Choose {plan.name} {plan.speed}
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full"
                      onClick={() => {
                        document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {index === 0 ? 'Compare Plans' : 'Check Address'}
                    </Button>
                  </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PlanCarousel;
