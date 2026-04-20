import React from 'react';
import { TrendingDown, HelpCircle, AlertOctagon, DollarSign, TrendingUp, BarChart2, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const rows = [
  {
    without: { icon: AlertOctagon, text: "Accepts insurer's initial offer without question" },
    with: { icon: CheckCircle, text: "Understands true market value before responding" },
  },
  {
    without: { icon: HelpCircle, text: "Limited understanding of valuation methodology" },
    with: { icon: BarChart2, text: "Identifies valuation gaps and inconsistencies" },
  },
  {
    without: { icon: TrendingDown, text: "Misses discrepancies in comparable vehicles" },
    with: { icon: FileText, text: "Uses structured evidence for negotiation" },
  },
  {
    without: { icon: DollarSign, text: "Lower final settlement outcome" },
    with: { icon: TrendingUp, text: "Materially improves final settlement outcome" },
  },
];

export default function InsuranceInsight() {
  return (
    <section className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
            Most People Accept Less Than They Should
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Without structured analysis, valuation gaps go unnoticed. Here's what changes with FairValue Analysis.
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 mb-4 px-1">
          <div className="bg-destructive/10 border border-destructive/20 rounded px-4 py-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-destructive/80">Without FairValue Analysis</span>
          </div>
          <div className="flex items-center justify-center w-10" />
          <div className="bg-secondary/10 border border-secondary/25 rounded px-4 py-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">With FairValue Analysis</span>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-3">
          {rows.map(({ without, with: w }, i) => {
            const WithoutIcon = without.icon;
            const WithIcon = w.icon;
            return (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">

                {/* Without Card */}
                <div className="flex items-center gap-3 bg-destructive/5 border border-destructive/15 rounded p-4">
                  <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <WithoutIcon className="w-4 h-4 text-destructive/60" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{without.text}</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                {/* With Card */}
                <div className="flex items-center gap-3 bg-secondary/5 border border-secondary/20 rounded p-4">
                  <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <WithIcon className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-primary leading-snug">{w.text}</p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 bg-primary rounded-lg p-6 sm:p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">The Result</p>
          <p className="text-lg sm:text-xl font-extrabold text-white leading-snug">
            A structured, independent valuation — before you accept any offer.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Identify the gap. Build the evidence. Negotiate from a position of clarity.
          </p>
        </div>

      </div>
    </section>
  );
}