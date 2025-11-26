import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import BusinessPlans from "@/components/BusinessPlans";
import CoverageCheck from "@/components/CoverageCheck";
import NBNAvailabilityCheck from "@/components/NBNAvailabilityCheck";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        
        <div id="plans">
          <Plans />
        </div>
        <BusinessPlans />
        <Features />
        <div id="coverage">
          
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>;
};
export default Index;