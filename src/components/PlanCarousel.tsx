import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Wifi, Users, Headphones, Router } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import planBasicBg from "@/assets/plan-basic-bg.jpg";
import planProBg from "@/assets/plan-pro-bg.jpg";
import planUltraBg from "@/assets/plan-ultra-bg.jpg";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "$75",
    period: "month — No Contract",
    subtitle: "Great for streaming, browsing, work from home, and general use.",
    backgroundImage: planBasicBg,
    features: [
      {
        icon: Wifi,
        title: "Standard WiFi Network",
        why: "Perfect for general home use with up to 10 connected devices."
      },
      {
        icon: Users,
        title: "Optional Guest Network",
        why: "Visitors stay isolated from your main devices."
      },
      {
        icon: Router,
        title: "Free Onsite Setup",
        why: "Technician installs your service and optimises WiFi placement."
      },
      {
        icon: Router,
        title: "Bring Your Own Router",
        why: "Keep your current setup or upgrade when ready."
      },
      {
        icon: Zap,
        title: "Reliable Speed",
        why: "Smooth Netflix 4K, meetings, and browsing without interruptions."
      }
    ],
    popular: false
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "$95",
    period: "month — No Contract",
    subtitle: "Perfect for gaming, CCTV streaming, 4K video, and homes with many devices.",
    backgroundImage: planProBg,
    features: [
      {
        icon: Shield,
        title: "VLAN Separation (3 Networks)",
        why: "Stops CCTV, TVs, and smart devices from accessing your laptops & phones. Protects your data even if an IoT device is hacked."
      },
      {
        icon: Shield,
        title: "Personal Secure Network",
        why: "Keeps banking, emails, and private info away from risky devices."
      },
      {
        icon: Shield,
        title: "IoT + CCTV Network",
        why: "Smart devices are the #1 hacking target — isolation protects your home."
      },
      {
        icon: Users,
        title: "Guest WiFi (Fully Isolated)",
        why: "Friends, tradies, or Airbnb guests can't touch your home devices."
      },
      {
        icon: Router,
        title: "WiFi 6 Router Optional ($199)",
        why: "Stronger signal, more devices, gaming-grade performance."
      },
      {
        icon: Headphones,
        title: "Priority Support",
        why: "Your service tickets jump the queue."
      },
      {
        icon: Router,
        title: "Free Onsite Installation",
        why: "Technician configures VLANs, router settings, and coverage optimisation."
      }
    ],
    popular: true
  },
  {
    name: "Ultra",
    speed: "1000 Mbps (Gigabit)",
    price: "$135",
    period: "month — No Contract",
    subtitle: "Built for tech-heavy homes, content creators, offices, and multi-level properties.",
    backgroundImage: planUltraBg,
    features: [
      {
        icon: Zap,
        title: "Gigabit Download & Upload",
        why: "Zero bottlenecks for large files, cloud backups, security cameras."
      },
      {
        icon: Shield,
        title: "Full VLAN Security Suite",
        why: "Maximum protection for CCTV and smart devices."
      },
      {
        icon: Router,
        title: "WiFi 6 or WiFi 7 Upgrade",
        why: "Ultimate performance for large homes."
      },
      {
        icon: Users,
        title: "Multi-Home Support",
        why: "Ideal for duplexes, granny flats, or home offices."
      },
      {
        icon: Router,
        title: "Free Installation + Pro Tuning",
        why: "Professional setup ensures full speed across your house."
      }
    ],
    popular: false
  }
];

const PlanCarousel = () => {
  const navigate = useNavigate();

  const handleGetStarted = (planName: string) => {
    navigate(`/signup?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <section id="plans" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
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
                  className={`relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 ${
                    plan.popular ? 'border-primary shadow-xl' : 'border-border'
                  }`}
                >
                  {/* Animated Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={plan.backgroundImage} 
                      alt={`${plan.name} plan background`}
                      className="w-full h-full object-cover animate-slow-pan"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-primary to-accent text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                      🏆 MOST POPULAR
                    </div>
                  )}
                  
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
                      Check Address
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
