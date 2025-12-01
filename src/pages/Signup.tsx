import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Wifi, ArrowLeft, Shield, Zap, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";

// Plan configurations
const planDetails: Record<string, { speed: string; price: number; features: string[] }> = {
  Basic: {
    speed: "100 Mbps",
    price: 75,
    features: [
      "Standard WiFi Network",
      "Optional Guest Network",
      "Reliable Speed for 4K streaming",
      "ACSU Giveaway Entry"
    ]
  },
  Pro: {
    speed: "500 Mbps",
    price: 95,
    features: [
      "VLAN Separation (3 Networks)",
      "Personal Secure Network",
      "IoT + CCTV Isolated Network",
      "Guest WiFi Network",
      "Priority Support",
      "ACSU Giveaway Entry"
    ]
  },
  Halal: {
    speed: "500 Mbps",
    price: 95,
    features: [
      "Family-Safe Filtering",
      "Content Protection",
      "4K Streaming Ready",
      "Up to 30 Devices",
      "Priority Support",
      "ACSU Giveaway Entry"
    ]
  },
  Ultra: {
    speed: "1000 Mbps (Gigabit)",
    price: 135,
    features: [
      "Gigabit Speed",
      "Full VLAN Security Suite",
      "Multi-Home Support",
      "Priority Support",
      "ACSU Giveaway Entry"
    ]
  }
};

// Form validation schema
const signupSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15),
  address: z.string().trim().min(5, "Address is required").max(200),
  suburb: z.string().trim().min(2, "Suburb is required").max(100),
  city: z.string().trim().min(2, "City is required").max(100),
  state: z.string().trim().min(2, "State is required").max(50),
  postcode: z.string().trim().min(4, "Postcode must be at least 4 digits").max(10),
  installationDate: z.string().min(1, "Installation date is required"),
  installationTime: z.string().min(1, "Installation time is required")
});

