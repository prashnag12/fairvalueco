import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-primary border-t border-white/10">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-xl font-extrabold text-white tracking-tight">FairValue Analysis</span>
        <p className="mt-2 text-sm text-white/50">
          <a href="mailto:hello@fairvalueanalysis.com" className="hover:text-white/70 transition-colors">
            hello@fairvalueanalysis.com
          </a>
        </p>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed max-w-xl mx-auto">
            FairValue Analysis is an independent advisory platform. We are not a law firm and do not provide legal or financial advice. We do not represent clients in communications with insurers or third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}