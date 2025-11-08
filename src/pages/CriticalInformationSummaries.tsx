import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, FileText, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CISDoc from "@/components/CISDoc";

// Plan data model
const plans = [
  // RESIDENTIAL
  {
    category: "Residential",
    planId: "basic",
    planName: "Basic",
    accessType: "NBN",
    speedTier: "100/20 Mbps",
    typicalEveningSpeed: "95 Mbps",
    monthlyPrice: "$69 (incl. GST)",
    contract: "No lock-in",
    setupFees: "Standard installation included; non-standard fees may apply",
    minimumCost: "$69 plus any non-standard install or router fees",
    includedData: "Unlimited",
    hardware: "BYO or Wi-Fi 6 router $199",
    billing: "Monthly in advance (card/direct debit)",
    fairUse: "Fair and responsible use applies",
    exclusions: "Availability varies by location; Ethernet recommended for highest speeds",
    movingHome: "Transfer available; fees may apply",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Support 7 days; service status at /status",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points every billing cycle; extra points on selected promos. See /rewards for terms.",
    notes: "Actual speeds vary due to line, in-home Wi-Fi, devices and network conditions",
    lastUpdated: "8 Nov 2025"
  },
  {
    category: "Residential",
    planId: "pro",
    planName: "Pro",
    accessType: "NBN",
    speedTier: "500/50 Mbps",
    typicalEveningSpeed: "450 Mbps",
    monthlyPrice: "$95 (incl. GST)",
    contract: "No lock-in",
    setupFees: "Onsite installation included; non-standard fees may apply",
    minimumCost: "$95 plus any non-standard install or router fees",
    includedData: "Unlimited",
    hardware: "BYO or Wi-Fi 6 router $199",
    billing: "Monthly in advance (card/direct debit)",
    fairUse: "Fair and responsible use applies",
    exclusions: "Some premises not eligible for higher tiers",
    movingHome: "Transfer available; fees may apply",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Priority support; status at /status",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points monthly; bonus points for 12-month continuous service. See /rewards.",
    notes: "Measured TES must be updated when materially changed",
    lastUpdated: "8 Nov 2025"
  },
  {
    category: "Residential",
    planId: "halal",
    planName: "Family-Safe (Halal)",
    accessType: "NBN",
    speedTier: "500/50 Mbps",
    typicalEveningSpeed: "450 Mbps",
    monthlyPrice: "$95 (incl. GST)",
    contract: "No lock-in",
    setupFees: "Onsite install & basic training included; non-standard fees may apply",
    minimumCost: "$95 plus any non-standard install or router fees",
    includedData: "Unlimited",
    hardware: "GI NET router $199",
    billing: "Monthly in advance",
    fairUse: "Fair and responsible use applies",
    exclusions: "Content filtering may block legitimate sites; allow-list on request",
    movingHome: "Transfer available; fees may apply",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Priority support; status at /status",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points; family-safe bonus campaigns may apply. See /rewards.",
    notes: "Filtering is opt-in and configurable; see /terms",
    lastUpdated: "8 Nov 2025"
  },
  {
    category: "Residential",
    planId: "ultra",
    planName: "Ultra",
    accessType: "NBN",
    speedTier: "1000/50 Mbps",
    typicalEveningSpeed: "900 Mbps",
    monthlyPrice: "$119 (incl. GST)",
    contract: "No lock-in",
    setupFees: "Onsite installation included; non-standard fees may apply",
    minimumCost: "$119 plus any non-standard install or router fees",
    includedData: "Unlimited",
    hardware: "BYO or Wi-Fi 6 router $199",
    billing: "Monthly in advance",
    fairUse: "Fair and responsible use applies",
    exclusions: "Device/LAN limits may cap throughput; Ethernet advised",
    movingHome: "Transfer available; fees may apply",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Priority support; status at /status",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn the highest monthly ACSU points tier; seasonal multipliers apply. See /rewards.",
    notes: "Publish measured TES and refresh if performance changes",
    lastUpdated: "8 Nov 2025"
  },
  // BUSINESS
  {
    category: "Business",
    planId: "biz-basic",
    planName: "Business Basic",
    accessType: "NBN",
    speedTier: "100/20 Mbps",
    typicalEveningSpeed: "90 Mbps",
    monthlyPrice: "$99 (excl. GST)",
    contract: "No lock-in",
    setupFees: "Dedicated business installation; non-standard fees may apply",
    minimumCost: "$99 + GST plus any non-standard install or router fees",
    includedData: "Unlimited",
    hardware: "Managed router optional $69/mo (Cyber Guard)",
    billing: "Monthly in advance; tax invoice provided",
    fairUse: "Business fair use applies",
    exclusions: "NBN Business Fibre availability varies",
    movingHome: "Relocation available; fees may apply",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Priority business support; target uptime 99.95% (see /business-terms)",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points on every paid invoice; business promos may offer multipliers. See /rewards.",
    notes: "Static IPv4 included by default",
    lastUpdated: "8 Nov 2025"
  },
  {
    category: "Business",
    planId: "biz-pro",
    planName: "Business Pro",
    accessType: "NBN",
    speedTier: "500/50 Mbps",
    typicalEveningSpeed: "430 Mbps",
    monthlyPrice: "$125 (excl. GST)",
    contract: "No lock-in",
    setupFees: "Onsite install + SLA; non-standard fees may apply",
    minimumCost: "$125 + GST plus any non-standard or router fees",
    includedData: "Unlimited",
    hardware: "BYO or Wi-Fi 6 $199; Cyber Guard firewall $69/mo, DDoS $15/mo, filtering $10/mo",
    billing: "Monthly in advance; tax invoice provided",
    fairUse: "Business fair use applies",
    exclusions: "Higher tiers may not be available at all premises",
    movingHome: "Relocation available",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Priority support; 99.95% target uptime (see /business-terms)",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points monthly; bonus tiers for multi-site accounts. See /rewards.",
    notes: "Static IPv4 included",
    lastUpdated: "8 Nov 2025"
  },
  {
    category: "Business",
    planId: "biz-smart",
    planName: "Business Smart (Family-Safe)",
    accessType: "NBN",
    speedTier: "500/50 Mbps",
    typicalEveningSpeed: "430 Mbps",
    monthlyPrice: "$115 (excl. GST)",
    contract: "No lock-in",
    setupFees: "Free onsite install + training + SLA; non-standard fees may apply",
    minimumCost: "$115 + GST plus any non-standard or router fees",
    includedData: "Unlimited",
    hardware: "GI NET router $199; Cyber Guard optional",
    billing: "Monthly in advance; tax invoice provided",
    fairUse: "Business fair use applies",
    exclusions: "Content filtering may block legitimate sites; allow-list available",
    movingHome: "Relocation available",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Priority support; 99.95% target uptime (see /business-terms)",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points; 'family-safe' business promos may apply. See /rewards.",
    notes: "Static IPv4 included; filtering opt-in, configurable",
    lastUpdated: "8 Nov 2025"
  },
  {
    category: "Business",
    planId: "biz-ultra",
    planName: "Business Ultra",
    accessType: "NBN",
    speedTier: "1000/50 Mbps",
    typicalEveningSpeed: "850 Mbps",
    monthlyPrice: "$169 (excl. GST)",
    contract: "No lock-in",
    setupFees: "Onsite install + SLA; non-standard fees may apply",
    minimumCost: "$169 + GST plus any non-standard or router fees",
    includedData: "Unlimited",
    hardware: "BYO or Wi-Fi 6 $199; enterprise security suite included",
    billing: "Monthly in advance; tax invoice provided",
    fairUse: "Business fair use applies",
    exclusions: "LAN/device caps may limit throughput; Ethernet advised",
    movingHome: "Relocation available",
    cancellation: "No early termination fee on no lock-in",
    faultsAndSupport: "Premium 7-day support; 99.95% target uptime (see /business-terms)",
    privacy: "/privacy",
    complaints: "/complaints",
    acsuRewards: "Earn ACSU points monthly; enterprise promos available. See /rewards.",
    notes: "Static IPv4 included",
    lastUpdated: "8 Nov 2025"
  }
];

