import { Wifi, Shield, Headphones, Award, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Fiber-Optic Technology",
    description: "Lightning-fast speeds with the latest fiber-optic infrastructure for seamless connectivity."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Built-in protection against cyber threats with our comprehensive security suite."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support team always ready to help, whenever you need assistance."
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    description: "Industry-leading reliability ensures you're always connected when it matters most."
  },
  {
    icon: Clock,
    title: "Easy Installation",
    description: "Professional installation at your convenience, usually completed within 24 hours."
  },
  {
    icon: Sparkles,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges. What you see is what you pay."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just internet. A complete connectivity solution designed for modern life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
