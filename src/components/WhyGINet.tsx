import { Shield, Headphones, Video, Router, FileCheck, Users, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const features = [{
  icon: Headphones,
  title: "Priority Support",
  description: "Jump the queue with faster response times and dedicated local Melbourne support."
}, {
  icon: Shield,
  title: "VLAN Network Security",
  description: "Enterprise-grade isolation keeps your devices safe from IoT vulnerabilities."
}, {
  icon: Video,
  title: "CCTV-Optimised Networks",
  description: "Dedicated bandwidth for security cameras ensures zero dropouts."
}, {
  icon: Router,
  title: "BYO or Upgrade Router",
  description: "Keep your current hardware or upgrade to our WiFi 6/7 enterprise modem."
}, {
  icon: FileCheck,
  title: "No Lock-In Contracts",
  description: "Cancel or switch plans anytime with complete flexibility."
}, {
  icon: Users,
  title: "Professional Technicians",
  description: "Expert local installation and configuration by certified professionals."
}];
const WhyGINet = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return <section className="section-padding bg-card border-y border-border">
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
          
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => <div key={index} className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" onClick={() => {
          document.getElementById('coverage')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            Check if we cover your area
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default WhyGINet;