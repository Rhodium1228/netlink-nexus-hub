import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { toast } from "sonner";
const NBNAvailabilityCheck = () => {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode || postcode.length !== 4 || !/^\d{4}$/.test(postcode)) {
      toast.error("Please enter a valid 4-digit postcode");
      return;
    }
    setIsModalOpen(true);
  };
  return <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Check NBN Availability
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find out what NBN technology is available at your address and choose the perfect plan
          </p>
        </div>

        
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[100vw] h-[100vh] md:max-w-[80vw] md:h-[80vh] p-0 gap-0 flex flex-col">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">NBN Availability Checker</DialogTitle>
                <DialogDescription className="text-base">
                  Enter your details below to check NBN technology (e.g., FTTP for 1 Gbps) and availability. 
                  This is the official NBN tool – results help us tailor your GiNet plan.
                </DialogDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)} className="h-8 w-8 rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-auto flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-md text-center space-y-6">
              <p className="text-muted-foreground mb-6">
                The official NBN checker can't be embedded due to security settings, so it opens in a new tab.
              </p>
              <Button asChild size="lg" className="bg-[#003366] hover:bg-[#003366]/90 text-white px-8 h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                <a href="https://www.nbnco.com.au/connect-home-or-business/check-your-address" target="_blank" rel="noopener noreferrer">
                  Open NBN Availability Checker
                </a>
              </Button>
            </div>
          </div>

          <div className="p-4 bg-muted/50 border-t text-center">
            <p className="text-sm text-foreground">
              FTTP ready?{" "}
              <Button variant="link" className="p-0 h-auto text-primary font-semibold" onClick={() => {
              setIsModalOpen(false);
              document.getElementById("plans")?.scrollIntoView({
                behavior: "smooth"
              });
            }}>
                View Ultra plan for 1 Gbps
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
export default NBNAvailabilityCheck;