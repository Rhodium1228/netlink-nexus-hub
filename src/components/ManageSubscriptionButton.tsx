import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ManageSubscriptionButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const ManageSubscriptionButton = ({ 
  variant = "outline", 
  size = "default",
  className = ""
}: ManageSubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleManageSubscription = async () => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      
      if (error) throw error;
      
      if (data?.url) {
        // Open billing portal in new tab
        window.open(data.url, "_blank");
        toast.success("Opening billing portal...", {
          description: "Manage your subscription, payment methods, and billing history"
        });
      } else {
        throw new Error("Failed to create portal session");
      }
    } catch (error: any) {
      console.error("Portal error:", error);
      toast.error("Unable to open billing portal", {
        description: error.message || "Please try again or contact support"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleManageSubscription}
      disabled={loading}
      className={className}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          <CreditCard className="w-4 h-4 mr-2" />
          Manage Subscription
        </>
      )}
    </Button>
  );
};

export default ManageSubscriptionButton;
