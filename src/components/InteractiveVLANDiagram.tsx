import { useState } from "react";
import { Shield, Smartphone, Laptop, Camera, Tv, Speaker, Users, Wifi, Lock, AlertTriangle } from "lucide-react";
import vlanSectionBg from "@/assets/vlan-section-bg.jpg";

type VLANZone = "personal" | "iot" | "guest" | null;

const InteractiveVLANDiagram = () => {
  const [hoveredZone, setHoveredZone] = useState<VLANZone>(null);

  const zones = {
    personal: {
      name: "Personal Secure Network",
      color: "from-primary to-primary/80",
      borderColor: "border-primary",
      bgColor: "bg-primary/10",
      devices: [
        { icon: Laptop, name: "Work Laptop" },
        { icon: Smartphone, name: "Phone" },
        { icon: Laptop, name: "Tablet" }
      ],
      benefit: "Banking, emails, and sensitive data are completely isolated from IoT devices that could be compromised."
    },
    iot: {
      name: "IoT + CCTV Network",
      color: "from-accent to-accent/80",
      borderColor: "border-accent",
      bgColor: "bg-accent/10",
      devices: [
        { icon: Camera, name: "CCTV" },
        { icon: Tv, name: "Smart TV" },
        { icon: Speaker, name: "Smart Speaker" }
      ],
      benefit: "Smart devices are the #1 hacking target. Isolation prevents hackers from accessing your personal devices even if they compromise a smart bulb."
    },
    guest: {
      name: "Guest WiFi Network",
      color: "from-secondary to-secondary/80",
      borderColor: "border-secondary",
      bgColor: "bg-secondary/10",
      devices: [
        { icon: Users, name: "Visitors" },
        { icon: Smartphone, name: "Guest Phones" },
        { icon: Laptop, name: "Contractor Devices" }
      ],
      benefit: "Friends, tradies, or Airbnb guests get internet access without any ability to see or access your home devices."
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={vlanSectionBg} 
          alt="Network topology background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/40 to-background/95"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Enterprise-Grade Home Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most ISPs give you one unsafe network. GI NET gives you three secure zones.
          </p>
        </div>

        {/* Main Diagram */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="relative min-h-[700px] lg:min-h-[800px]">
            {/* Central Router */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${
                hoveredZone ? 'from-foreground to-foreground/80 scale-110' : 'from-primary to-accent'
              } flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-background`}>
                <Wifi className="w-16 h-16 text-white" />
              </div>
              <p className="text-center mt-3 font-bold text-foreground">GI NET Router</p>
              <p className="text-center text-sm text-muted-foreground">VLAN Controller</p>
            </div>

            {/* Connection Lines - Only show when hovering */}
            {hoveredZone && (
              <>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                  {/* Personal Zone Line */}
                  {hoveredZone === "personal" && (
                    <line
                      x1="50%"
                      y1="50%"
                      x2="25%"
                      y2="20%"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                  )}
                  {/* IoT Zone Line */}
                  {hoveredZone === "iot" && (
                    <line
                      x1="50%"
                      y1="50%"
                      x2="75%"
                      y2="20%"
                      stroke="hsl(var(--accent))"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                  )}
                  {/* Guest Zone Line */}
                  {hoveredZone === "guest" && (
                    <line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="88%"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                  )}
                </svg>
              </>
            )}

            {/* Personal Zone - Top Left */}
            <div
              className="absolute top-4 left-4 lg:left-8 w-72 lg:w-80"
              onMouseEnter={() => setHoveredZone("personal")}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className={`bg-card rounded-3xl p-6 border-2 ${zones.personal.borderColor} shadow-xl transition-all duration-300 cursor-pointer ${
                hoveredZone === "personal" ? 'scale-105 shadow-2xl ring-4 ring-primary/20' : 'hover:scale-102'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${zones.personal.color} flex items-center justify-center`}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">1️⃣ Personal</h3>
                    <p className="text-xs text-muted-foreground">Secure Zone</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {zones.personal.devices.map((device, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <device.icon className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{device.name}</span>
                    </div>
                  ))}
                </div>

                {hoveredZone === "personal" && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20 animate-fade-in">
                    <p className="text-xs text-foreground leading-relaxed">
                      <Lock className="w-4 h-4 inline mr-1 text-primary" />
                      {zones.personal.benefit}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* IoT Zone - Top Right */}
            <div
              className="absolute top-4 right-4 lg:right-8 w-72 lg:w-80"
              onMouseEnter={() => setHoveredZone("iot")}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className={`bg-card rounded-3xl p-6 border-2 ${zones.iot.borderColor} shadow-xl transition-all duration-300 cursor-pointer ${
                hoveredZone === "iot" ? 'scale-105 shadow-2xl ring-4 ring-accent/20' : 'hover:scale-102'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${zones.iot.color} flex items-center justify-center`}>
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">2️⃣ IoT + CCTV</h3>
                    <p className="text-xs text-muted-foreground">Isolated Zone</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {zones.iot.devices.map((device, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <device.icon className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{device.name}</span>
                    </div>
                  ))}
                </div>

                {hoveredZone === "iot" && (
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20 animate-fade-in">
                    <p className="text-xs text-foreground leading-relaxed">
                      <AlertTriangle className="w-4 h-4 inline mr-1 text-accent" />
                      {zones.iot.benefit}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Guest Zone - Bottom Center */}
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-72 lg:w-80"
              onMouseEnter={() => setHoveredZone("guest")}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className={`bg-card rounded-3xl p-6 border-2 ${zones.guest.borderColor} shadow-xl transition-all duration-300 cursor-pointer ${
                hoveredZone === "guest" ? 'scale-105 shadow-2xl ring-4 ring-secondary/20' : 'hover:scale-102'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${zones.guest.color} flex items-center justify-center`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">3️⃣ Guest WiFi</h3>
                    <p className="text-xs text-muted-foreground">Visitor Zone</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {zones.guest.devices.map((device, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <device.icon className="w-4 h-4 text-secondary" />
                      <span className="text-foreground">{device.name}</span>
                    </div>
                  ))}
                </div>

                {hoveredZone === "guest" && (
                  <div className="mt-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20 animate-fade-in">
                    <p className="text-xs text-foreground leading-relaxed">
                      <Lock className="w-4 h-4 inline mr-1 text-secondary" />
                      {zones.guest.benefit}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                {hoveredZone ? "🔒 Active Protection" : "Hover over each zone to see protection details"}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {hoveredZone 
                ? "Each VLAN creates a separate network segment with its own security rules and traffic isolation."
                : "GI NET's VLAN technology creates physical network separation at the router level, providing enterprise-grade security for your home."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVLANDiagram;
