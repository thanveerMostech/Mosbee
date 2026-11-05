import React from 'react';

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Eyebrow Pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#020c4c] border border-[#020c4c] text-xs font-mono text-white tracking-wide text-center shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
          <span className="font-semibold text-slate-100">
            ERP · Accounts · HRMS · CRM · PRO · Chatbot · Projects · Tasks
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
        Run the whole business from{' '}
        <span className="text-[#020c4c]">
          one core.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Mosbee puts operations, finance, sales, people, projects and customer support on a single database and a single login. Take the complete suite at a bundle price — or buy only the products you need and add the rest whenever you are ready.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a
          href="#pricing-section"
          className="w-full sm:w-auto px-6 py-3.5 bg-[#020c4c] hover:bg-[#020c4c]/90 text-white font-semibold text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-md shadow-[#020c4c]/25"
        >
          <span>Get the complete suite</span>
          <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
        </a>
        <a
          href="#suite-section"
          className="w-full sm:w-auto px-6 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-sm rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm"
        >
          <span>Explore the products</span>
          <span className="material-symbols-outlined text-[18px]">grid_view</span>
        </a>
      </div>

      {/* Trust Checkpoints */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-[#020c4c] text-[18px]">check_circle</span>
          <span>
            <strong className="text-slate-900">14-day pilot</strong> with your own data
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-[#020c4c] text-[18px]">check_circle</span>
          <span>
            <strong className="text-slate-900">Setup &amp; migration</strong> included
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-[#020c4c] text-[18px]">check_circle</span>
          <span>
            <strong className="text-slate-900">Cancel</strong> any time
          </span>
        </div>
      </div>
    </div>
  );
}
