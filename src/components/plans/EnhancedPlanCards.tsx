import { useEffect, useRef, useState } from "react";
import { Check, Star, Wifi, Shield, Filter, Zap, Gift, ArrowRight, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingCartComponent } from "./ShoppingCart";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: 75,
    description: "For everyday households needing reliable browsing and HD streaming.",
    icon: Wifi,
    color: "from-slate-500 to-slate-600",
    popular: false,
    video: null,
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
    video: "/videos/plan-pro-video.mp4",
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
    video: null,
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
    video: null,
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
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Pro plan
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const currentPlan = plans[currentIndex];

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (videoRef.current && currentPlan.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentIndex, currentPlan.video]);

  return (
    <section className="py-24 bg-background relative" id="plans-comparison">
      <ShoppingCartComponent />
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

        {/* Plan Navigation Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <plan.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{plan.name}</span>
              {plan.popular && currentIndex === index && (
                <Star className="w-3 h-3 fill-current" />
              )}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          <div
            className={`grid lg:grid-cols-2 gap-8 rounded-3xl border overflow-hidden transition-all duration-500 ${
              currentPlan.popular
                ? "border-primary shadow-xl shadow-primary/10"
                : "border-border"
            } ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            {/* Left Side - Plan Details */}
            <div className="p-8 lg:p-12 bg-card flex flex-col justify-center">
              {/* Popular Badge */}
              {currentPlan.popular && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary rounded-full w-fit mb-6">
                  <Star className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                  <span className="text-sm font-bold text-primary-foreground">MOST POPULAR</span>
                </div>
              )}

              {/* Plan Icon & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentPlan.color} flex items-center justify-center`}>
                  <currentPlan.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{currentPlan.name}</h3>
                  <span className="text-lg text-muted-foreground">{currentPlan.speed}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">${currentPlan.price}</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6">{currentPlan.description}</p>

              {/* Speed Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Speed</span>
                  <span className="text-foreground font-medium">{currentPlan.speed}</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${currentPlan.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${currentPlan.speedPercent}%` }}
                  />
                </div>
              </div>

              {/* ACSU Badge */}
              <div className="flex items-center gap-3 px-4 py-3 bg-accent/20 rounded-xl mb-6">
                <Gift className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">WIN $10,000 ACSU Giveaway Entry</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {currentPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${currentPlan.popular ? "text-primary" : "text-secondary"}`} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 group"
                  onClick={() => navigate(`/signup?plan=${encodeURIComponent(currentPlan.name)}`)}
                >
                  Get {currentPlan.name}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                36-month: Free modem + Free installation
              </p>
            </div>

            {/* Right Side - Video */}
            <div className="relative bg-gradient-to-br from-muted to-muted/50 min-h-[400px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
              {currentPlan.video ? (
                <>
                  <video
                    ref={videoRef}
                    src={currentPlan.video}
                    muted={isMuted}
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                  />
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-foreground" />
                    )}
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${currentPlan.color} flex items-center justify-center mb-6`}>
                    <currentPlan.icon className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">{currentPlan.name} Plan</h4>
                  <p className="text-muted-foreground">{currentPlan.speed} • ${currentPlan.price}/mo</p>
                </div>
              )}
            </div>
          </div>

          {/* Plan Counter */}
          <div className="flex justify-center mt-6 gap-2">
            {plans.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPlanCards;
