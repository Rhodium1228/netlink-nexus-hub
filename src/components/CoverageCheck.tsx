import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// Replace with your Google Places API key
const GOOGLE_PLACES_API_KEY = "YOUR_GOOGLE_PLACES_API_KEY";

const CoverageCheck = () => {
  const [address, setAddress] = useState<any>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = () => {
    if (!address || !address.value) {
      toast.error("Please select a valid Australian address");
      return;
    }

    setIsChecking(true);
    
    // Simulate API check
    setTimeout(() => {
      setIsChecking(false);
      toast.success("Great news! Service is available in your area", {
        description: `Coverage confirmed for ${address.label}`,
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
            Enter your full address to see if our high-speed internet is available at your location
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <GooglePlacesAutocomplete
                apiKey={GOOGLE_PLACES_API_KEY}
                selectProps={{
                  value: address,
                  onChange: setAddress,
                  placeholder: "Enter your full address",
                  styles: {
                    control: (provided) => ({
                      ...provided,
                      height: '56px',
                      borderRadius: '0.75rem',
                      fontSize: '1.125rem',
                      border: '1px solid hsl(var(--input))',
                      backgroundColor: 'hsl(var(--background))',
                      color: 'hsl(var(--foreground))',
                    }),
                    input: (provided) => ({
                      ...provided,
                      color: 'hsl(var(--foreground))',
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: 'hsl(var(--muted-foreground))',
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: 'hsl(var(--foreground))',
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.75rem',
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused ? 'hsl(var(--accent))' : 'hsl(var(--background))',
                      color: 'hsl(var(--foreground))',
                      cursor: 'pointer',
                    }),
                  },
                }}
                autocompletionRequest={{
                  componentRestrictions: { country: 'au' },
                  types: ['address']
                }}
              />
            </div>
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
