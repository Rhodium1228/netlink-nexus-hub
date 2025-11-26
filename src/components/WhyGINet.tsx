import { Shield, Headphones, Video, Router, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Jump the queue with faster response times"
  },
  {
    icon: Shield,
    title: "VLAN Network Security",
    description: "Enterprise-grade isolation for your devices"
  },
  {
    icon: Video,
    title: "CCTV-Optimised Networks",
    description: "Dedicated bandwidth for security cameras"
  },
  {
    icon: Router,
    title: "BYO or Upgrade Router",
    description: "Keep your router or upgrade to WiFi 6/7"
  },
  {
    icon: FileCheck,
    title: "No Lock-In Contracts",
    description: "Cancel or switch plans anytime"
  },
  {
    icon: Users,
    title: "Professional Local Technicians",
    description: "Expert installation and configuration"
  }
];

const WhyGINet = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why thousands of customers switch to GI NET
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGINet;
