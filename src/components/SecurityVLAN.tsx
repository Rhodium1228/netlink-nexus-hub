import { Shield, Camera, Smartphone, Wifi } from "lucide-react";

const SecurityVLAN = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Enterprise-Grade Home Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most ISPs give you one unsafe network. GI NET gives you three secure zones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Personal Secure Network */}
          <div className="bg-card rounded-3xl p-8 border-2 border-primary shadow-xl hover:scale-105 transition-all">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
              1️⃣ Personal Secure Network
            </h3>
            <p className="text-muted-foreground text-center">
              Protects laptops, mobiles, tablets. Your sensitive banking and email data stays isolated from all other devices.
            </p>
          </div>

          {/* IoT + CCTV Network */}
          <div className="bg-card rounded-3xl p-8 border-2 border-accent shadow-xl hover:scale-105 transition-all">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <Camera className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
              2️⃣ IoT + CCTV Network
            </h3>
            <p className="text-muted-foreground text-center">
              Isolates vulnerable smart devices from your private data. Security cameras, smart TVs, Alexa, and appliances stay separate.
            </p>
          </div>

          {/* Guest Network */}
          <div className="bg-card rounded-3xl p-8 border-2 border-secondary shadow-xl hover:scale-105 transition-all">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <Wifi className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
              3️⃣ Guest Network
            </h3>
            <p className="text-muted-foreground text-center">
              Visitors get internet, but zero access to your home devices. Perfect for Airbnb, tradies, or friends visiting.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Business-grade security at residential pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityVLAN;
