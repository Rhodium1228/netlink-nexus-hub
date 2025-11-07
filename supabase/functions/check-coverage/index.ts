import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.79.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CoverageRequest {
  address: string;
  postcode?: string;
  suburb?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { address, postcode, suburb }: CoverageRequest = await req.json();

    console.log('Checking coverage for:', { address, postcode, suburb });

    if (!address || !postcode) {
      return new Response(
        JSON.stringify({ 
          error: 'Address and postcode are required',
          available: false 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if the postcode is in our service areas
    const { data: serviceAreas, error } = await supabase
      .from('service_areas')
      .select('*')
      .eq('postcode', postcode)
      .eq('available', true);

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to check coverage',
          available: false 
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const isAvailable = serviceAreas && serviceAreas.length > 0;

    console.log('Coverage check result:', { isAvailable, areas: serviceAreas?.length });

    return new Response(
      JSON.stringify({
        available: isAvailable,
        message: isAvailable 
          ? `Great news! Service is available in ${suburb || 'your area'}`
          : `Sorry, we don't service ${suburb || 'this area'} yet. We're expanding soon!`,
        serviceAreas: serviceAreas || []
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error('Error in check-coverage function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        available: false 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);