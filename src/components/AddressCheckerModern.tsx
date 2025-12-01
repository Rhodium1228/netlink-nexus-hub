import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, ArrowRight } from "lucide-react";
const AddressCheckerModern = () => {
  const [address, setAddress] = useState("");
  const handleCheck = () => {
    document.getElementById('coverage')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-12 bg-background">
      
    </section>;
};
export default AddressCheckerModern;