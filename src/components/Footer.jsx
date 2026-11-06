import React from 'react';
import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2.5 mb-4 text-lg font-bold tracking-tight text-slate-900 group">
              <div className="w-9 h-9 rounded-xl bg-[#020c4c] border border-[#020c4c] flex items-center justify-center text-white shadow-sm group-hover:bg-[#020c4c]/90 transition-colors">
                <Hexagon size={20} className="text-white" strokeWidth={2.2} />
              </div>
              <span className="tracking-wider font-extrabold text-slate-900 text-xl">MOSBEE</span>
            </a>
            <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
              One platform for operations, finance, sales, people, projects and support. Take the bundle or build your own — either way it runs on the same core.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-mono text-xs text-slate-900 uppercase tracking-wider mb-4 font-bold">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">ERP</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">Account Management</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">HRMS</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">CRM</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">PRO</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">Chatbot</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">Project Management</a></li>
              <li><a href="#suite-section" className="hover:text-[#020c4c] transition-colors">Task Management</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="font-mono text-xs text-slate-900 uppercase tracking-wider mb-4 font-bold">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#pricing-section" className="hover:text-[#020c4c] transition-colors">Pricing</a></li>
              <li><a href="#integrations-section" className="hover:text-[#020c4c] transition-colors">Integrations</a></li>
              <li><a href="#why-bundle" className="hover:text-[#020c4c] transition-colors">Why bundle</a></li>
              <li><a href="#faq-section" className="hover:text-[#020c4c] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-mono text-xs text-slate-900 uppercase tracking-wider mb-4 font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#demo-section" className="hover:text-[#020c4c] transition-colors">Book a demo</a></li>
              <li><a href="#demo-section" className="hover:text-[#020c4c] transition-colors">Contact sales</a></li>
              <li><a href="#why-bundle" className="hover:text-[#020c4c] transition-colors">About us</a></li>
              <li><a href="#faq-section" className="hover:text-[#020c4c] transition-colors">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © 2026 Mosbee Systems. All rights reserved. Built for businesses that would rather run their company than run their software.
          </div>
          <div className="flex items-center space-x-2 text-[11px] text-[#020c4c] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#020c4c] animate-pulse"></span>
            <span>ALL CLUSTERS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
