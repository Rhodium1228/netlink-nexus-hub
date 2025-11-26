import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Plan price IDs mapping
const PLAN_PRICES: Record<string, string> = {
  Basic: "price_1SXgcaL2p33M6UKupHHPysmI",
  Pro: "price_1SXgdPL2p33M6UKuVdpscdLZ",
  Ultra: "price_1SXguCL2p33M6UKuXDtIlAml",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");

    const { planName, purchaseRouter, installationOption } = await req.json();
    
    if (!planName || !PLAN_PRICES[planName]) {
      throw new Error("Invalid plan name");
    }
    
    console.log("Checkout request:", { planName, purchaseRouter, installationOption });

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { 
      apiVersion: "2025-08-27.basil" 
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Build line items array
    const lineItems: any[] = [
      {
        price: PLAN_PRICES[planName],
        quantity: 1,
      }
    ];

    // Add one-time costs for 36-month commitment option
    if (installationOption === "free-36month") {
      // Free modem and installation included - no additional line items
      console.log("36-month plan selected - free modem and installation included");
    } else {
      // Add modem purchase as one-time cost if selected
      if (purchaseRouter) {
        lineItems.push({
          price_data: {
            currency: "aud",
            product_data: {
              name: "GI NET Enterprise Modem",
              description: "WiFi 6 modem with VLAN support and advanced features"
            },
            unit_amount: 19900, // $199 in cents
          },
          quantity: 1,
        });
        console.log("Added modem to checkout");
      }

      // Add installation fee if paid option selected
      if (installationOption === "paid") {
        lineItems.push({
          price_data: {
            currency: "aud",
            product_data: {
              name: "Professional On-Site Installation",
              description: "Technician setup with VLAN configuration and WiFi optimization"
            },
            unit_amount: 9900, // $99 in cents
          },
          quantity: 1,
        });
        console.log("Added installation to checkout");
      }
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems,
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/signup?success=true&plan=${encodeURIComponent(planName)}`,
      cancel_url: `${req.headers.get("origin")}/signup?plan=${encodeURIComponent(planName)}`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Checkout error:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
