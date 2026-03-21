import React from 'react';
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-primary border-t border-border">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Start Your Free Assessment
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
          Understand where you stand before making your next move.
        </p>
        <p className="mt-3 text-sm text-secondary font-medium">
          Early users currently receive complimentary initial assessments.
        </p>
        <Button
          onClick={() => scrollTo('#contact')}
          size="lg"
          className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-10 py-6 rounded"
        >
          Submit Your Case
        </Button>
        <p className="mt-4 text-sm text-white/50">
          100% Confidential • Independent • No Upfront Cost
        </p>
        <p className="mt-3 text-xs text-secondary/70 font-medium">
          Early users currently receive complimentary initial assessments.
        </p>
      </div>
    </section>
  );
}