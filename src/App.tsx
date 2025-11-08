import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Support from "./pages/Support";
import Auth from "./pages/Auth";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";
import ConsumerAdvice from "./pages/ConsumerAdvice";
import AUP from "./pages/AUP";
import AccessibilityAndDisability from "./pages/AccessibilityAndDisability";
import CriticalInformationSummaries from "./pages/CriticalInformationSummaries";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/consumer-advice" element={<ConsumerAdvice />} />
          <Route path="/aup" element={<AUP />} />
          <Route path="/accessibility-and-disability" element={<AccessibilityAndDisability />} />
          <Route path="/accessibility" element={<AccessibilityAndDisability />} />
          <Route path="/critical-information-summaries" element={<CriticalInformationSummaries />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
