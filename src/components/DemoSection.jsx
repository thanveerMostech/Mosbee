import React, { useState } from 'react';

export default function DemoSection({ initialSelectedProducts }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    suite: true,
    erp: false,
    accounts: false,
    hrms: false,
    crm: false,
    pro: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.company.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 bg-slate-50/50" id="demo-section">
      <div className="bg-[#020c4c] border border-[#020c4c] rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-sky-300 tracking-widest uppercase mb-2 font-bold">
                GET STARTED
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
                See the whole suite running on your data.
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-sm">
                Tell us what you run today. Within one business day you get back a fixed scope, a migration plan and a quote — for the complete bundle or just the products you need.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-sm text-blue-100">
                  <span className="material-symbols-outlined text-sky-300 text-[20px] shrink-0">
                    task_alt
                  </span>
                  <span>14-day pilot on your own data — no card required</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-blue-100">
                  <span className="material-symbols-outlined text-sky-300 text-[20px] shrink-0">
                    task_alt
                  </span>
                  <span>Fixed implementation quote before anything is configured</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-blue-100">
                  <span className="material-symbols-outlined text-sky-300 text-[20px] shrink-0">
                    task_alt
                  </span>
                  <span>Migration support from Excel, Tally, Zoho or QuickBooks</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-blue-200">
                Prefer to talk first? Write to{' '}
                <a
                  href="mailto:hello@mosbee.io"
                  className="text-white font-mono underline hover:text-sky-300 transition-colors"
                >
                  hello@mosbee.io
                </a>{' '}
                — Monday to Saturday, 9am to 8pm IST.
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#020c4c] text-white flex items-center justify-center mx-auto mb-4 border border-[#020c4c]">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Demo Request Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An enterprise solution architect will review your requirements for{' '}
                  <strong className="text-slate-900">{formData.company}</strong> and contact you at{' '}
                  <strong className="text-slate-900">{formData.email}</strong> within 24 business hours.
                </p>
                <div className="p-4 bg-[#020c4c] rounded-xl border border-[#020c4c] font-mono text-xs text-white max-w-sm mx-auto mb-6">
                  Reference: MOS-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-bold">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#020c4c] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-bold">
                      Work email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#020c4c] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-bold">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Industries"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#020c4c] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-bold">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98xxx xxxxx"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#020c4c] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-600 mb-2 font-bold">
                    Which products are you interested in?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                    <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl cursor-pointer border border-slate-200 hover:border-[#020c4c] transition-colors">
                      <input
                        type="checkbox"
                        name="suite"
                        checked={formData.suite}
                        onChange={handleChange}
                        className="rounded bg-white border-slate-300 text-[#020c4c] focus:ring-[#020c4c]"
                      />
                      <span className="text-slate-800 font-medium">Complete Suite</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl cursor-pointer border border-slate-200 hover:border-[#020c4c] transition-colors">
                      <input
                        type="checkbox"
                        name="erp"
                        checked={formData.erp}
                        onChange={handleChange}
                        className="rounded bg-white border-slate-300 text-[#020c4c] focus:ring-[#020c4c]"
                      />
                      <span className="text-slate-800 font-medium">ERP</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl cursor-pointer border border-slate-200 hover:border-[#020c4c] transition-colors">
                      <input
                        type="checkbox"
                        name="accounts"
                        checked={formData.accounts}
                        onChange={handleChange}
                        className="rounded bg-white border-slate-300 text-[#020c4c] focus:ring-[#020c4c]"
                      />
                      <span className="text-slate-800 font-medium">Accounts</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl cursor-pointer border border-slate-200 hover:border-[#020c4c] transition-colors">
                      <input
                        type="checkbox"
                        name="hrms"
                        checked={formData.hrms}
                        onChange={handleChange}
                        className="rounded bg-white border-slate-300 text-[#020c4c] focus:ring-[#020c4c]"
                      />
                      <span className="text-slate-800 font-medium">HRMS</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl cursor-pointer border border-slate-200 hover:border-[#020c4c] transition-colors">
                      <input
                        type="checkbox"
                        name="crm"
                        checked={formData.crm}
                        onChange={handleChange}
                        className="rounded bg-white border-slate-300 text-[#020c4c] focus:ring-[#020c4c]"
                      />
                      <span className="text-slate-800 font-medium">CRM</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl cursor-pointer border border-slate-200 hover:border-[#020c4c] transition-colors">
                      <input
                        type="checkbox"
                        name="pro"
                        checked={formData.pro}
                        onChange={handleChange}
                        className="rounded bg-white border-slate-300 text-[#020c4c] focus:ring-[#020c4c]"
                      />
                      <span className="text-slate-800 font-medium">PRO</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#020c4c] hover:bg-[#020c4c]/90 text-white font-mono font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-[#020c4c]/25 cursor-pointer"
                >
                  Request my demo
                </button>
                <p className="text-center font-mono text-[11px] text-slate-500 font-medium">
                  14-day pilot · fixed quote · no card required
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
