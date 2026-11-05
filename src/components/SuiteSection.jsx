import React, { useState } from 'react';
import { productList } from '../data/products';

export default function SuiteSection({ onAddToPlan }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All products' },
    { id: 'finance', label: 'Finance' },
    { id: 'sales', label: 'Sales' },
    { id: 'people', label: 'People' },
    { id: 'operations', label: 'Operations' },
    { id: 'delivery', label: 'Delivery' },
  ];

  const filteredProducts = productList.filter((product) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sales') {
      return product.cat === 'sales' || product.key === 'chatbot';
    }
    return product.cat === activeFilter;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200" id="suite-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-[#020c4c] tracking-widest uppercase mb-2 font-bold">
            THE SUITE
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Eight products. One shared database. Zero re-keying.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every module writes to the same customer, supplier, employee and inventory records. A deal closed in CRM instantly updates your accounts, your projects and your chatbot knowledge base — because they are all looking at the same record.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-6 md:mt-0 flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 overflow-x-auto max-w-full text-xs font-mono">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn px-3.5 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#020c4c] text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 8 Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="products-catalog">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.key}
              className="product-card group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-sm hover:border-[#020c4c] hover:shadow-lg"
            >
              <div>
                <div className="relative bg-slate-50 aspect-[16/10] overflow-hidden border-b border-slate-200">
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-mono px-2.5 py-0.5 rounded-lg border font-bold shadow-sm bg-[#020c4c] text-white border-[#020c4c]">
                    {product.badge}
                  </span>
                  <img
                    src={product.img}
                    alt={product.alt}
                    onError={(e) => {
                      if (product.fallbackImg && e.target.src !== product.fallbackImg) {
                        e.target.src = product.fallbackImg;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{product.label}</h3>
                  <p className="text-sm text-slate-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="font-bold text-[#020c4c]">
                          ›
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block">from</span>
                  <span className="text-lg font-bold text-slate-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-slate-500">/user/mo</span>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToPlan(product.label)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all shadow-sm cursor-pointer bg-[#020c4c] hover:bg-[#020c4c]/90 text-white border border-[#020c4c]"
                >
                  Add to plan
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
