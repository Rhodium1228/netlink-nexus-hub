import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { useState } from "react";

const AddressChecker = () => {
  const [address, setAddress] = useState("");

  const handleCheck = () => {
    // Placeholder - will integrate with address API later
    console.log("Checking address:", address);
  };

  return (
    <section id="address-checker" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect border border-border rounded-3xl p-10 shadow-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Check GI NET availability at your address
              </h2>
              <p className="text-muted-foreground text-lg">
                Enter your street address to see available plans
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Enter your street address…"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 focus:border-primary"
                />
              </div>
              <Button 
                size="lg"
                onClick={handleCheck}
                className="h-14 px-8 text-lg font-semibold shadow-premium"
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

export default AddressChecker;
