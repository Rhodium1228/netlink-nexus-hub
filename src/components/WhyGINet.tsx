import { Shield, Headphones, Camera, Router, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Fast response times and dedicated assistance when you need it"
  },
  {
    icon: Shield,
    title: "VLAN Network Security",
    description: "Enterprise-grade protection with isolated network zones"
  },
  {
    icon: Camera,
    title: "CCTV-Optimised Connectivity",
    description: "Dedicated bandwidth for security cameras and IoT devices"
  },
  {
    icon: Router,
    title: "GI NET Enterprise Modem",
    description: "Professional-grade hardware built for speed and coverage"
  },
  {
    icon: FileCheck,
    title: "No Lock-In Contracts",
    description: "Flexible month-to-month plans with no hidden fees"
  },
  {
    icon: Users,
    title: "Professional Local Technicians",
    description: "Melbourne-based team providing onsite installation and setup"
  }
];

const WhyGINet = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Melbourne Families Trust GI NET
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium features and monthly giveaways that set us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-premium hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGINet;
