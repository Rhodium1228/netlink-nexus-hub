import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, ArrowRight } from "lucide-react";

const AddressCheckerModern = () => {
  const [address, setAddress] = useState("");

  const handleCheck = () => {
    document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-background">
      <div className="content-container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
              Check GI NET availability
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Enter your address to see available plans in your area
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter your street address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 h-12 bg-background border-border"
              />
              <Button 
                size="lg" 
                onClick={handleCheck}
                className="h-12 px-6 group"
              >
                Check Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressCheckerModern;
