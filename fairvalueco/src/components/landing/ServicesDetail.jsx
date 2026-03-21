import React from 'react';

const insuranceServices = [
  "Identify underpaid or overlooked components",
  "Highlight gaps and risks in your position",
  "Help structure your claim more effectively",
  "Provide a clear action plan before you proceed",
];

const litigationServices = [
  "Identify underpaid or overlooked components",
  "Highlight gaps and risks in your position",
  "Help structure your case more effectively",
  "Provide a clear action plan before you proceed",
];

export default function ServicesDetail() {
  return (
    <section id="insurance" className="py-16 sm:py-24 bg-primary border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Insurance Uplift
            </h2>
            <div className="mt-6 space-y-4">
              {insuranceServices.map((item) => (
                <div key={item} className="border-l-2 border-secondary pl-5 py-1">
                  <p className="text-sm sm:text-base font-medium text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="litigation">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Case / Litigation Analysis
            </h2>
            <div className="mt-6 space-y-4">
              {litigationServices.map((item) => (
                <div key={item} className="border-l-2 border-secondary pl-5 py-1">
                  <p className="text-sm sm:text-base font-medium text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}