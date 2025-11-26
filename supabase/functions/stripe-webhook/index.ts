import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[STRIPE-WEBHOOK] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Webhook received");
    
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { 
      apiVersion: "2025-08-27.basil" 
    });

    // Get the webhook secret from environment
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    if (!webhookSecret) {
      logStep("ERROR: STRIPE_WEBHOOK_SECRET not configured");
      throw new Error("Webhook secret not configured");
    }

    // Get the signature from headers
    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      logStep("ERROR: No signature found in request");
      throw new Error("No signature found");
    }

    // Get the raw body
    const body = await req.text();
    
    // Verify the webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      logStep("Webhook signature verified", { type: event.type });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      logStep("ERROR: Signature verification failed", { error: errorMessage });
      return new Response(JSON.stringify({ error: `Webhook Error: ${errorMessage}` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create Supabase client with service role key for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        logStep("Processing checkout.session.completed", { 
          sessionId: session.id,
          customerEmail: session.customer_email 
        });

        // Extract data from session
        const customerEmail = session.customer_email;
        const customerId = session.customer as string;
        const subscriptionId = session.subscription as string;

        if (!customerEmail) {
          logStep("ERROR: No customer email in session");
          break;
        }

        // Find user by email
        const { data: profile, error: profileError } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("email", customerEmail)
          .single();

        if (profileError || !profile) {
          logStep("ERROR: Could not find user profile", { email: customerEmail, error: profileError });
          break;
        }

        logStep("Found user profile", { userId: profile.id });

        // Find the most recent pending order for this user
        const { data: order, error: orderError } = await supabaseAdmin
          .from("orders")
          .select("id, status")
          .eq("user_id", profile.id)
          .eq("status", "pending")
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (orderError || !order) {
          logStep("WARNING: No pending order found for user", { userId: profile.id });
          // Create a new order record if none exists
          logStep("Note: Order may have been created through form submission");
          break;
        }

        logStep("Found pending order", { orderId: order.id });

        // Update the order with Stripe IDs and change status
        const { error: updateError } = await supabaseAdmin
          .from("orders")
          .update({
            stripe_customer_id: customerId,
            stripe_subscription_id: subscriptionId,
            status: "payment_received",
            updated_at: new Date().toISOString()
          })
          .eq("id", order.id);

        if (updateError) {
          logStep("ERROR: Failed to update order", { orderId: order.id, error: updateError });
          throw updateError;
        }

        logStep("Successfully updated order", { 
          orderId: order.id, 
          customerId, 
          subscriptionId 
        });
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        logStep("Processing customer.subscription.updated", { 
          subscriptionId: subscription.id,
          status: subscription.status 
        });

        // Update order status based on subscription status
        const newStatus = subscription.status === "active" ? "active" : "pending";
        
        const { error: updateError } = await supabaseAdmin
          .from("orders")
          .update({
            status: newStatus,
            updated_at: new Date().toISOString()
          })
          .eq("stripe_subscription_id", subscription.id);

        if (updateError) {
          logStep("ERROR: Failed to update order status", { error: updateError });
        } else {
          logStep("Successfully updated order status", { subscriptionId: subscription.id, newStatus });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        logStep("Processing customer.subscription.deleted", { subscriptionId: subscription.id });

        // Mark order as cancelled
        const { error: updateError } = await supabaseAdmin
          .from("orders")
          .update({
            status: "cancelled",
            updated_at: new Date().toISOString()
          })
          .eq("stripe_subscription_id", subscription.id);

        if (updateError) {
          logStep("ERROR: Failed to cancel order", { error: updateError });
        } else {
          logStep("Successfully cancelled order", { subscriptionId: subscription.id });
        }
        break;
      }

      default:
        logStep("Unhandled event type", { type: event.type });
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in webhook handler", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
