import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Lightning-Fast Internet</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Internet at the
            <br />
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Speed of Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Experience fiber-optic speeds up to 1 Gbps. Stream, game, and work without limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Check Availability
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              View Plans
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Ultra Fast", desc: "Up to 1 Gbps speeds" },
              { icon: Shield, title: "Reliable", desc: "99.9% uptime guarantee" },
              { icon: Wifi, title: "No Data Caps", desc: "Unlimited data usage" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <feature.icon className="w-10 h-10 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
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

export default Hero;
