import React, { useState } from 'react';
import { Hexagon, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('products');

  const navLinks = [
    { id: 'suite-section', label: 'Products', key: 'products' },
    { id: 'pricing-section', label: 'Pricing', key: 'pricing' },
    { id: 'why-bundle', label: 'Why bundle', key: 'why-bundle' },
    { id: 'integrations-section', label: 'Integrations', key: 'integrations' },
    { id: 'faq-section', label: 'FAQ', key: 'faq' },
  ];

  const handleNavClick = (key) => {
    setActiveNav(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand Logo - MOSBEE only */}
        <a href="#" className="flex items-center space-x-2.5 text-lg font-bold tracking-tight text-slate-900 group">
          <div className="w-9 h-9 rounded-xl bg-[#020c4c] border border-[#020c4c] flex items-center justify-center text-white shadow-sm group-hover:bg-[#020c4c]/90 transition-colors">
            <Hexagon size={20} className="text-white" strokeWidth={2.2} />
          </div>
          <span className="tracking-wider font-extrabold text-slate-900 text-xl">MOSBEE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeNav === link.key;
            return (
              <a
                key={link.key}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.key)}
                className={`transition-colors py-1 ${isActive
                    ? 'text-[#020c4c] font-bold border-b-2 border-[#020c4c]'
                    : 'text-slate-600 hover:text-[#020c4c]'
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="#demo-section"
            className="bg-[#020c4c] hover:bg-[#020c4c]/90 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 flex items-center space-x-1.5"
          >
            <span>Get started</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="#demo-section"
            className="bg-[#020c4c] text-white text-xs px-3.5 py-1.5 rounded-lg font-medium"
          >
            Get started
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-3 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.key)}
                className={`py-2 px-3 rounded-lg ${activeNav === link.key
                    ? 'bg-[#020c4c] text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
