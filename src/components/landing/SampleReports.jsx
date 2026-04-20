import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const reports = [
  {
    title: "Insurance Claim Uplift Report",
    description: "See how we identify valuation gaps and uncover additional claim value.",
    href: "/sample-uplift-report",
  },
  {
    title: "Case Analysis Report",
    description: "Understand how we assess case strength, risks, and strategic positioning.",
    href: "/sample-case-analysis",
  },
  {
    title: "Lawyer Brief",
    description: "A structured summary designed to help you engage legal counsel more effectively.",
    href: "/sample-lawyer-brief",
  },
];

export default function SampleReports() {
  return (
    <section className="py-16 sm:py-24 bg-muted border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight text-center">
          Sample Insights &amp; Reports
        </h2>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-3 gap-6 sm:gap-8">
          {reports.map((report) => (
            <div
              key={report.title}
              className="bg-white border border-border rounded p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-base sm:text-lg font-bold text-primary leading-snug">
                {report.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {report.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded"
              >
                {report.href.startsWith('/') ? (
                  <Link to={report.href}>View Sample</Link>
                ) : (
                  <a href={report.href}>View Sample</a>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}