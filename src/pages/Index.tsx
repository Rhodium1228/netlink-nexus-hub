import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import BusinessPlans from "@/components/BusinessPlans";
import CoverageCheck from "@/components/CoverageCheck";
import NBNAvailabilityCheck from "@/components/NBNAvailabilityCheck";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <NBNAvailabilityCheck />
        <div id="plans">
          <Plans />
        </div>
        <BusinessPlans />
        <Features />
        <div id="coverage">
          <CoverageCheck />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
