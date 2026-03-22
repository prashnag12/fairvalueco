import React from 'react';

const outcomes = [
  {
    item: "2022 Tesla Model Y",
    analysis: "Valuation Gap Identified",
    result: "+$5,000 Potential Uplift",
  },
  {
    item: "Commercial Dispute",
    analysis: "Breach of Contract Analysis",
    result: "Strategy Strength Identified",
  },
  {
    item: "2012 Ford F-150",
    analysis: "Valuation Normalisation Issue",
    result: "+$3,100 Potential Uplift",
  },
];

export default function OutcomesTable() {
  return (
    <section className="py-16 sm:py-24 bg-primary border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
          Real-World Insights
        </h2>

        <div className="mt-10 sm:mt-14 overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-white/20">
                <th className="pb-4 pr-6 text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider">Subject</th>
                <th className="pb-4 pr-6 text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider">Analysis</th>
                <th className="pb-4 text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((row, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="py-5 pr-6 text-sm sm:text-base font-semibold text-white">{row.item}</td>
                  <td className="py-5 pr-6 text-sm sm:text-base text-white/65">{row.analysis}</td>
                  <td className="py-5 text-sm sm:text-base font-semibold text-secondary">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-white/40 text-center italic">
          Examples are illustrative of analysis outcomes and do not guarantee results.
        </p>
      </div>
    </section>
  );
}