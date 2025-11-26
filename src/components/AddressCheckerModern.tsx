import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

const AddressCheckerModern = () => {
  const [address, setAddress] = useState("");

  const handleCheck = () => {
    // Scroll to coverage section or trigger check logic
    document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-muted/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Check GI NET availability at your address</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter your street address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 h-14 text-lg bg-background/50 border-border/50"
              />
              <Button 
                size="lg" 
                onClick={handleCheck}
                className="h-14 px-8 text-lg font-semibold"
              >
                Check Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressCheckerModern;
