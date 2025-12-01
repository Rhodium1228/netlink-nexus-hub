import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield, ArrowRight, ChevronDown } from "lucide-react";
import enterpriseModem from "@/assets/enterprise-modem.jpg";
import heroVideo from "@/assets/plan-background-animated.mp4";

const HeroModern = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Animated overlay elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft delay-200" />
        
        {/* Animated network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-draw-line" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-draw-line delay-200" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-draw-line delay-400" />
        </svg>
      </div>

      <div className="content-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Fast • Secure • Professionally Installed</span>
            </div>
            
            {/* Headline */}
            <h1 className="heading-xl mb-6 animate-fade-in-up">
              Melbourne's Smarter,
              <br />
              <span className="gradient-text">Safer Internet</span>
            </h1>
            
            {/* Subheadline */}
            <p className="body-lg mb-10 max-w-xl animate-fade-in-up delay-100">
              Built for modern families and businesses. Enterprise-grade security with VLAN network isolation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 animate-fade-in-up delay-200">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                onClick={() => {
                  document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Plans
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 rounded-xl border-border hover:bg-muted transition-all"
                onClick={() => {
                  document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Check Address
              </Button>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up delay-300">
              {[
                { icon: Zap, title: "Ultra Fast", desc: "Up to 1 Gbps speeds" },
                { icon: Shield, title: "VLAN Security", desc: "3 isolated networks" },
                { icon: Wifi, title: "No Contracts", desc: "Cancel anytime" }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="phenomenon-card group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-1 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Enterprise Modem Visual */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in delay-200">
            <div className="relative w-full max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110" />
              
              {/* Modem container */}
              <div className="relative phenomenon-card p-8 animate-float">
                <img 
                  src={enterpriseModem} 
                  alt="GI NET Enterprise Modem" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Stats overlay */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Connection</p>
                      <p className="font-semibold text-foreground">1 Gbps Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroModern;
