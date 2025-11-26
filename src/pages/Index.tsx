import Navbar from "@/components/Navbar";
import HeroModern from "@/components/HeroModern";
import AddressChecker from "@/components/AddressChecker";
import PlansCarousel from "@/components/PlansCarousel";
import WhyGINet from "@/components/WhyGINet";
import SecuritySection from "@/components/SecuritySection";
import InstallationSection from "@/components/InstallationSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterModern from "@/components/FooterModern";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroModern />
        <AddressChecker />
        <PlansCarousel />
        <WhyGINet />
        <SecuritySection />
        <InstallationSection />
        <ReviewsSection />
      </main>
      <FooterModern />
      <CookieConsent />
    </div>
  );
};

export default Index;
