import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  FileSearch,
  Lightbulb,
  Scale,
  ShieldCheck
} from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const capabilities = [
  [
    'Patentability analysis',
    'Structure the assessment of an invention against relevant technical and patent evidence.'
  ],
  [
    'Prior-art analysis',
    'Review references against claims and identify potentially relevant disclosures and distinctions.'
  ],
  [
    'Claim and reference mapping',
    'Connect claim elements to source material through a clear, reviewable analysis workflow.'
  ],
  [
    'Evidence and reasoning trace',
    'Preserve the reasoning, evidence gaps and areas requiring professional review.'
  ]
];

export default function PatentAnalysis() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const openDemoForm = () => {
    setSubmitted(false);
    setFormError('');
    setIsDemoFormOpen(true);
  };

  const handleDemoSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    const form = event.currentTarget;

    try {
      const response = await fetch('https://formspree.io/f/xreyvyaa', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setFormError(
        'We could not submit your enquiry. Please try again or email hello@fairvalueanalysis.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-primary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
              backgroundSize: '52px 52px'
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.08fr_.92fr] gap-14 items-center">
            <div>
              <p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm mb-6">
                For patent professionals and research teams
              </p>

              <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight max-w-3xl">
                Bring structure and traceability to patent analysis.
              </h1>

              <p className="mt-7 text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                FVA Patent AI Council helps patent attorneys, universities and innovation teams organise technical evidence, examine prior art and prepare a clearer, reviewable basis for professional assessment.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={openDemoForm}
                  className="inline-flex items-center justify-center gap-2 rounded bg-secondary px-6 py-3.5 font-bold text-white hover:bg-secondary/90 transition-colors"
                >
                  Arrange a private demonstration
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore Patent Analysis
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-300">
                Designed to support professional patent review. FVA does not provide legal advice.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                      Patent analysis
                    </p>
                    <p className="mt-1 text-lg font-bold text-primary">
                      Review overview
                    </p>
                  </div>

                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    'Claim coverage',
                    'Prior-art relevance',
                    'Evidence gaps',
                    'Professional review'
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          index === 2 ? 'bg-amber-500' : 'bg-secondary'
                        }`}
                      />

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>

                      <span className="ml-auto text-xs text-slate-400">
                        {index === 2 ? 'Review' : 'Ready'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Evidence gap identified
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-amber-900">
                    A claim distinction requires further source verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-14">
            <div>
              <p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">
                The challenge
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Patent analysis requires more than finding similar documents.
              </h2>
            </div>

            <div className="text-lg text-slate-600 leading-relaxed space-y-5">
              <p>
                Patent and invention assessments require careful examination of claims, technical disclosures, reference relationships and the evidence supporting each conclusion.
              </p>

              <p>
                FVA helps organise that work into a reviewable workflow, so professionals can see what the evidence supports, where distinctions arise and what still requires expert assessment.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">
                What FVA supports
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                A structured intelligence layer for patent and invention review.
              </h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map(([title, text], index) => {
                const Icon = [
                  Lightbulb,
                  FileSearch,
                  Scale,
                  ShieldCheck
                ][index];

                return (
                  <article
                    key={title}
                    className="rounded-xl border border-slate-200 bg-white p-6 text-center"
                  >
                    <div className="flex justify-center">
                      <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-primary">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
            <ShieldCheck className="mx-auto w-9 h-9 text-secondary" />

            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white">
              Professional judgment remains central.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-3xl mx-auto">
              FVA Patent AI Council is designed to organise and challenge the analysis, while the patent professional remains responsible for verification, interpretation and the final assessment.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Source-linked analysis
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Evidence gaps retained
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Professional review
              </span>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">
              See it in your context
            </p>

            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Explore a private demonstration.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We can demonstrate Patent AI Council using a representative invention or prior-art matter and discuss whether a controlled evaluation is appropriate for your team.
            </p>

            <button
              type="button"
              onClick={openDemoForm}
              className="mt-9 inline-flex items-center gap-2 rounded bg-secondary px-7 py-4 font-bold text-white hover:bg-secondary/90 transition-colors"
            >
              Request a demonstration
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {isDemoFormOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/70 px-5 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="patent-demo-form-title"
        >
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsDemoFormOpen(false)}
              className="absolute right-5 top-4 text-2xl leading-none text-slate-400 hover:text-primary"
              aria-label="Close demonstration form"
            >
              ×
            </button>

            {submitted ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl font-extrabold text-primary">
                  Thank you for your enquiry.
                </h2>

                <p className="mt-3 text-slate-600">
                  We have received your details and will be in touch to arrange a demonstration.
                </p>

                <button
                  type="button"
                  onClick={() => setIsDemoFormOpen(false)}
                  className="mt-7 rounded bg-primary px-6 py-3 font-semibold text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                  FVA Patent AI Council
                </p>

                <h2
                  id="patent-demo-form-title"
                  className="mt-3 text-3xl font-extrabold text-primary"
                >
                  Request a private demonstration
                </h2>

                <p className="mt-3 text-slate-600">
                  Tell us a little about yourself and your patent or research work.
                </p>

                <form onSubmit={handleDemoSubmit} className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold text-slate-700">
                      First name
                      <input
                        required
                        name="first_name"
                        type="text"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                      />
                    </label>

                    <label className="text-sm font-semibold text-slate-700">
                      Last name
                      <input
                        required
                        name="last_name"
                        type="text"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-semibold text-slate-700">
                    Organisation or university
                    <input
                      required
                      name="business_name"
                      type="text"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    Work email
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    Contact number
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    Message
                    <span className="font-normal text-slate-400">
                      {' '}
                      (optional)
                    </span>

                    <textarea
                      name="message"
                      rows="3"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                  </label>

                  {formError && (
                    <p className="text-sm font-medium text-red-600">
                      {formError}
                    </p>
                  )}

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full rounded bg-secondary px-6 py-3.5 font-bold text-white hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending…' : 'Submit enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
