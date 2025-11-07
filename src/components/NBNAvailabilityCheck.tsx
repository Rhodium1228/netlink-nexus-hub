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

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Check NBN Availability
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find out what NBN technology is available at your address and choose the perfect plan
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="postcode" className="text-base font-semibold">
                  Postcode <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="postcode"
                  type="text"
                  placeholder="e.g., 2000"
                  value={postcode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                    setPostcode(value);
                  }}
                  maxLength={4}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-base font-semibold">
                  Address <span className="text-muted-foreground text-sm">(Optional)</span>
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="e.g., 1 Example Street, Sydney"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-nbn-blue hover:bg-nbn-blue/90 text-white px-12 h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Check Now
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground italic leading-relaxed">
              *Powered by NBN Co. Availability shown is indicative; GiNet confirms final eligibility during signup. 
              Complies with ACMA transparency rules. See{" "}
              <a 
                href="https://www.nbnco.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                nbnco.com.au
              </a>
              {" "}for full terms.
            </p>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-[80vw] h-[90vh] md:h-[80vh] p-0 gap-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">NBN Availability Checker</DialogTitle>
                <DialogDescription className="text-base">
                  Enter your details below to check NBN technology (e.g., FTTP for 1 Gbps) and availability. 
                  This is the official NBN tool – results help us tailor your GiNet plan.
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.nbnco.com.au/connect-home-or-business/check-your-address"
              className="w-full h-full border-0"
              title="NBN Co Address Checker"
              loading="lazy"
            />
          </div>

          <div className="p-4 bg-muted/50 border-t text-center">
            <p className="text-sm text-foreground">
              FTTP ready?{" "}
              <Button
                variant="link"
                className="p-0 h-auto text-primary font-semibold"
                onClick={() => {
                  setIsModalOpen(false);
                  document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Ultra plan for 1 Gbps
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NBNAvailabilityCheck;
