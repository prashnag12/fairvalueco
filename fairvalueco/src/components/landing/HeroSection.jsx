import React from 'react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-primary">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            You May Be Undervaluing Your Claim or Case
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            Get independent analysis before you proceed, so you don't miss value, weaken your position, or make the wrong move.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button
              onClick={() => scrollTo('#contact')}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-8 py-6 rounded"
            >
              Get Free Assessment
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 sm:gap-6 text-sm text-white/60 font-medium">
            <span>100% Confidential</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Independent</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>No Upfront Cost</span>
          </div>
        </div>

        {/* Dual Action Cards */}
        <div className="mt-16 sm:mt-20 grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded border border-border p-8 sm:p-10 flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-primary leading-snug">
              Insurance Claim Uplift Assessment
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-sm text-justify">
              Many claims are settled below their true value, often without you realising it. We identify what may have been overlooked before you proceed further.
            </p>
            <Button
              onClick={() => scrollTo('#contact')}
              variant="outline"
              className="mt-8 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded"
            >
              Review My Claim
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">Takes 2 minutes • No obligation</p>
          </div>

          <div className="bg-white rounded border border-border p-8 sm:p-10 flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-primary leading-snug">
              Structured Case Analysis (AI-Assisted)
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-sm text-justify">
              Before engaging legal support, understand whether your case has real strength, where the gaps are, and what your next move should be.
            </p>
            <Button
              onClick={() => scrollTo('#contact')}
              variant="outline"
              className="mt-8 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded"
            >
              Assess My Case
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">Takes 2 minutes • No obligation</p>
          </div>
        </div>
      </div>
    </section>
  );
}