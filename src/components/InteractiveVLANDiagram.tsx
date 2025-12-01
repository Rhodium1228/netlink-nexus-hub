import { useState } from "react";
import { Shield, Smartphone, Laptop, Camera, Tv, Speaker, Users, Wifi, Lock, AlertTriangle } from "lucide-react";

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
      color: "from-warning to-warning/80",
      borderColor: "border-warning",
      bgColor: "bg-warning/10",
      devices: [
        { icon: Camera, name: "CCTV" },
        { icon: Tv, name: "Smart TV" },
        { icon: Speaker, name: "Smart Speaker" }
      ],
      benefit: "Smart devices are the #1 hacking target. Isolation prevents hackers from accessing your personal devices even if they compromise a smart bulb."
    },
    guest: {
      name: "Guest WiFi Network",
      color: "from-success to-success/80",
      borderColor: "border-success",
      bgColor: "bg-success/10",
      devices: [
        { icon: Users, name: "Visitors" },
        { icon: Smartphone, name: "Guest Phones" },
        { icon: Laptop, name: "Contractor Devices" }
      ],
      benefit: "Friends, tradies, or Airbnb guests get internet access without any ability to see or access your home devices."
    }
  };

  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Network Security
          </span>
          <h2 className="heading-lg mb-4">
            Enterprise-Grade Home Security
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Most ISPs give you one unsafe network. GI NET gives you three secure zones.
          </p>
        </div>

        {/* Main Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative min-h-[600px] lg:min-h-[650px]">
            {/* Central Router */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full bg-card border-2 ${
                hoveredZone ? 'border-primary scale-110 shadow-xl' : 'border-border'
              } flex items-center justify-center shadow-lg transition-all duration-300`}>
                <div className="text-center">
                  <Wifi className={`w-10 h-10 md:w-12 md:h-12 mx-auto ${hoveredZone ? 'text-primary' : 'text-foreground'} transition-colors`} />
                  <p className="text-xs font-semibold text-foreground mt-1">Router</p>
                </div>
              </div>
            </div>

            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <defs>
                <linearGradient id="lineGradientPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Lines to each zone */}
              <line x1="50%" y1="50%" x2="25%" y2="15%" 
                stroke={hoveredZone === "personal" ? "hsl(var(--primary))" : "hsl(var(--border))"} 
                strokeWidth="2" strokeDasharray="6,4" 
                className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="75%" y2="15%" 
                stroke={hoveredZone === "iot" ? "hsl(var(--warning))" : "hsl(var(--border))"} 
                strokeWidth="2" strokeDasharray="6,4"
                className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="50%" y2="90%" 
                stroke={hoveredZone === "guest" ? "hsl(var(--success))" : "hsl(var(--border))"} 
                strokeWidth="2" strokeDasharray="6,4"
                className="transition-all duration-300" />
            </svg>

            {/* Personal Zone - Top Left */}
            <div
              className="absolute top-0 left-0 w-64 md:w-72"
              onMouseEnter={() => setHoveredZone("personal")}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className={`bg-card rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer ${
                hoveredZone === "personal" 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50 hover:shadow-md'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${zones.personal.color} flex items-center justify-center`}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Personal</h3>
                    <p className="text-xs text-muted-foreground">Secure Zone</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {zones.personal.devices.map((device, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <device.icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-muted-foreground">{device.name}</span>
                    </div>
                  ))}
                </div>

                {hoveredZone === "personal" && (
                  <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
                    <p className="text-xs text-foreground leading-relaxed">
                      <Lock className="w-3 h-3 inline mr-1 text-primary" />
                      {zones.personal.benefit}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* IoT Zone - Top Right */}
            <div
              className="absolute top-0 right-0 w-64 md:w-72"
              onMouseEnter={() => setHoveredZone("iot")}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className={`bg-card rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer ${
                hoveredZone === "iot" 
                  ? 'border-warning shadow-lg scale-105' 
                  : 'border-border hover:border-warning/50 hover:shadow-md'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${zones.iot.color} flex items-center justify-center`}>
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">IoT + CCTV</h3>
                    <p className="text-xs text-muted-foreground">Isolated Zone</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {zones.iot.devices.map((device, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <device.icon className="w-3.5 h-3.5 text-warning" />
                      <span className="text-muted-foreground">{device.name}</span>
                    </div>
                  ))}
                </div>

                {hoveredZone === "iot" && (
                  <div className="mt-3 p-3 bg-warning/5 rounded-lg border border-warning/20 animate-fade-in">
                    <p className="text-xs text-foreground leading-relaxed">
                      <AlertTriangle className="w-3 h-3 inline mr-1 text-warning" />
                      {zones.iot.benefit}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Guest Zone - Bottom Center */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-72"
              onMouseEnter={() => setHoveredZone("guest")}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className={`bg-card rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer ${
                hoveredZone === "guest" 
                  ? 'border-success shadow-lg scale-105' 
                  : 'border-border hover:border-success/50 hover:shadow-md'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${zones.guest.color} flex items-center justify-center`}>
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Guest WiFi</h3>
                    <p className="text-xs text-muted-foreground">Visitor Zone</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {zones.guest.devices.map((device, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <device.icon className="w-3.5 h-3.5 text-success" />
                      <span className="text-muted-foreground">{device.name}</span>
                    </div>
                  ))}
                </div>

                {hoveredZone === "guest" && (
                  <div className="mt-3 p-3 bg-success/5 rounded-lg border border-success/20 animate-fade-in">
                    <p className="text-xs text-foreground leading-relaxed">
                      <Lock className="w-3 h-3 inline mr-1 text-success" />
                      {zones.guest.benefit}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background border border-border rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">
                {hoveredZone ? "Active Protection" : "Hover to see protection details"}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
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
