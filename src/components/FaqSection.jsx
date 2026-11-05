import React, { useState } from 'react';

const faqs = [
  {
    q: 'Can I buy only some of the products?',
    a: 'Yes. Every product is available on its own — ERP, Account Management, HRMS, CRM, PRO, Chatbot, Project Management and Task Management. If you buy one, you still get the shared Mosbee core, the same login, the same API and the same support team. Add another product mid-term and you only pay the difference for the remaining period.',
  },
  {
    q: 'What exactly does the bundle include?',
    a: 'All eight products on a single subscription, plus the shared layer: the unified dashboard, cross-module reporting, single sign-on, role policies, workflow automation between modules, data migration, a named onboarding manager, 24/7 support and a quarterly business review.',
  },
  {
    q: 'How long does implementation take?',
    a: 'A single module usually goes live in one to three weeks. The full suite typically takes six to ten weeks, depending on data volume, number of locations and how many processes need custom fields. You get a fixed scope and a fixed implementation quote before we start.',
  },
  {
    q: 'Do we have to leave our current software first?',
    a: 'No. We import master data and open balances from Excel, Tally, Zoho or QuickBooks and run both systems in parallel for two cycles so every figure is verified before cutover. Nothing goes live until you have signed off on the numbers.',
  },
  {
    q: 'Is it GST, e-invoice and payroll compliant?',
    a: 'Yes. GST invoices, returns and e-invoice/e-way bill are handled natively, and payroll covers PF, ESI, TDS and payslip self-service with statutory reports built in. Multi-branch and multi-state GST registration is supported.',
  },
  {
    q: 'Where does it run — cloud, on-premise or hybrid?',
    a: 'All three. Cloud is the fastest route and gets updates continuously. On-premise suits teams with strict data-residency rules. Hybrid keeps payroll and reporting in-house while the rest runs in the cloud.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-200" id="faq-section">
      <div className="text-center mb-16">
        <div className="font-mono text-xs text-[#020c4c] tracking-widest uppercase mb-2 font-bold">
          FAQ
        </div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          The questions every buyer asks.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="faq-toggle w-full p-5 text-left flex items-center justify-between text-base font-semibold text-slate-900 hover:text-[#020c4c] transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-[#020c4c] transition-transform text-[22px]">
                  {isOpen ? 'remove' : 'add'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-content px-5 pb-5 text-sm text-slate-600 border-t border-slate-100 pt-4 leading-relaxed animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
