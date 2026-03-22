import React from 'react';

const claimsPoints = [
  "Claims may be locked once accepted",
  "Early decisions can weaken your position",
  "Missing information reduces leverage",
  "Small gaps can lead to significant value loss",
];

const casesPoints = [
  "Early missteps can weaken your position",
  "Missing facts reduce strategic leverage",
  "Unclear merits can lead to poor decisions",
  "Delay can narrow your available options",
];

export default function UrgencySection() {
  return (
    <section className="py-16 sm:py-24 bg-muted border-t border-border">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
          Most People Realise Too Late
        </h2>

        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          <div>
            <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-4 text-center">Claims</p>
            <div className="space-y-3">
              {claimsPoints.map((point) => (
                <div key={point} className="bg-white border border-border rounded px-5 py-4 shadow-sm">
                  <p className="text-sm text-primary font-semibold leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-4 text-center">Cases</p>
            <div className="space-y-3">
              {casesPoints.map((point) => (
                <div key={point} className="bg-white border border-border rounded px-5 py-4 shadow-sm">
                  <p className="text-sm text-primary font-semibold leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-base sm:text-lg font-semibold text-primary/70 italic">
          Once you proceed, your options may become limited.
        </p>
      </div>
    </section>
  );
}