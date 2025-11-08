import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BusinessQuoteRequest {
  businessName: string;
  abn: string;
  postcode: string;
  contactName: string;
  email: string;
  phone: string;
  preferredPlan: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: BusinessQuoteRequest = await req.json();

    // Format email content
    const emailBody = `
New Business Quote Request

Business Details:
- Business Name: ${data.businessName}
- ABN: ${data.abn}
- Postcode: ${data.postcode}

Contact Information:
- Name: ${data.contactName}
- Email: ${data.email}
- Phone: ${data.phone}

Selected Plan: ${data.preferredPlan}

${data.message ? `Additional Message:\n${data.message}` : ''}

---
This quote request was submitted via ginet.au
    `.trim();

    console.log("Business quote request received:", {
      businessName: data.businessName,
      email: data.email,
      plan: data.preferredPlan
    });

    // In production, you would send this via Resend or another email service
    // For now, we'll just log it and return success
    
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Quote request received successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-business-quote function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
