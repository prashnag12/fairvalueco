import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Insurance Uplift", href: "#insurance" },
    { label: "Litigation Analysis", href: "#litigation" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <button onClick={() => scrollTo('#home')} className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary">
          FairValue Analysis
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo('#contact')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 rounded"
          >
            Free Case Evaluation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-5 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base font-medium text-primary hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo('#contact')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold mt-2 rounded"
            >
              Free Case Evaluation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}