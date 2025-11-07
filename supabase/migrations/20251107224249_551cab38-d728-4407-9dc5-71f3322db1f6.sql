-- Create enum for order status
CREATE TYPE public.order_status AS ENUM (
  'pending',
  'payment_received',
  'scheduled',
  'installed',
  'active',
  'cancelled'
);

-- Create service_areas table for coverage checking
CREATE TABLE public.service_areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  postcode TEXT NOT NULL,
  suburb TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(postcode, suburb)
);

-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  address TEXT,
  postcode TEXT,
  suburb TEXT,
  city TEXT,
  state TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create plans table
CREATE TABLE public.plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  speed TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  features JSONB DEFAULT '[]'::jsonb,
  popular BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES public.plans(id),
  status order_status DEFAULT 'pending',
  installation_address TEXT,
  installation_date DATE,
  installation_time TEXT,
  router_purchase BOOLEAN DEFAULT false,
  router_price DECIMAL(10,2),
  total_amount DECIMAL(10,2) NOT NULL,
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.service_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- RLS Policies for service_areas (public read)
CREATE POLICY "Anyone can view service areas"
  ON public.service_areas FOR SELECT
  USING (true);

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for plans (public read)
CREATE POLICY "Anyone can view active plans"
  ON public.plans FOR SELECT
  USING (active = true);

-- RLS Policies for orders
CREATE POLICY "Users can view own orders"
  ON public.orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders"
  ON public.orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders"
  ON public.orders FOR UPDATE
  USING (auth.uid() = user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Insert sample service areas
INSERT INTO public.service_areas (postcode, suburb, city, state, available) VALUES
  ('2000', 'Sydney', 'Sydney', 'NSW', true),
  ('3000', 'Melbourne', 'Melbourne', 'VIC', true),
  ('4000', 'Brisbane', 'Brisbane', 'QLD', true),
  ('6000', 'Perth', 'Perth', 'WA', true),
  ('5000', 'Adelaide', 'Adelaide', 'SA', true),
  ('7000', 'Hobart', 'Hobart', 'TAS', true),
  ('2600', 'Canberra', 'Canberra', 'ACT', true);

-- Insert plans from the frontend
INSERT INTO public.plans (name, speed, price, features, popular) VALUES
  ('Basic', '100 Mbps', 69, '["Perfect for browsing & streaming", "Connect up to 5 devices", "24/7 customer support", "Free installation"]'::jsonb, false),
  ('Pro', '500 Mbps', 95, '["Best for gaming & CCTV streaming", "Connect up to 15 devices", "Priority customer support", "BYO Wi-Fi router or WiFi 6 router $199", "Onsite installation included", "No contracts required"]'::jsonb, true),
  ('Halal', '500 Mbps', 95, '["Family-friendly internet", "Adult sites & gambling blocked", "Best for gaming & CCTV streaming", "Connect up to 15 devices", "GI NET router $199", "Free onsite installation & training", "Priority customer support"]'::jsonb, false),
  ('Ultra', '1 Gbps', 119, '["Perfect for gaming & 4K CCTV streaming", "Unlimited devices", "Premium 24/7 support", "BYO Wi-Fi router or WiFi 6 router $199", "Onsite installation included", "Free security suite included"]'::jsonb, false);