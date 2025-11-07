import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get plan from URL
    const plan = searchParams.get("plan");
    if (plan) {
      setSelectedPlan(plan);
    }

    // Check authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, [searchParams]);

  const handleContinue = () => {
    if (!user) {
      toast.info("Please sign in to continue", {
        description: "You'll be redirected back after signing in"
      });
      navigate(`/auth`);
    } else {
      toast.success("Feature coming soon!", {
        description: "Full signup flow with payment integration will be available soon"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <Card className="p-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GiNet
              </span>
            </div>

            <h1 className="text-3xl font-bold text-center mb-2">
              Get Started with {selectedPlan || "GiNet"}
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              {user 
                ? "Complete your order to start enjoying high-speed internet" 
                : "Sign in or create an account to continue"}
            </p>

            {selectedPlan && (
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 mb-6 border border-primary/10">
                <h2 className="font-semibold text-lg mb-2">Selected Plan</h2>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {selectedPlan}
                </p>
              </div>
            )}

            {!user ? (
              <div className="space-y-4">
                <p className="text-center text-muted-foreground">
                  You need to be signed in to complete your order
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/auth")} size="lg">
                    Sign In
                  </Button>
                  <Button onClick={() => navigate("/auth")} variant="outline" size="lg">
                    Create Account
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Signed in as</h3>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-semibold mb-2">Next Steps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Confirm your service address</li>
                    <li>✓ Choose installation date</li>
                    <li>✓ Complete payment</li>
                    <li>✓ Start enjoying high-speed internet</li>
                  </ul>
                </div>

                <Button onClick={handleContinue} size="lg" className="w-full">
                  Continue to Order
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;