import { Shield, Smartphone, Camera, Wifi } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Enterprise-Grade Home Network Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most ISPs give you one unsafe network. GI NET gives you three secure zones.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* VLAN Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 hover:shadow-premium transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-glow">
                <Smartphone className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">
                1️⃣ Personal Secure Network
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Protects laptops, mobiles, tablets. Keeps your banking, emails, and private data safe from IoT vulnerabilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-2xl p-8 hover:shadow-premium transition-all">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 shadow-glow">
                <Camera className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">
                2️⃣ IoT + CCTV Network
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Isolates vulnerable smart devices from your private data. Smart TVs, cameras, and appliances stay separate.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 rounded-2xl p-8 hover:shadow-premium transition-all">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">
                3️⃣ Guest Network
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Visitors get internet, but zero access to your home devices. Optional speed and time limits included.
              </p>
            </div>
          </div>

          {/* Additional Security Info */}
          <div className="glass-effect border border-primary/20 rounded-3xl p-10 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" strokeWidth={1.5} />
            <h3 className="font-bold text-2xl mb-4 text-foreground">
              Why VLAN Security Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
              Smart devices are the #1 target for hackers. A compromised smart TV or camera can expose your entire network — including laptops with banking apps and private photos. 
              GI NET's VLAN security ensures even if an IoT device is hacked, your personal devices stay protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
