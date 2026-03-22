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

export default function SampleCaseAnalysis() {
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
        <div className="bg-primary rounded px-8 py-8">
          <div className="text-center mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">FairValue Analysis</p>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              Pre-Litigation Case Assessment
            </h1>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/50 uppercase tracking-widest">Report Type</p>
            <p className="text-sm font-semibold text-secondary mt-0.5">Structured Case Analysis</p>
          </div>
        </div>

        {/* Case Overview */}
        <Section title="Case Overview">
          <div className="space-y-1">
            <Row label="Dispute Type" value="Breach of Contract" />
            <Row label="Estimated Claim Value" value="$50,000" />
            <Row label="Jurisdiction" value="New South Wales" />
          </div>
        </Section>

        {/* Objective */}
        <Section title="Objective">
          <p className="text-sm text-muted-foreground leading-relaxed">
            To assess the strength of the case prior to engaging legal representation and identify key risks, gaps, and opportunities that may influence the outcome.
          </p>
        </Section>

        {/* Scope of Review */}
        <Section title="Scope of Review">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This assessment has been conducted based on the information available at the time of review.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No independent verification of documents has been performed. The analysis is limited to the materials provided and reasonable assumptions based on standard dispute evaluation practices.
          </p>
        </Section>

        {/* Strength Assessment */}
        <Section title="Strength Assessment">
          <div className="bg-primary rounded p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Overall Case Strength</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-secondary">Moderate to Strong</p>
          </div>
        </Section>

        {/* Indicative Outcome Assessment */}
        <Section title="Indicative Outcome Assessment">
          <div className="border border-border rounded p-5 text-center mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Indicative Probability of Favourable Outcome</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">65% – 75%</p>
            <p className="text-sm text-muted-foreground mt-2">Confidence Level: Moderate</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            This range reflects an indicative assessment based on evidence quality, contractual clarity, and potential counter-arguments.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Actual outcomes may vary depending on additional facts, legal interpretation, and representation.
          </p>
        </Section>

        {/* Key Strengths */}
        <Section title="Key Strengths">
          <ul className="space-y-2">
            {[
              "Clearly defined contractual obligations",
              "Documented communication trail",
              "Evidence indicating non-performance",
              "Financial impact identifiable",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Key Risks */}
        <Section title="Key Risks">
          <ul className="space-y-2">
            {[
              "Ambiguity in certain contract clauses",
              "Potential counter-arguments on interpretation",
              "Limited documentation supporting key events",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Gaps Identified */}
        <Section title="Gaps Identified">
          <ul className="space-y-2">
            {[
              "No structured timeline of events",
              "Damages not fully quantified",
              "Lack of organised supporting evidence",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Methodology */}
        <Section title="Methodology">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This assessment has been conducted using a structured case evaluation framework, considering:
          </p>
          <ul className="space-y-2">
            {[
              "Evidence strength and completeness",
              "Clarity of contractual obligations",
              "Potential legal arguments and counter-arguments",
              "Documentation quality and consistency",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Strategic Positioning */}
        <Section title="Strategic Positioning">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The case is viable but would benefit significantly from improved documentation, clear quantification of losses, and structured presentation before legal engagement.
          </p>
        </Section>

        {/* Recommended Next Steps */}
        <Section title="Recommended Next Steps">
          <ol className="space-y-2">
            {[
              "Prepare a clear timeline of events",
              "Quantify damages in detail",
              "Organise supporting evidence",
              "Engage legal counsel with a structured brief",
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
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            The case has a solid foundation. Strengthening documentation and clarity will materially improve legal positioning and increase the likelihood of a favourable outcome.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This assessment is intended to support informed decision-making prior to engaging legal counsel.
          </p>
        </Section>

        {/* Assumptions & Limitations */}
        <Section title="Assumptions &amp; Limitations">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This assessment assumes that all information provided is accurate and complete.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The analysis is indicative and does not account for undisclosed facts, legal nuances, or jurisdiction-specific interpretations that may affect outcome.
          </p>
        </Section>

        {/* Disclaimer */}
        <div className="pt-8 mt-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This report is provided by FairValue Analysis as an independent analytical assessment based on the information available at the time of review.
            <br /><br />
            This report does not constitute legal advice, financial advice, or professional advisory services. It is intended for informational and strategic assessment purposes only.
            <br /><br />
            The observations and conclusions presented are based on a structured review of the provided information and should not be relied upon as a substitute for independent legal advice.
            <br /><br />
            Users are strongly encouraged to seek qualified legal counsel before taking action.
            <br /><br />
            FairValue Analysis does not represent clients in legal proceedings, negotiations, or communications with third parties.
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