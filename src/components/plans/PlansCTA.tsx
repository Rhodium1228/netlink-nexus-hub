import { useEffect, useRef, useState } from "react";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PlanComparisonModal from "./PlanComparisonModal";

const PlansCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Zap, text: "Up to 1 Gbps Speed" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: Award, text: "Award-Winning Service" },
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Fast, Secure, and Built for Australia
          </h2>

          <p 
            className={`text-lg text-primary-foreground/80 mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Join thousands of Australian households who've upgraded to internet that's designed 
            for how we actually live today. No lock-in contracts. No compromises.
          </p>

          {/* Highlights */}
          <div 
            className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {highlights.map((item, index) => (
              <div 
                key={item.text} 
                className="flex items-center gap-2 text-primary-foreground/90"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group"
              onClick={() => navigate("/signup")}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-primary-foreground hover:bg-white/10 bg-transparent"
              onClick={() => setComparisonOpen(true)}
            >
              Compare Plans
            </Button>
          </div>

          <PlanComparisonModal 
            open={comparisonOpen} 
            onOpenChange={setComparisonOpen} 
          />

          {/* Trust Badge */}
          <p 
            className={`text-sm text-primary-foreground/60 mt-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            ✓ No setup fees on 36-month plans &nbsp;•&nbsp; ✓ Cancel anytime &nbsp;•&nbsp; ✓ Melbourne-based support
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansCTA;
