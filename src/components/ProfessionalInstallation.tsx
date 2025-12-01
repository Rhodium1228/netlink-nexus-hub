import { Check, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicianInstallation from "@/assets/technician-installation.jpg";

const installationSteps = [
  "Full WiFi optimisation",
  "VLAN configuration",
  "Router placement advice",
  "CCTV connectivity testing",
  "Speed testing before leaving"
];

const ProfessionalInstallation = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Professional Setup
            </span>
            
            <h2 className="heading-lg mb-6">
              Expert Installation Included
            </h2>
            
            <p className="body-lg mb-8">
              We don't just plug in a router and leave. Our certified technicians engineer your network for peak performance and reliability.
            </p>

            <div className="space-y-4 mb-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="group"
              onClick={() => {
                document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Plans
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right: Technician Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={technicianInstallation} 
                alt="Professional technician installing GI NET service" 
                className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Certified</p>
                  <p className="text-xl font-bold text-foreground">100% Local</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInstallation;