type Plan = typeof plans[0];

const CriticalInformationSummaries = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle deep linking with hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const plan = plans.find(p => p.planId === hash);
      if (plan) {
        setSelectedPlan(plan);
        setIsModalOpen(true);
      }
    }
  }, []);

  // Filter plans
  const filteredPlans = plans
    .filter(plan => {
      if (selectedCategory !== "All" && plan.category !== selectedCategory) return false;
      if (searchQuery && !plan.planName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      const comparison = a.planName.localeCompare(b.planName);
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const handleViewCIS = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    window.location.hash = plan.planId;
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main id="main" className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Critical Information Summaries (CIS)
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Download key facts for each GI NET plan. Typical Evening Speeds shown are measured 7–11pm.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Button>
            <Button
              variant={selectedCategory === "Residential" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Residential")}
            >
              Residential
            </Button>
            <Button
              variant={selectedCategory === "Business" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Business")}
            >
              Business
            </Button>
          </div>
          
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Button
            variant="outline"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Sort: {sortOrder === "asc" ? "A–Z" : "Z–A"}
          </Button>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlans.map((plan) => (
            <Card key={plan.planId} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={plan.category === "Business" ? "secondary" : "default"}>
                    {plan.category}
                  </Badge>
                  {plan.planName.includes("Halal") && (
                    <Badge variant="outline">Family-Safe</Badge>
                  )}
                </div>
                <CardTitle>{plan.planName}</CardTitle>
                <CardDescription>
                  {plan.speedTier} • TES: {plan.typicalEveningSpeed}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">{plan.monthlyPrice}</div>
                  <div className="text-sm text-muted-foreground">{plan.contract}</div>
                </div>
                
                <div className="text-sm text-muted-foreground border-t pt-3">
                  <strong>ACSU rewards:</strong> See details in CIS
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleViewCIS(plan)}
                    className="flex-1"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View CIS
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Notes */}
        <div className="bg-muted/50 rounded-lg p-6 text-sm text-muted-foreground space-y-2">
          <h2 className="font-semibold text-foreground mb-3">Important Information</h2>
          <ul className="space-y-1 list-disc pl-5">
            <li>Typical Evening Speeds (7–11pm) are measured values and updated when performance materially changes.</li>
            <li>Download/Upload labels reflect the NBN access tier (maximum wholesale) and are not a guarantee of actual speeds.</li>
            <li>Residential prices include GST; Business prices exclude GST.</li>
            <li>Standard installation included; non-standard work may attract fees.</li>
            <li>Content filtering (Family-Safe) is opt-in and configurable; allow-list available on request.</li>
            <li>ACSU Rewards are administered by ACSU; points do not have cash value and cannot be used to pay invoices. See /rewards.</li>
          </ul>
        </div>
      </main>

      <Footer />

      {/* CIS Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto print:max-w-none print:max-h-none print:overflow-visible">
          <DialogHeader className="print:hidden">
            <DialogTitle>Critical Information Summary</DialogTitle>
            <Button
              onClick={handleDownloadPDF}
              variant="outline"
              className="absolute right-12 top-4"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </DialogHeader>
          
          {selectedPlan && <CISDoc plan={selectedPlan} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CriticalInformationSummaries;
