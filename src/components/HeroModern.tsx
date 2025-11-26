import { Button } from "@/components/ui/button";
import { Wifi, Shield, Zap } from "lucide-react";

const HeroModern = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated floating shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Melbourne's Smarter,
            <br />
            Safer Internet
          </h1>
          
          <div className="inline-block bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full mb-8 shadow-glow">
            <p className="text-white font-semibold text-sm md:text-base">
              Every customer goes into the monthly ACSU Giveaway — WIN $10,000!
            </p>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-medium max-w-3xl mx-auto leading-relaxed">
            Fast. Secure. Professionally installed. Built for modern families and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 shadow-premium font-semibold"
              onClick={() => {
                document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Plans
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 glass-effect border-white/30 text-white hover:bg-white/10 font-semibold"
              onClick={() => {
                document.getElementById('address-checker')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check Address
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Ultra Fast", desc: "Up to 1 Gbps speeds" },
              { icon: Shield, title: "VLAN Security", desc: "Enterprise-grade protection" },
              { icon: Wifi, title: "No Data Caps", desc: "Unlimited data usage" }
            ].map((feature, idx) => (
              <div key={idx} className="glass-effect rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-card hover:shadow-premium">
                <feature.icon className="w-12 h-12 mb-4 mx-auto text-white" strokeWidth={1.5} />
                <h3 className="font-bold text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-white/80 text-sm font-medium">{feature.desc}</p>
              </div>
            ))}
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
