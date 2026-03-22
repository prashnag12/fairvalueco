import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Section = ({ title, children }) => (
  <div className="py-8 border-b border-border">
    <h2 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{title}</h2>
    {children}
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:gap-4 py-1.5">
    <span className="text-sm text-muted-foreground sm:w-56 shrink-0">{label}</span>
    <span className="text-sm font-medium text-primary">{value}</span>
  </div>
);

export default function SampleUpliftReport() {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background py-10 px-5">
      <div className="max-w-3xl mx-auto">

        {/* Top Nav */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded px-3 py-1">
            Sample Report
          </span>
        </div>

        {/* Branded Report Header */}
        <div className="bg-primary rounded px-8 py-8 mb-0">
          <div className="text-center mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">FairValue Analysis</p>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              Insurance Claim Valuation Review
            </h1>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/50 uppercase tracking-widest">Report Type</p>
            <p className="text-sm font-semibold text-secondary mt-0.5">Claim Uplift Assessment</p>
          </div>
        </div>

        {/* Claim Overview */}
        <Section title="Claim Overview">
          <div className="space-y-1">
            <Row label="Vehicle" value="2022 Tesla Model Y" />
            <Row label="Claim Type" value="Total Loss" />
            <Row label="Settlement Offered by Insurer" value="$38,500" />
            <Row label="Date of Assessment" value="12 March 2026" />
          </div>
        </Section>

        {/* Objective */}
        <Section title="Objective">
          <p className="text-sm text-muted-foreground leading-relaxed">
            To independently assess whether the insurer's valuation reflects the true market value of the vehicle at the time of loss, based on available market data and comparable listings.
          </p>
        </Section>

        {/* Market Valuation Analysis */}
        <Section title="Market Valuation Analysis">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A review of comparable vehicles across multiple listing platforms indicates:
          </p>
          <ul className="space-y-2">
            {[
              "Vehicles of similar model, year, and condition range between $41,500 and $44,000",
              "Listings used by the insurer appear limited in scope",
              "Some comparables are from different geographic regions",
              "Several listings do not reflect equivalent specifications",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Key Findings */}
        <Section title="Key Findings">
          <ul className="space-y-2">
            {[
              "Optional features (enhanced autopilot, upgraded wheels) were not fully accounted for",
              "Depreciation applied exceeds observed market trends",
              "Limited and inconsistent comparable sample used in insurer valuation",
              "Geographic mismatch in comparable vehicles",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Valuation Gap */}
        <Section title="Valuation Gap Identified">
          <div className="space-y-1 mb-6">
            <Row label="Estimated Fair Market Value" value="$43,200" />
            <Row label="Insurer Offer" value="$38,500" />
          </div>
          <div className="bg-primary border border-primary rounded p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Potential Uplift</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-secondary">+$4,700</p>
            <p className="text-sm font-semibold text-white/70 mt-1">12.2% increase</p>
          </div>
        </Section>

        {/* Risk Considerations */}
        <Section title="Risk Considerations">
          <ul className="space-y-2">
            {[
              "Insurers may rely on internal valuation methodologies",
              "Time limits may apply when disputing valuations",
              "Evidence must be clearly structured to be effective",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Recommended Next Steps */}
        <Section title="Recommended Next Steps">
          <ol className="space-y-2">
            {[
              "Request a detailed valuation breakdown from the insurer",
              "Submit independent comparable listings",
              "Highlight inconsistencies in valuation methodology",
              "Escalate through internal review channels if required",
            ].map((item, i) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="font-bold text-secondary shrink-0 w-5">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </Section>

        {/* Conclusion */}
        <Section title="Conclusion">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The current settlement appears below market value based on available data. A structured response supported by market evidence may improve the outcome.
          </p>
        </Section>

        {/* Disclaimer */}
        <div className="pt-8 mt-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This report is provided by FairValue Analysis as an independent forensic assessment based solely on the information made available at the time of review.
            <br /><br />
            This report does not constitute legal advice, financial advice, or professional advisory services of any kind. It is intended for informational and analytical purposes only.
            <br /><br />
            The findings, observations, and valuation insights presented are based on market data, comparative analysis, and reasonable assumptions, and should not be relied upon as a substitute for professional legal or financial guidance.
            <br /><br />
            Users are encouraged to seek independent legal or financial advice before making any decisions or taking action based on this report.
            <br /><br />
            FairValue Analysis does not represent clients in negotiations, disputes, or communications with insurers or third parties.
          </p>
        </div>

        {/* Branded Footer */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-base font-extrabold text-primary tracking-tight">FairValue Analysis</span>
          <span className="text-xs text-muted-foreground">hello@fairvalueanalysis.com</span>
        </div>

      </div>
    </div>
  );
}