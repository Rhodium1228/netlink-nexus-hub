import { Check, Wrench } from "lucide-react";
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Wrench className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Included with Every Plan</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional Setup Included
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              We don't just plug in a router and leave. Our certified technicians engineer your network for peak performance and reliability.
            </p>

            <div className="space-y-4">
              {installationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technician Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={technicianInstallation} 
                alt="Professional technician installing GI NET service" 
                className="w-full h-full object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary-foreground rounded-2xl p-6 shadow-xl z-10 border-4 border-background">
              <p className="text-sm font-semibold">Certified Technicians</p>
              <p className="text-3xl font-bold">100% Local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInstallation;
