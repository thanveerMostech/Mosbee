import React from 'react';
import { Package, TrendingUp, Users, Wallet, CheckSquare, Bot } from 'lucide-react';

const integratedProducts = [
  {
    name: 'ERP',
    desc: 'Centralize multi-branch inventory, asset tracking, logistics and monthly production on one live operational backbone.',
    Icon: Package,
  },
  {
    name: 'CRM',
    desc: 'Capture leads, track deal stages and monitor revenue pipelines that convert directly into customer accounts.',
    Icon: TrendingUp,
  },
  {
    name: 'HRMS',
    desc: 'Manage employee directories, org charts, attendance, leave approvals and automated payroll in one place.',
    Icon: Users,
  },
  {
    name: 'Account Management',
    desc: 'Track revenue, invoices, top products, expense graphs and real-time transaction histories without manual re-entry.',
    Icon: Wallet,
  },
  {
    name: 'Task Management',
    desc: 'Coordinate daily work across To Do, In Progress and Done boards linked directly to payroll, invoices and operations.',
    Icon: CheckSquare,
  },
  {
    name: 'Chatbot',
    desc: 'Deliver 24/7 AI-powered customer and account assistance that can share invoices and update billing records instantly.',
    Icon: Bot,
  },
];

export default function IntegrationsSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 bg-white"
      id="integrations-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Explanatory Text for the 6 Integrated Products */}
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-[#020c4c] tracking-widest uppercase mb-2 font-bold">
            UNIFIED PRODUCT ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            One platform for your entire business.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Six core products connected on a single database — so every update in sales, finance, people or support reflects across your entire company instantly.
          </p>

          <ul className="space-y-3.5">
            {integratedProducts.map((item) => {
              const IconComponent = item.Icon;
              return (
                <li
                  key={item.name}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-[#020c4c]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#020c4c] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <IconComponent size={16} />
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="text-slate-900 font-bold block sm:inline">
                      {item.name}:{' '}
                    </strong>
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Full-Visibility Integrated Suite Showcase Image */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
            <img
              src="/images/Gemini_Generated_Image_jc16tpjc16tpjc16.png"
              alt="Mosbee unified business platform showing ERP, CRM, HRMS, Account Management, Task Management, and AI Chatbot dashboards integrated in one place"
              width="1408"
              height="768"
              loading="lazy"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
