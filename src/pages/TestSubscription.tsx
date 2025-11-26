import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

const TestSubscription = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkSubscription = async () => {
    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("check-subscription");

      if (error) throw error;

      setResult(data);
      
      if (data?.subscribed) {
        toast.success("Active subscription found!", {
          description: `Plan: ${data.plan_name || "Unknown"}`
        });
      } else {
        toast.info("No active subscription", {
          description: "User does not have an active subscription"
        });
      }
    } catch (error: any) {
      console.error("Check error:", error);
      toast.error("Failed to check subscription", {
        description: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-2">Test Subscription Status</h1>
            <p className="text-muted-foreground mb-6">
              Use this page to verify the check-subscription function works correctly.
            </p>

            <Button 
              onClick={checkSubscription} 
              disabled={loading}
              className="w-full mb-6"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Checking...
                </>
              ) : (
                "Check My Subscription Status"
              )}
            </Button>

            {result && (
              <div className="border rounded-lg p-6 bg-muted/50">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  {result.subscribed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Subscription Active
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-muted-foreground" />
                      No Active Subscription
                    </>
                  )}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subscribed:</span>
                    <span className="font-mono">{String(result.subscribed)}</span>
                  </div>
                  
                  {result.plan_name && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plan:</span>
                      <span className="font-semibold">{result.plan_name}</span>
                    </div>
                  )}
                  
                  {result.product_id && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product ID:</span>
                      <span className="font-mono text-xs">{result.product_id}</span>
                    </div>
                  )}
                  
                  {result.subscription_end && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Billing:</span>
                      <span>{new Date(result.subscription_end).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                    View Raw Response
                  </summary>
                  <pre className="mt-2 p-3 bg-background rounded text-xs overflow-auto">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestSubscription;
