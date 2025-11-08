import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { supabase } from "@/integrations/supabase/client";
import { useGoogleMapsScript } from "@/hooks/useGoogleMapsScript";
const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY || "";
const CoverageCheck = () => {
  const [address, setAddress] = useState<any>(null);
  const [isChecking, setIsChecking] = useState(false);
  const libraries = useMemo(() => ['places'], []);
  const {
    isLoaded,
    error
  } = useGoogleMapsScript({
    apiKey: GOOGLE_PLACES_API_KEY,
    libraries
  });
  const handleCheck = async () => {
    if (!address || !address.value) {
      toast.error("Please select a valid Australian address");
      return;
    }
    setIsChecking(true);
    try {
      // Extract postcode from address components
      const addressComponents = address.value.structured_formatting || {};
      const fullAddress = address.label;

      // Try to extract postcode from the address string
      const postcodeMatch = fullAddress.match(/\b\d{4}\b/);
      const postcode = postcodeMatch ? postcodeMatch[0] : '';

      // Extract suburb (usually the first part before comma)
      const parts = fullAddress.split(',');
      const suburb = parts[0]?.trim() || '';
      if (!postcode) {
        toast.error("Could not detect postcode from address");
        setIsChecking(false);
        return;
      }

      // Call the edge function to check coverage
      const {
        data,
        error
      } = await supabase.functions.invoke('check-coverage', {
        body: {
          address: fullAddress,
          postcode,
          suburb
        }
      });
      if (error) throw error;
      setIsChecking(false);
      if (data.available) {
        toast.success(data.message, {
          description: `Coverage confirmed for ${fullAddress}`,
          icon: <CheckCircle2 className="w-5 h-5" />
        });
      } else {
        toast.error(data.message, {
          description: "Check back soon as we're always expanding our network",
          icon: <XCircle className="w-5 h-5" />
        });
      }
    } catch (error: any) {
      console.error('Coverage check error:', error);
      setIsChecking(false);
      toast.error("Unable to check coverage", {
        description: "Please try again later"
      });
    }
  };
  return <section className="py-20 px-6 bg-card">
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

        
      </div>
    </section>;
};
export default CoverageCheck;