import { Shield, Headphones, Video, Router, FileCheck, Users, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const features = [
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Jump the queue with faster response times and dedicated local Melbourne support."
  },
  {
    icon: Shield,
    title: "VLAN Network Security",
    description: "Enterprise-grade isolation keeps your devices safe from IoT vulnerabilities."
  },
  {
    icon: Video,
    title: "CCTV-Optimised Networks",
    description: "Dedicated bandwidth for security cameras ensures zero dropouts."
  },
  {
    icon: Router,
    title: "BYO or Upgrade Router",
    description: "Keep your current hardware or upgrade to our WiFi 6/7 enterprise modem."
  },
  {
    icon: FileCheck,
    title: "No Lock-In Contracts",
    description: "Cancel or switch plans anytime with complete flexibility."
  },
  {
    icon: Users,
    title: "Professional Technicians",
    description: "Expert local installation and configuration by certified professionals."
  }
];

const WhyGINet = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="heading-lg mb-4">
            Why thousands of customers switch to GI NET
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            We deliver more than just internet — we deliver peace of mind with enterprise-grade features.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 aspect-video group">
            {!isPlaying ? (
              <>
                {/* Animated placeholder with network visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated network nodes */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-primary/40 rounded-full animate-ping"
                        style={{
                          left: `${20 + (i * 12)}%`,
                          top: `${30 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="20%" y1="40%" x2="80%" y2="60%" stroke="url(#networkLine)" strokeWidth="2" className="animate-pulse" />
                      <line x1="30%" y1="30%" x2="70%" y2="70%" stroke="url(#networkLine)" strokeWidth="2" className="animate-pulse delay-200" />
                      <line x1="40%" y1="50%" x2="60%" y2="50%" stroke="url(#networkLine)" strokeWidth="2" className="animate-pulse delay-400" />
                    </svg>
                  </div>
                  
                  {/* Central text */}
                  <div className="text-center z-10">
                    <p className="text-xl font-semibold text-foreground mb-2">See GI NET in Action</p>
                    <p className="text-muted-foreground text-sm">Enterprise-grade network security for your home</p>
                  </div>
                </div>

                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center z-20 group-hover:bg-foreground/5 transition-colors"
                  aria-label="Play video"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="GI NET Network Security"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="group"
            onClick={() => {
              document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Check if we cover your area
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyGINet;
