import React from 'react';
import { Button } from "@/components/ui/button";

export default function MidPageCTA() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-20 bg-primary border-t border-white/10">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <Button
          onClick={() => scrollTo('#contact')}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-10 py-6 rounded"
        >
          Get Your Free Assessment
        </Button>
        <p className="mt-4 text-xs sm:text-sm text-white/50">
          100% Confidential • Independent • No Upfront Cost
        </p>
      </div>
    </section>
  );
}