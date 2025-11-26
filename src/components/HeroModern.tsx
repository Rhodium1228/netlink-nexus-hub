import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield } from "lucide-react";
import heroNetworkBg from "@/assets/hero-network-bg.jpg";
import enterpriseModem from "@/assets/enterprise-modem.jpg";

const HeroModern = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroNetworkBg} 
          alt="Network connections" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[hsl(215,100%,30%)]/90 to-accent/85"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Fast. Secure. Professionally installed.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Melbourne's Smarter,
            <br />
            <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
              Safer Internet
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Built for modern families and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-[0_0_40px_rgba(0,191,255,0.5)] transition-all font-semibold"
              onClick={() => {
                document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Plans
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold"
              onClick={() => {
                document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check Address
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: "Ultra Fast", desc: "Up to 1 Gbps speeds" },
              { icon: Shield, title: "VLAN Security", desc: "3 isolated networks" },
              { icon: Wifi, title: "No Contracts", desc: "Cancel anytime" }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white hover:scale-105 transition-all shadow-xl"
              >
                <feature.icon className="w-10 h-10 mb-3 mx-auto lg:mx-0 text-primary" />
                <h3 className="font-semibold text-lg mb-1 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          </div>

          {/* Right side - Enterprise Modem Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/40 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full aspect-square flex items-center justify-center">
                <div className="relative w-full bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center border border-white/10 overflow-hidden group p-12">
                  <img 
                    src={enterpriseModem} 
                    alt="GI NET Enterprise Modem" 
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroModern;
