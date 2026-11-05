import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HoneycombShowcase from './components/HoneycombShowcase';
import TrustTicker from './components/TrustTicker';
import SuiteSection from './components/SuiteSection';
import PricingSection from './components/PricingSection';
import WhyBundle from './components/WhyBundle';
import IntegrationsSection from './components/IntegrationsSection';
import FaqSection from './components/FaqSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState({
    ERP: false,
    'Account Management': false,
    HRMS: false,
    CRM: false,
    PRO: false,
    Chatbot: false,
    'Project Management': false,
    'Task Management': false,
  });

  const handleToggleProduct = (productName) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  const handleAddToPlan = (productName) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [productName]: true,
    }));
    const pricingEl = document.getElementById('pricing-section');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartPilotWithPlan = () => {
    const demoEl = document.getElementById('demo-section');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans antialiased selection:bg-[#020c4c] selection:text-white flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative overflow-hidden bg-white flex-grow">
        {/* Subtle ambient deep navy gradient backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#020c4c]/10 via-[#020c4c]/5 to-transparent blur-3xl pointer-events-none -z-10"></div>

        {/* Hero Section Container */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <Hero />
          <HoneycombShowcase />
          <TrustTicker />
        </section>

        {/* 8 Products Catalog */}
        <SuiteSection onAddToPlan={handleAddToPlan} />

        {/* Pricing & Custom Configurator */}
        <PricingSection
          selectedProducts={selectedProducts}
          onToggleProduct={handleToggleProduct}
          onStartPilotWithPlan={handleStartPilotWithPlan}
        />

        {/* Why The Bundle Wins */}
        <WhyBundle />

        {/* Integrations & Security */}
        <IntegrationsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Demo / Lead Capture */}
        <DemoSection initialSelectedProducts={selectedProducts} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