const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    city: "",
    state: "",
    postcode: "",
    installationDate: "",
    installationTime: "9am-12pm"
  });
  
  // Add-ons state
  const [purchaseRouter, setPurchaseRouter] = useState(false);
  const [installationOption, setInstallationOption] = useState<"paid" | "free-36month" | null>("paid");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const plan = searchParams.get("plan") || "Basic";
    const success = searchParams.get("success");
    setSelectedPlan(plan);

    // Handle successful payment return from Stripe
    if (success === "true") {
      toast.success("Payment Successful!", {
        description: `Your ${plan} subscription is now active. Check your email for confirmation.`
      });
      // Clean up URL
      window.history.replaceState({}, '', '/signup?plan=' + plan);
    }

    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      if (session?.user) {
        // Pre-fill email
        setFormData(prev => ({ ...prev, email: session.user.email || "" }));
        
        // Fetch user profile data
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
        
        if (profile) {
          setFormData(prev => ({
            ...prev,
            fullName: profile.full_name || "",
            phone: profile.phone || "",
            address: profile.address || "",
            suburb: profile.suburb || "",
            city: profile.city || "",
            state: profile.state || "",
            postcode: profile.postcode || ""
          }));
        }
      }
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, [searchParams]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const calculateTotal = () => {
    const plan = planDetails[selectedPlan];
    let total = plan.price;
    
    if (purchaseRouter) {
      total += 199;
    }
    
    if (installationOption === "paid") {
      total += 99;
    }
    
    return total;
  };

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please sign in to continue");
      navigate("/auth");
      return;
    }

    // Validate form first
    try {
      signupSchema.parse(formData);
      setFormErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            errors[err.path[0].toString()] = err.message;
          }
        });
        setFormErrors(errors);
        toast.error("Please complete all required fields");
        return;
      }
    }

    setSubmitting(true);

    try {
      // Update user profile with form data
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          full_name: formData.fullName,
          phone: formData.phone,
          address: formData.address,
          suburb: formData.suburb,
          city: formData.city,
          state: formData.state,
          postcode: formData.postcode
        })
        .eq("id", user.id);

      if (profileError) throw profileError;

      // Get plan ID for order creation
      const { data: plans } = await supabase
        .from("plans")
        .select("id")
        .eq("name", selectedPlan)
        .single();

      if (!plans) {
        toast.error("Selected plan not found");
        setSubmitting(false);
        return;
      }

      // Create order record
      const orderData = {
        user_id: user.id,
        plan_id: plans.id,
        installation_address: `${formData.address}, ${formData.suburb}, ${formData.city}, ${formData.state} ${formData.postcode}`,
        installation_date: formData.installationDate,
        installation_time: formData.installationTime,
        router_purchase: purchaseRouter,
        router_price: purchaseRouter ? 199 : 0,
        total_amount: calculateTotal(),
        status: "pending" as const
      };

      const { error: orderError } = await supabase
        .from("orders")
        .insert(orderData);

      if (orderError) throw orderError;

      // Create Stripe checkout session with one-time costs
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke(
        "create-checkout",
        {
          body: { 
            planName: selectedPlan,
            purchaseRouter,
            installationOption
          }
        }
      );

      if (checkoutError) throw checkoutError;
      
      if (checkoutData?.url) {
        // Redirect to Stripe checkout
        window.open(checkoutData.url, "_blank");
        toast.success("Redirecting to secure checkout...", {
          description: "Complete your payment to activate your subscription"
        });
      } else {
        throw new Error("Failed to create checkout session");
      }

    } catch (error: any) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout", {
        description: error.message || "Please try again"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleCheckout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Wifi className="w-12 h-12 text-primary animate-pulse" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-20 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <Card className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  GI NET
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-2">Sign In Required</h1>
              <p className="text-muted-foreground mb-8">
                Please sign in or create an account to complete your {selectedPlan} plan order
              </p>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/auth")} size="lg">
                  Sign In / Create Account
                </Button>
              </div>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const plan = planDetails[selectedPlan];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                    <h3 className="font-bold text-lg">{selectedPlan} Plan</h3>
                    <p className="text-sm text-muted-foreground mb-2">{plan.speed}</p>
                    <p className="text-2xl font-bold text-primary">${plan.price}<span className="text-sm font-normal">/month</span></p>
                  </div>

                  <div className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Plan</span>
                    <span className="font-semibold">${plan.price}</span>
                  </div>
                  
                  {purchaseRouter && (
                    <div className="flex justify-between text-sm">
                      <span>GI NET Enterprise Modem</span>
                      <span className="font-semibold">$199</span>
                    </div>
                  )}
                  
                  {installationOption === "paid" && (
                    <div className="flex justify-between text-sm">
                      <span>On-Site Installation</span>
                      <span className="font-semibold">$99</span>
                    </div>
                  )}
                  
                  {installationOption === "free-36month" && (
                    <div className="flex justify-between text-sm text-accent">
                      <span>Free Modem + Installation</span>
                      <span className="font-semibold">$0</span>
                    </div>
                  )}

                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Today's Total</span>
                    <span className="text-primary">${calculateTotal()}</span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-xs text-accent font-semibold">💰 Automatic entry into monthly $10,000 ACSU Giveaway!</p>
                </div>
              </Card>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Contact & Service Address
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="John Smith"
                        className={formErrors.fullName ? "border-destructive" : ""}
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-destructive mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        className={formErrors.email ? "border-destructive" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-destructive mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="0412 345 678"
                        className={formErrors.phone ? "border-destructive" : ""}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-destructive mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="12 Stelvio Close"
                        className={formErrors.address ? "border-destructive" : ""}
                      />
                      {formErrors.address && (
                        <p className="text-xs text-destructive mt-1">{formErrors.address}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="suburb">Suburb *</Label>
                      <Input
                        id="suburb"
                        value={formData.suburb}
                        onChange={(e) => handleInputChange("suburb", e.target.value)}
                        placeholder="Lynbrook"
                        className={formErrors.suburb ? "border-destructive" : ""}
                      />
                      {formErrors.suburb && (
                        <p className="text-xs text-destructive mt-1">{formErrors.suburb}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Melbourne"
                        className={formErrors.city ? "border-destructive" : ""}
                      />
                      {formErrors.city && (
                        <p className="text-xs text-destructive mt-1">{formErrors.city}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="VIC"
                        className={formErrors.state ? "border-destructive" : ""}
                      />
                      {formErrors.state && (
                        <p className="text-xs text-destructive mt-1">{formErrors.state}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input
                        id="postcode"
                        value={formData.postcode}
                        onChange={(e) => handleInputChange("postcode", e.target.value)}
                        placeholder="3975"
                        className={formErrors.postcode ? "border-destructive" : ""}
                      />
                      {formErrors.postcode && (
                        <p className="text-xs text-destructive mt-1">{formErrors.postcode}</p>
                      )}
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Installation Scheduling
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="installationDate">Preferred Installation Date *</Label>
                      <Input
                        id="installationDate"
                        type="date"
                        value={formData.installationDate}
                        onChange={(e) => handleInputChange("installationDate", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={formErrors.installationDate ? "border-destructive" : ""}
                      />
                      {formErrors.installationDate && (
                        <p className="text-xs text-destructive mt-1">{formErrors.installationDate}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="installationTime">Preferred Time Slot *</Label>
                      <select
                        id="installationTime"
                        value={formData.installationTime}
                        onChange={(e) => handleInputChange("installationTime", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="9am-12pm">9am - 12pm</option>
                        <option value="12pm-3pm">12pm - 3pm</option>
                        <option value="3pm-6pm">3pm - 6pm</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-2">
                    * We'll contact you to confirm the exact installation date and time
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Add-Ons & Options
                  </h2>

                  <div className="space-y-4">
                    {/* Router Purchase Option */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="purchaseRouter"
                          checked={purchaseRouter}
                          onCheckedChange={(checked) => setPurchaseRouter(checked as boolean)}
                        />
                        <div className="flex-1">
                          <Label htmlFor="purchaseRouter" className="font-semibold cursor-pointer">
                            GI NET Enterprise Modem - $199
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            WiFi 6 enterprise-grade router with VLAN support, stronger coverage, and high device capacity
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Installation Options */}
                    <div className="space-y-3">
                      <Label className="font-semibold">Installation Options</Label>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            id="paidInstallation"
                            checked={installationOption === "paid"}
                            onChange={() => setInstallationOption("paid")}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <Label htmlFor="paidInstallation" className="font-semibold cursor-pointer">
                              On-Site Installation - $99
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Professional technician setup with VLAN configuration and WiFi optimization
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 bg-accent/5 border-accent/30">
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            id="free36month"
                            checked={installationOption === "free-36month"}
                            onChange={() => {
                              setInstallationOption("free-36month");
                              setPurchaseRouter(true);
                            }}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <Label htmlFor="free36month" className="font-semibold cursor-pointer flex items-center gap-2">
                              <Zap className="w-4 h-4 text-accent" />
                              36-Month Plan: Free Modem + Free Installation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Commit to 36 months and save $298 upfront! Includes GI NET Enterprise Modem and professional installation at no additional cost.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Processing..." : "Proceed to Secure Payment"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  You'll be redirected to Stripe for secure payment processing. Your subscription will activate immediately after payment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;