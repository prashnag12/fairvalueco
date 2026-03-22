import React from 'react';

const phases = [
  {
    number: "01",
    title: "Confidential Inquiry",
    text: "Submit a simple summary. No sensitive documents required.",
  },
  {
    number: "02",
    title: "Initial Assessment",
    text: "We determine whether there is a clear path for further analysis.",
  },
  {
    number: "03",
    title: "Structured Engagement",
    text: "If suitable, we proceed with a defined assessment scope.",
  },
  {
    number: "04",
    title: "Analysis & Guidance",
    text: "Receive structured insights and recommended next steps.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-primary border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
          How It Works
        </h2>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase) => (
            <div key={phase.number} className="border-t-2 border-secondary pt-6 flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-secondary text-center">{phase.number}</span>
              <h3 className="mt-3 text-base font-bold text-white text-center leading-snug">{phase.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed text-center">{phase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}