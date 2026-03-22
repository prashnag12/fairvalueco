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

export default function SampleLawyerBrief() {
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
              Case Brief for Legal Review
            </h1>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/50 uppercase tracking-widest">Report Type</p>
            <p className="text-sm font-semibold text-secondary mt-0.5">Lawyer Brief</p>
          </div>
        </div>

        {/* Client Summary */}
        <Section title="Client Summary">
          <div className="space-y-1">
            <Row label="Dispute Type" value="Property Damage / Contractual Liability" />
            <Row label="Estimated Claim Value" value="$45,000 – $60,000" />
            <Row label="Prepared For" value="Legal Review" />
          </div>
        </Section>

        {/* Objective */}
        <Section title="Objective">
          <p className="text-sm text-muted-foreground leading-relaxed">
            To provide a structured summary of the matter to enable efficient legal assessment, reduce onboarding time, and support strategic decision-making.
          </p>
        </Section>

        {/* Scope of Review */}
        <Section title="Scope of Review">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This brief has been prepared based on the information made available at the time of review and is intended to assist in preliminary legal assessment.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No independent verification of documents has been undertaken. The summary reflects a structured interpretation of the available information.
          </p>
        </Section>

        {/* Situation Overview */}
        <Section title="Situation Overview">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The client alleges financial loss resulting from delayed performance and breach of contractual obligations by the counterparty. The matter involves failure to meet agreed timelines and associated financial impact.
          </p>
        </Section>

        {/* Key Facts */}
        <Section title="Key Facts">
          <ul className="space-y-2">
            {[
              "Contract executed on 10 January 2025",
              "Defined deliverables were not completed within agreed timeframe",
              "Multiple follow-ups documented via email communication",
              "Financial impact incurred due to delay and non-performance",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Supporting Evidence */}
        <Section title="Supporting Evidence">
          <ul className="space-y-2">
            {[
              "Executed contract agreement",
              "Email correspondence between parties",
              "Financial records supporting claimed loss",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Preliminary Legal Considerations */}
        <Section title="Preliminary Legal Considerations">
          <ul className="space-y-2">
            {[
              "Potential breach of contractual obligations",
              "Failure to perform within agreed terms",
              "Exposure to damages claims arising from non-performance",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Risk Considerations */}
        <Section title="Risk Considerations">
          <ul className="space-y-2">
            {[
              "Interpretation of contractual clauses",
              "Completeness and organisation of evidence",
              "Potential counter-arguments regarding liability",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Legal Risk Factors */}
        <Section title="Legal Risk Factors">
          <ul className="space-y-2">
            {[
              "Ambiguity in contractual interpretation",
              "Potential disputes regarding liability",
              "Variability in evidentiary strength",
              "Jurisdictional considerations that may affect outcome",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Strategic Observations */}
        <Section title="Strategic Observations">
          <ul className="space-y-2">
            {[
              "The matter appears legally viable based on available information",
              "A structured presentation of evidence may significantly improve efficiency",
              "Early clarification of damages and timelines will strengthen positioning",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Strategic Considerations */}
        <Section title="Strategic Considerations">
          <ul className="space-y-2">
            {[
              "Early clarification of contractual obligations may reduce dispute complexity",
              "Structured presentation of evidence may improve efficiency of legal review",
              "Pre-litigation positioning may influence negotiation dynamics",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Suggested Focus Areas for Counsel */}
        <Section title="Suggested Focus Areas for Counsel">
          <ol className="space-y-2">
            {[
              "Validation of contractual obligations and breach",
              "Assessment of recoverable damages",
              "Evaluation of negotiation vs litigation approach",
              "Identification of potential risks and defences",
            ].map((item, i) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="font-bold text-secondary shrink-0 w-5">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </Section>

        {/* Indicative Case Position */}
        <Section title="Indicative Case Position">
          <div className="border border-border rounded p-5 text-center">
            <p className="text-sm font-semibold text-primary">Indicative Case Position: Legally Viable (Subject to Counsel Review)</p>
          </div>
        </Section>

        {/* Conclusion */}
        <Section title="Conclusion">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The matter presents a viable basis for legal review. A structured, concise brief such as this may reduce onboarding time and support more efficient legal assessment.
          </p>
        </Section>

        {/* Assumptions & Limitations */}
        <Section title="Assumptions &amp; Limitations">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This brief is based on the assumption that the information provided is accurate and complete.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The analysis is indicative and may not account for all legal nuances, evidentiary developments, or jurisdiction-specific considerations.
          </p>
        </Section>

        {/* Disclaimer */}
        <div className="pt-8 mt-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This document is provided by FairValue Analysis as an independent analytical summary based on the information available at the time of preparation.
            <br /><br />
            This document does not constitute legal advice, financial advice, or professional advisory services. It is intended solely to assist in structuring information for legal review.
            <br /><br />
            The observations and considerations outlined are indicative and should not be relied upon as a substitute for independent legal advice.
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