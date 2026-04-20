import React from 'react';
import { AlertCircle, XCircle, Minus, Clock, FolderOpen, Search, AlignLeft, TrendingUp, Lightbulb, ClipboardList, ArrowDown } from 'lucide-react';

const pairs = [
  {
    issue: { icon: AlertCircle, label: "Unclear evidence structure" },
    help:  { icon: Search,      label: "Identifies critical gaps early" },
  },
  {
    issue: { icon: XCircle,      label: "Missing key facts" },
    help:  { icon: AlignLeft,    label: "Structures facts and timeline" },
  },
  {
    issue: { icon: Minus,        label: "Weak case positioning" },
    help:  { icon: TrendingUp,   label: "Strengthens case positioning" },
  },
  {
    issue: { icon: Clock,        label: "Delayed decisions" },
    help:  { icon: Lightbulb,    label: "Improves decision clarity" },
  },
  {
    issue: { icon: FolderOpen,   label: "Poor documentation" },
    help:  { icon: ClipboardList,label: "Prepares for effective legal review" },
  },
];

export default function CaseInsight() {
  return (
    <section className="py-16 sm:py-24 bg-muted border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
            Why Cases Weaken — And How Structured Analysis Helps
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Early missteps in case preparation can significantly limit your options. Here's exactly how we change that.
          </p>
        </div>

        {/* Header Row */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-4 mb-4 px-1">
          <div className="bg-destructive/10 border border-destructive/20 rounded px-4 py-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-destructive/80">Common Issues</span>
          </div>
          <div className="w-10" />
          <div className="bg-secondary/10 border border-secondary/25 rounded px-4 py-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">How FairValue Analysis Helps</span>
          </div>
        </div>

        {/* Paired Rows */}
        <div className="space-y-3">
          {pairs.map(({ issue, help }, i) => {
            const IssueIcon = issue.icon;
            const HelpIcon = help.icon;
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-center">

                {/* Mobile label */}
                <p className="sm:hidden text-xs font-bold uppercase tracking-widest text-destructive/70 mt-2">Issue</p>

                {/* Issue */}
                <div className="flex items-center gap-4 bg-white border border-destructive/15 rounded-lg p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-destructive/8 border border-destructive/15 flex items-center justify-center shrink-0">
                    <IssueIcon className="w-5 h-5 text-destructive/55" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{issue.label}</p>
                </div>

                {/* Arrow connector */}
                <div className="hidden sm:flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow">
                    <ArrowDown className="w-4 h-4 text-secondary -rotate-90" />
                  </div>
                </div>
                <div className="flex sm:hidden items-center justify-center py-1">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <ArrowDown className="w-3 h-3 text-secondary" />
                  </div>
                </div>

                {/* Mobile label */}
                <p className="sm:hidden text-xs font-bold uppercase tracking-widest text-secondary">Solution</p>

                {/* Help */}
                <div className="flex items-center gap-4 bg-white border border-secondary/25 rounded-lg p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <HelpIcon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-primary leading-snug">{help.label}</p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 bg-primary rounded-lg p-6 sm:p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">The Result</p>
          <p className="text-lg sm:text-xl font-extrabold text-white leading-snug">
            A structured, evidence-ready case brief — before you engage legal counsel.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Reduce onboarding time. Improve legal positioning. Make informed decisions earlier.
          </p>
        </div>

      </div>
    </section>
  );
}