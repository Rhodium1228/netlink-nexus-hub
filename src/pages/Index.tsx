import Navbar from "@/components/Navbar";
import HeroModern from "@/components/HeroModern";
import AddressCheckerModern from "@/components/AddressCheckerModern";
import PlanCarousel from "@/components/PlanCarousel";
import WhyGINet from "@/components/WhyGINet";
import SecurityVLAN from "@/components/SecurityVLAN";
import ProfessionalInstallation from "@/components/ProfessionalInstallation";
import Testimonials from "@/components/Testimonials";
import BusinessPlans from "@/components/BusinessPlans";
import NBNAvailabilityCheck from "@/components/NBNAvailabilityCheck";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroModern />
        <AddressCheckerModern />
        <PlanCarousel />
        <WhyGINet />
        <SecurityVLAN />
        <ProfessionalInstallation />
        <Testimonials />
        <BusinessPlans />
        <div id="coverage">
          <NBNAvailabilityCheck />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;