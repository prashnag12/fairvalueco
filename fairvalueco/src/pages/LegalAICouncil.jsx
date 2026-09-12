import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, FileSearch, LockKeyhole, Scale, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const capabilities = [
  {
    icon: FileSearch,
    title: 'Evidence-gap analysis',
    text: 'Identify missing, conflicting or insufficient evidence before it becomes a problem in the matter.'
  },
  {
    icon: Workflow,
    title: 'Structured matter intelligence',
    text: 'Turn complex documents into clear assessment notes, intake preparation and executive summaries.'
  },
  {
    icon: Scale,
    title: 'Independent review',
    text: 'Compare separate analytical perspectives and surface disagreements for professional review.'
  },
  {
    icon: ShieldCheck,
    title: 'Traceable outputs',
    text: 'Keep the reasoning connected to the underlying documents so lawyers can verify the result.'
  }
];

const faqs = [
  ['Is FVA a replacement for a lawyer?', 'No. FVA structures and challenges the matter. The lawyer remains responsible for verification, legal judgment and final advice.'],
  ['What types of work can it support?', 'FVA is designed for evidence-heavy legal work, including disputes, claims, investigations, commercial recovery and other matters where documents and missing evidence drive the analysis.'],
  ['Where is client data hosted?', 'FVA can be deployed in a private environment, including on-premises or a client-controlled AWS environment. The deployment approach can be discussed during the demonstration.'],
  ['How can our team evaluate it?', 'We begin with a focused demonstration and can then agree a controlled evaluation using suitable real or representative matters.']
];

export default function LegalAICouncil() {
  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-primary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.08fr_.92fr] gap-14 items-center">
            <div>
              <p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm mb-6">For legal teams and law firms</p>
              <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-[1.04] tracking-tight max-w-3xl">
                See the evidence gaps before they become legal problems.
              </h1>
              <p className="mt-7 text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl">
                FVA Legal AI Council helps lawyers turn complex matter documents into structured, reviewable intelligence, with clearer evidence gaps and a traceable path back to the source material.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded bg-secondary px-6 py-3.5 font-bold text-white hover:bg-secondary/90 transition-colors">
                  Arrange a private demonstration <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors">
                  See how it works
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-300">Designed to assist professional review. FVA does not provide legal advice.</p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                  <div><p className="text-xs font-bold uppercase tracking-widest text-secondary">Matter intelligence</p><p className="mt-1 text-lg font-bold text-primary">Assessment overview</p></div>
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-secondary" /></div>
                </div>
                <div className="mt-6 space-y-4">
                  {['Evidence coverage', 'Issues requiring follow-up', 'Source-linked assessment', 'Professional review'].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${index === 1 ? 'bg-amber-500' : 'bg-secondary'}`} />
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                      <span className="ml-auto text-xs text-slate-400">{index === 1 ? 'Review' : 'Ready'}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs font-bold uppercase tracking-wider text-amber-800">Evidence gap identified</p><p className="mt-1 text-sm leading-relaxed text-amber-900">A supporting document is referenced in the matter record but is not present in the review set.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start">
            <div><p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">The problem</p><h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">Important gaps are often hidden in the volume of the matter.</h2></div>
            <div className="text-lg text-slate-600 leading-relaxed space-y-5"><p>Legal teams spend significant time reading, cross-checking and reconstructing the state of a matter before they can make a confident assessment.</p><p>FVA helps organise that work. It brings the relevant evidence, unresolved issues and analytical reasoning into one reviewable workflow, so the lawyer can focus attention where professional judgment matters most.</p></div>
          </div>
        </section>

        <section id="capabilities" className="py-20 sm:py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 sm:px-8">
    <div className="max-w-2xl">
      <p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">
        What FVA supports
      </p>

      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
        A review layer built around evidence, not just text generation.
      </h2>
    </div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {capabilities.map(({ icon: Icon, title, text }) => (
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
      ))}
    </div>
  </div>
</section>

        <section id="how-it-works" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8"><div className="text-center max-w-2xl mx-auto"><p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">How it works</p><h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">From documents to a lawyer-reviewable matter picture.</h2></div><div className="mt-14 grid md:grid-cols-4 gap-8">{[['01','Provide the matter set','Relevant documents are brought together for the defined review.'],['02','Analyse independently','FVA examines the material through separate analytical perspectives.'],['03','Surface gaps and differences','Unresolved evidence issues and analytical disagreements are retained.'],['04','Review and decide','The lawyer verifies the output and makes the professional decision.']].map(([number,title,text]) => <div key={number} className="relative"><div className="text-4xl font-extrabold text-secondary/40">{number}</div><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-slate-600 leading-relaxed">{text}</p></div>)}</div></div>
        </section>

        <section className="py-20 sm:py-28 bg-primary"><div className="max-w-5xl mx-auto px-6 sm:px-8 text-center"><LockKeyhole className="mx-auto w-9 h-9 text-secondary" /><h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white">Professional control remains at the centre.</h2><p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-3xl mx-auto">FVA is designed to assist legal analysis, not replace legal judgment. Outputs are evidence-linked and reviewable, with deployment options that can be aligned to your firm’s confidentiality and data-control requirements.</p><div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-200"><span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Lawyer remains responsible</span><span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Traceable outputs</span><span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Private deployment options</span></div></div></section>

        <section id="demo" className="py-20 sm:py-28 bg-white"><div className="max-w-4xl mx-auto px-6 sm:px-8 text-center"><p className="text-secondary font-bold tracking-[0.18em] uppercase text-sm">See it in your context</p><h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">Book a private demonstration.</h2><p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">We can demonstrate the Council using a representative evidence-heavy matter and discuss whether a controlled evaluation is appropriate for your team.</p><a href="mailto:hello@fairvalueanalysis.com?subject=FVA%20Legal%20AI%20Council%20demonstration" className="mt-9 inline-flex items-center gap-2 rounded bg-secondary px-7 py-4 font-bold text-white hover:bg-secondary/90 transition-colors">Request a demonstration <ArrowRight className="w-4 h-4" /></a><p className="mt-5 text-sm text-slate-500">No commitment is required to arrange an initial discussion.</p></div></section>

        <section className="py-16 bg-slate-50"><div className="max-w-3xl mx-auto px-6 sm:px-8"><h2 className="text-2xl sm:text-3xl font-extrabold text-center">Frequently asked questions</h2><div className="mt-10 space-y-3">{faqs.map(([question,answer]) => <details key={question} className="group rounded-lg border border-slate-200 bg-white px-5"><summary className="flex cursor-pointer list-none items-center justify-between py-5 font-bold"><span>{question}</span><ChevronDown className="w-5 h-5 text-secondary transition-transform group-open:rotate-180" /></summary><p className="pb-5 pr-8 text-slate-600 leading-relaxed">{answer}</p></details>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
