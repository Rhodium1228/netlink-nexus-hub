import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlansHero from "@/components/plans/PlansHero";
import ThreePillars from "@/components/plans/ThreePillars";
import EnhancedPlanCards from "@/components/plans/EnhancedPlanCards";
import EnterpriseRouter from "@/components/plans/EnterpriseRouter";
import InteractiveVLANDiagram from "@/components/InteractiveVLANDiagram";
import ProfessionalInstallation from "@/components/ProfessionalInstallation";
import ACSUIntegration from "@/components/plans/ACSUIntegration";
import PlansCTA from "@/components/plans/PlansCTA";
import { Helmet } from "react-helmet";

const PlansPage = () => {
  return (
    <>
      <Helmet>
        <title>Internet Plans - Fast, Secure NBN Plans | GI NET</title>
        <meta 
          name="description" 
          content="Choose from GI NET's premium internet plans. From Basic 100 Mbps to Ultra 1 Gbps, all with enterprise-grade security, VLAN protection, and professional installation." 
        />
        <meta name="keywords" content="NBN plans, internet plans Melbourne, fast internet Australia, VLAN security, enterprise router, GI NET" />
        <link rel="canonical" href="https://ginet.au/plans" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <PlansHero />
          <ThreePillars />
          <EnhancedPlanCards />
          <EnterpriseRouter />
          <InteractiveVLANDiagram />
          <ProfessionalInstallation />
          <ACSUIntegration />
          <PlansCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlansPage;
