import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'The Problem',
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        The insurer concluded that the claimant retained capacity to perform alternative work and
        applied a reduced benefit calculation based on an assumed earning capacity. The claim was
        partially denied. The claimant had no clear understanding of how this alternative work
        assessment was derived, what occupational assumptions were applied, or how the insurer
        arrived at the residual income figure used in the calculation.
      </p>
    ),
  },
  {
    number: '02',
    title: 'What We Analysed',
    content: (
      <ul className="space-y-2 text-sm text-muted-foreground">
        {[
          'Reviewed the insurer\'s claim calculation methodology and income replacement formula',
          'Assessed realistic earning capacity based on the claimant\'s occupational limitations',
          'Compared policy definitions against the insurer\'s applied interpretation',
          'Evaluated the consistency of medical and occupational assumptions used in the decision',
          'Identified potential gaps in the reasoning connecting medical evidence to vocational conclusions',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '03',
    title: 'Key Analytical Insights',
    content: (
      <ul className="space-y-2 text-sm text-muted-foreground">
        {[
          'Alternative occupation assumptions may not reflect real-world labour market conditions for a 42-year-old with physical limitations',
          'Income capacity projections appeared overstated relative to available occupational data',
          'The policy definition of "total and permanent disability" may have been interpreted more narrowly than the policy wording supports',
          'Functional limitations documented in medical evidence were not fully reflected in earning capacity assumptions',
          'Potential inconsistencies identified between medical evidence and the vocational assessment applied',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '04',
    title: 'What the Report Provided',
    content: (
      <ul className="space-y-2 text-sm text-muted-foreground">
        {[
          'Clear breakdown of the insurer\'s reasoning and calculation methodology',
          'Structured explanation of how income replacement and earning capacity were applied',
          'Identification of key gaps, assumptions, and areas of potential inconsistency',
          'Scenario comparison showing the insurer\'s view against an independently adjusted analytical view',
          'Evidence-ready documentation structured for further review or escalation discussions',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '05',
    title: 'What This Enabled',
    content: (
      <>
        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
          {[
            'Improved understanding of how the claim assessment was structured and reasoned',
            'Clear visibility of insurer assumptions and calculation methodology',
            'A stronger foundation for further review or escalation discussions',
            'More informed decision-making by the claimant regarding next steps',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
          Note: FairValue Analysis does not guarantee claim outcomes and does not represent claimants in any proceedings. This case is illustrative only.
        </p>
      </>
    ),
  },
];

function Step({ step, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-muted/30 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-secondary tracking-widest">{step.number}</span>
          <span className="text-sm font-bold text-primary">{step.title}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 bg-white border-t border-border">
          {step.content}
        </div>
      )}
    </div>
  );
}

export default function TPDCaseStudy() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">Case Study</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            How Our Analysis Helps – Example Case
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A practical illustration of how independent claim analytics can bring clarity to complex insurance decisions.
          </p>
        </div>

        {/* Case header */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Claim Type', value: 'Total & Permanent Disability (TPD)' },
            { label: 'Occupation', value: 'Construction Supervisor, Age 42' },
            { label: 'Pre-disability Income', value: '$120,000 per year' },
          ].map((item) => (
            <div key={item.label} className="bg-muted/40 rounded-xl p-5 border border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 border border-border rounded-xl p-5 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-primary">Condition:</strong> Chronic back injury limiting ability to perform prior work.
            The claim was declined or partially accepted based on the insurer's determination of residual work capacity,
            with benefit calculations relying on vocational and earning capacity assumptions the claimant could not verify.
          </p>
        </div>

        {/* Accordion steps */}
        <div className="space-y-3">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}