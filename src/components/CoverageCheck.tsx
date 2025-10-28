import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const CoverageCheck = () => {
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = () => {
    if (!zipCode || zipCode.length < 5) {
      toast.error("Please enter a valid ZIP code");
      return;
    }

    setIsChecking(true);
    
    // Simulate API check
    setTimeout(() => {
      setIsChecking(false);
      toast.success("Great news! Service is available in your area", {
        description: "Our fastest speeds are ready for you",
        icon: <CheckCircle2 className="w-5 h-5" />
      });
    }, 1500);
  };

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Service Availability</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Check Coverage in Your Area
          </h2>
          <p className="text-xl text-muted-foreground">
            Enter your ZIP code to see if our high-speed internet is available at your location
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Enter ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
              className="text-lg h-14 rounded-xl"
              maxLength={5}
            />
            <Button 
              size="lg" 
              className="h-14 px-8 whitespace-nowrap rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={handleCheck}
              disabled={isChecking}
            >
              {isChecking ? "Checking..." : "Check Availability"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1M+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageCheck;
