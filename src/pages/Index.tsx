import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className={`min-h-screen ${showSplash ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
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
    </>
  );
};

export default Index;
