import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

const findings = [
  'Income capacity assumptions appear overstated relative to documented occupational limitations',
  'Occupational reclassification may not fully account for physical restrictions on sustained work capacity',
  'Policy definition interpretation differs from the applied reasoning — the standard may have been applied more narrowly than the wording supports',
  'Medical-vocational alignment gaps identified: functional limitations documented in clinical evidence are not consistently reflected in the vocational assessment',
];

const observations = [
  'The insurer\'s alternative occupation assumptions may benefit from further clarification against current labour market data for comparable roles',
  'Areas where medical evidence interpretation appears to diverge from vocational conclusions warrant closer examination',
  'The income calculation methodology relies on assumptions that may not fully account for the claimant\'s actual functional capacity',
  'Key policy definition terms applied in the assessment may be open to a broader interpretive reading than the insurer\'s decision reflects',
];

export default function TPDSampleReport() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">Sample Report</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            Sample Claim Assessment Report
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            The following is an illustrative example of a FairValue Analysis claim assessment report. All details are fictional and for demonstration purposes only.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">

          {/* Report header */}
          <div className="bg-primary px-8 py-6 flex items-start gap-4">
            <FileText className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">FairValue Analysis — Claim Assessment Report</p>
              <h3 className="text-lg font-extrabold text-white">TPD Claim Assessment — Construction Supervisor</h3>
              <p className="text-xs text-white/50 mt-1">Illustrative Example Only · Not a Real Case</p>
            </div>
          </div>

          <div className="divide-y divide-border">

            {/* Case Summary */}
            <div className="px-8 py-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Case Summary</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ['Claim Type', 'TPD — Total & Permanent Disability'],
                  ['Occupation', 'Construction Supervisor'],
                  ['Age at Claim', '42'],
                  ['Pre-disability Income', '$120,000 per annum'],
                  ['Condition', 'Chronic back injury affecting work capacity'],
                  ['Insurer Outcome', 'Claim declined / benefit reduced'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <span className="text-xs font-semibold text-muted-foreground w-40 shrink-0">{k}:</span>
                    <span className="text-xs text-primary font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Summary */}
            <div className="px-8 py-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">1. Executive Summary</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The insurer declined or reduced the TPD benefit on the basis that the claimant retains capacity to perform
                alternative work, applying an earning capacity assumption to the benefit calculation. The primary analytical concern
                identified in this assessment is the consistency and basis of the vocational and earning capacity assumptions applied —
                specifically whether these assumptions accurately reflect the claimant's documented functional limitations and the
                available labour market for comparable roles.
              </p>
            </div>

            {/* Insurer Assessment Overview */}
            <div className="px-8 py-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">2. Insurer Assessment Overview</h4>
              <ul className="space-y-2">
                {[
                  'Alternative work capacity determined based on vocational assessment',
                  'Reduced benefit calculation applied using assumed residual earning capacity',
                  'Claim outcome reliant on occupational reclassification and earning capacity projections',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Analytical Findings */}
            <div className="px-8 py-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">3. Key Analytical Findings</h4>
              <ul className="space-y-3">
                {findings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scenario Comparison */}
            <div className="px-8 py-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">4. Scenario Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary border border-border">Scenario</th>
                      <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary border border-border">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border border-border font-medium">Insurer Assessment</td>
                      <td className="px-4 py-3 text-muted-foreground border border-border">Reduced or denied benefit based on assumed earning capacity</td>
                    </tr>
                    <tr className="bg-secondary/5">
                      <td className="px-4 py-3 text-secondary font-semibold border border-border">Independent Analysis</td>
                      <td className="px-4 py-3 text-muted-foreground border border-border">Higher potential entitlement range <span className="text-xs font-normal text-muted-foreground/70">(indicative only — not a guarantee)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Observations */}
            <div className="px-8 py-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">5. Observations</h4>
              <ul className="space-y-3">
                {observations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="px-8 py-6 bg-amber-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Disclaimer:</strong> This report is an independent analytical assessment and does not constitute legal or financial advice.
                  FairValue Analysis is not a law firm and does not represent clients in any legal proceedings, disputes, or negotiations.
                  This sample is illustrative only and does not relate to any real individual, insurer, or claim.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}