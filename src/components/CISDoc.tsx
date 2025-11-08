type Plan = {
  category: string;
  planId: string;
  planName: string;
  accessType: string;
  speedTier: string;
  typicalEveningSpeed: string;
  monthlyPrice: string;
  contract: string;
  setupFees: string;
  minimumCost: string;
  includedData: string;
  hardware: string;
  billing: string;
  fairUse: string;
  exclusions: string;
  movingHome: string;
  cancellation: string;
  faultsAndSupport: string;
  privacy: string;
  complaints: string;
  acsuRewards: string;
  notes: string;
  lastUpdated: string;
};

interface CISDocProps {
  plan: Plan;
}

const CISDoc = ({ plan }: CISDocProps) => {
  return (
    <div className="cis-document bg-background text-foreground p-8 print:p-12">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 14mm;
          }
          
          body * {
            visibility: hidden;
          }
          
          .cis-document,
          .cis-document * {
            visibility: visible;
          }
          
          .cis-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          
          nav, footer, header, .print\\:hidden {
            display: none !important;
          }
          
          table {
            page-break-inside: avoid;
          }
          
          h1, h2, h3 {
            page-break-after: avoid;
          }
        }
      `}</style>

      {/* Header */}
      <header className="border-b-2 border-border pb-6 mb-8">
        <div className="text-3xl font-bold text-primary mb-2">GI NET</div>
        <h1 className="text-2xl font-bold text-foreground mb-1">
          {plan.planName} – {plan.category}
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {plan.lastUpdated}</p>
        <p className="text-sm mt-4 text-foreground">
          This Critical Information Summary sets out the key details for this plan. Read with our Terms & Conditions and Acceptable Use Policy.
        </p>
      </header>

      {/* Key Details Table */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          Key Details
        </h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground w-1/3">Access Type</td>
              <td className="py-3 text-foreground">{plan.accessType}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Speed Tier</td>
              <td className="py-3 text-foreground">{plan.speedTier}</td>
            </tr>
            <tr className="border-b border-border bg-muted/30">
              <td className="py-3 pr-4 font-semibold text-foreground">Typical Evening Speed (7–11pm)</td>
              <td className="py-3 text-foreground font-bold">{plan.typicalEveningSpeed}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Included Data</td>
              <td className="py-3 text-foreground">{plan.includedData}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Monthly Price</td>
              <td className="py-3 text-foreground font-bold">{plan.monthlyPrice}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Contract Term</td>
              <td className="py-3 text-foreground">{plan.contract}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Minimum Cost</td>
              <td className="py-3 text-foreground">{plan.minimumCost}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Setup/Activation Fees</td>
              <td className="py-3 text-foreground">{plan.setupFees}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-semibold text-foreground">Hardware Options</td>
              <td className="py-3 text-foreground">{plan.hardware}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Important Information */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          Important Information
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Speeds & Performance</h3>
            <p className="text-sm text-foreground mb-2">
              The Typical Evening Speed shown is a measured single value representing typical performance during busy hours (7–11pm). 
              Actual speeds vary due to in-home Wi-Fi, device limits, internal wiring, and network conditions. 
              For highest speeds, use Ethernet connection and test at different times.
            </p>
            <p className="text-sm text-muted-foreground italic">{plan.notes}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Equipment & Installation</h3>
            <p className="text-sm text-foreground">
              {plan.setupFees}. Hardware options: {plan.hardware}. 
              Standard installation covers typical premises; complex installations (e.g., requiring additional cabling or internal work) may attract additional fees.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Billing & Payments</h3>
            <p className="text-sm text-foreground">
              {plan.billing}. View bills and usage in the customer portal. Payment methods include credit/debit card and direct debit. 
              Card details are not stored by GI NET.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Moving Home</h3>
            <p className="text-sm text-foreground">{plan.movingHome}</p>
          </div>
        </div>
      </section>

      {/* Fair Use & Exclusions */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          Fair Use & Exclusions
        </h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Fair Use</h3>
            <p className="text-sm text-foreground">{plan.fairUse}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Limitations & Availability</h3>
            <p className="text-sm text-foreground">{plan.exclusions}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Cancellation</h3>
            <p className="text-sm text-foreground">{plan.cancellation}</p>
          </div>
        </div>
      </section>

      {/* ACSU Rewards */}
      <section className="mb-8 bg-muted/30 p-6 rounded-lg print:bg-gray-100">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          ACSU Rewards
        </h2>
        
        <p className="text-sm text-foreground mb-3">{plan.acsuRewards}</p>
        
        <ul className="space-y-2 text-sm text-foreground list-disc pl-5">
          <li>Points credit timing: within 5 business days of cleared payment</li>
          <li>Redemption occurs inside the ACSU app/site; see /rewards for how to redeem</li>
          <li>Points have no cash value; cannot offset invoices</li>
          <li>Fraud or chargebacks may forfeit points</li>
        </ul>
        
        <p className="text-sm text-muted-foreground mt-3">
          Full ACSU Rewards terms: <a href="/rewards" className="underline">ginet.au/rewards</a>
        </p>
      </section>

      {/* Support & Complaints */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          Support & Complaints
        </h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Technical Support</h3>
            <p className="text-sm text-foreground">{plan.faultsAndSupport}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Complaints Process</h3>
            <p className="text-sm text-foreground">
              See <a href={plan.complaints} className="underline">ginet.au/complaints</a>. 
              If unresolved, contact the Telecommunications Industry Ombudsman at tio.com.au or 1800 062 058.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
          Privacy
        </h2>
        <p className="text-sm text-foreground">
          We handle personal information under the Privacy Act 1988 (Cth). 
          See our full Privacy Policy at <a href={plan.privacy} className="underline">ginet.au/privacy</a>.
        </p>
      </section>

      {/* Contact */}
      <footer className="border-t-2 border-border pt-6">
        <div className="text-sm text-foreground space-y-1">
          <p className="font-bold">GI NET Pty Ltd</p>
          <p>ABN 71 608 672 608</p>
          <p>12 Stelvio Close, Lynbrook VIC 3975</p>
          <p>Phone: 03 8797 3795 • Email: support@ginet.au</p>
        </div>
      </footer>
    </div>
  );
};

export default CISDoc;
