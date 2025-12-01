import { useEffect, useRef, useState } from "react";
import { Gift, Star, Award, TrendingUp, Sparkles } from "lucide-react";
const benefits = [{
  icon: Gift,
  title: "$10,000 Monthly Giveaway",
  description: "Every customer automatically entered"
}, {
  icon: Star,
  title: "Loyalty Points",
  description: "Earn points with every bill payment"
}, {
  icon: Award,
  title: "Exclusive Rewards",
  description: "Access special member-only offers"
}, {
  icon: TrendingUp,
  title: "Grow Your Benefits",
  description: "More rewards the longer you stay"
}];
const ACSUIntegration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Animate the prize counter
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = 10000 / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 10000) {
        setAnimatedValue(10000);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible]);
  return <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Australia's First</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Part of the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">
                ACSU Ecosystem
              </span>
            </h2>

            <p className="text-muted-foreground mb-8 text-lg">
              As an ACSU partner, every GI NET customer becomes part of Australia's largest community 
              rewards network. Your internet subscription isn't just a service—it's an investment in 
              ongoing benefits and opportunities.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => <div key={benefit.title} className={`p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
              transitionDelay: `${200 + index * 100}ms`
            }}>
                  <benefit.icon className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>)}
            </div>
          </div>

          {/* Prize Visualization */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-yellow-500/30 blur-3xl rounded-full animate-pulse-slow" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-card to-accent/10 rounded-3xl border border-accent/30 p-8 text-center overflow-hidden">
                {/* Sparkles Animation */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(12)].map((_, i) => <Sparkles key={i} className="absolute w-4 h-4 text-accent/40 animate-float" style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }} />)}
                </div>

                <div className="relative z-10">
                  <Gift className="w-16 h-16 text-accent mx-auto mb-4 animate-bounce" style={{
                  animationDuration: "2s"
                }} />
                  
                  <p className="text-sm text-muted-foreground mb-2">Monthly Prize Pool</p>
                  
                  <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                    ${animatedValue.toLocaleString()}
                  </div>
                  
                  <p className="font-semibold mb-6 text-red-400">ACSU Giveaway</p>

                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      Every GI NET customer is <span className="font-semibold text-destructive">automatically entered</span> into 
                      the monthly draw. No extra steps, no additional cost.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className={`absolute -top-4 -right-4 px-4 py-2 bg-accent rounded-full shadow-lg transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                <span className="text-accent-foreground font-bold text-sm">WIN BIG!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ACSUIntegration;