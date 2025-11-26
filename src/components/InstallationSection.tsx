import { Button } from "@/components/ui/button";
import { Wrench, CheckCircle2 } from "lucide-react";

const services = [
  "Full WiFi optimisation",
  "VLAN configuration",
  "Router placement advice",
  "CCTV connectivity testing",
  "Speed testing before leaving"
];

const InstallationSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder - can be replaced with actual photo */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center shadow-premium">
                <Wrench className="w-32 h-32 text-primary/40" strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100% Free</p>
                    <p className="text-sm text-muted-foreground">No hidden costs</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Professional Setup Included
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every GI NET plan includes free onsite installation by Melbourne-based technicians. 
                We don't just plug in a modem — we optimise your entire network.
              </p>

              <div className="space-y-4 mb-8">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-foreground font-medium text-lg">{service}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="shadow-premium text-lg px-8 py-6 font-semibold"
                onClick={() => {
                  document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
