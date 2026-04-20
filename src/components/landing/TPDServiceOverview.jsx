import React from 'react';
import { ShieldCheck, AlertTriangle, FileText, BarChart2, Search, CheckCircle } from 'lucide-react';

const doItems = [
  'Analyse insurer claim calculation methodologies',
  'Assess income replacement and earning capacity assumptions',
  'Compare policy definitions vs insurer interpretation',
  'Identify inconsistencies, gaps, or assumptions in assessments',
  'Provide structured, evidence-based analytical insights',
];

const receiveItems = [
  'Detailed Claim Assessment Report',
  'Insurer Calculation Breakdown',
  'Scenario-based analysis (insurer view vs adjusted view)',
  'Structured documentation to support further review or escalation discussions',
];

const notItems = [
  'Provide legal advice',
  'Act as a law firm or claims management company',
  'Represent clients in disputes or negotiations',
  'Guarantee claim outcomes',
];

export default function TPDServiceOverview() {
  return (
    <section id="tpd-analytics" className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">Disability & TPD Claim Analytics</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            Disability & TPD Claim Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Independent analysis to help you understand and assess your insurance claim.
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-border p-7 sm:p-10 mb-10 shadow-sm">
          <p className="text-muted-foreground leading-relaxed text-base">
            Many disability and TPD claimants face a frustrating challenge: insurers often provide limited
            explanation of how claim outcomes are calculated, how policy definitions are applied, or how
            earning capacity is assessed. Without clear visibility into the insurer's reasoning, claimants
            are left uncertain about whether their claim has been evaluated fairly or consistently.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mt-4">
            FairValue Analysis provides an independent analytical layer — breaking down complex insurer
            reasoning into clear, structured insights, so claimants can better understand where they stand
            and what questions to ask.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-2xl border border-border p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-primary">What We Do</h3>
            </div>
            <ul className="space-y-3">
              {doItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-border p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-primary">What You Receive</h3>
            </div>
            <ul className="space-y-3">
              {receiveItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-10">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide">Important — What We Are Not</h3>
          </div>
          <p className="text-sm text-amber-800 mb-3">We provide <strong>independent analytical and reporting services only</strong>. We do not:</p>
          <ul className="space-y-2">
            {notItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Value statement */}
        <div className="text-center bg-primary rounded-2xl p-8 sm:p-10">
          <BarChart2 className="w-8 h-8 text-secondary mx-auto mb-4" />
          <p className="text-white text-lg sm:text-xl font-semibold leading-snug max-w-2xl mx-auto">
            "We turn complex insurance assessments into clear, structured insights so you can better understand your claim position."
          </p>
        </div>

      </div>
    </section>
  );
}