import React from 'react';

const plugins = [
  { label: 'GST & e-Invoice', icon: 'account_balance' },
  { label: 'e-Way Bill', icon: 'local_shipping' },
  { label: 'PF, ESI & TDS', icon: 'receipt_long' },
  { label: 'UPI & Banking', icon: 'contactless' },
  { label: 'WhatsApp API', icon: 'chat' },
  { label: 'Google Work', icon: 'mail' },
  { label: 'Microsoft 365', icon: 'cloud' },
  { label: 'SSO / SAML 2.0', icon: 'key' },
  { label: 'Tally & Zoho', icon: 'sync_alt' },
  { label: 'REST & Hooks', icon: 'code' },
  { label: 'Zapier Automation Workflow', icon: 'extension', span2: true },
];

export default function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200" id="integrations-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="font-mono text-xs text-[#020c4c] tracking-widest uppercase mb-2 font-bold">
            FITS YOUR STACK
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Plays well with what you already run.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Compliance, payments, messaging and productivity tools connect out of the box — and everything else through a documented REST API with webhooks.
          </p>

          <div className="space-y-3.5 text-sm text-slate-700">
            <div className="flex items-start space-x-3">
              <span className="material-symbols-outlined text-[#020c4c] text-[20px] shrink-0 mt-0.5">
                shield
              </span>
              <span>
                <strong className="text-slate-900">Encrypted at rest and in transit</strong> with daily backups and point-in-time restore.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="material-symbols-outlined text-[#020c4c] text-[20px] shrink-0 mt-0.5">
                lock
              </span>
              <span>
                <strong className="text-slate-900">Role-based access</strong> with approval logs and full audit history on every record.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="material-symbols-outlined text-[#020c4c] text-[20px] shrink-0 mt-0.5">
                public
              </span>
              <span>
                <strong className="text-slate-900">Data residency</strong> in India, Singapore or the EU, depending on your compliance needs.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="material-symbols-outlined text-[#020c4c] text-[20px] shrink-0 mt-0.5">
                bolt
              </span>
              <span>
                <strong className="text-slate-900">99.9% uptime SLA</strong> with service credits, backed by a published status page.
              </span>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="font-mono text-xs text-slate-600 mb-6 flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-bold">CONNECTED BUSINESS STACK</span>
            <span className="text-[#020c4c] font-bold">12 NATIVE PLUGINS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {plugins.map((plugin, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center space-x-2.5 shadow-sm hover:border-[#020c4c] transition-colors"
                style={plugin.span2 ? { gridColumn: 'span 2 / span 2' } : {}}
              >
                <span className="material-symbols-outlined text-[#020c4c] text-[20px]">
                  {plugin.icon}
                </span>
                <span className="font-mono text-xs text-slate-800 font-semibold truncate">
                  {plugin.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
