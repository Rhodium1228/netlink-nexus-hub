import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import CoverageCheck from "@/components/CoverageCheck";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <div id="plans">
          <Plans />
        </div>
        <div id="coverage">
          <CoverageCheck />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
