import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import LandingFlow from '../components/sections/LandingFlow';
import Testimonials from '../components/sections/Testimonials';
import ServiceAreas from '../components/sections/ServiceAreas';
import PricingInsurance from '../components/sections/PricingInsurance';
import FAQ from '../components/sections/FAQ';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <LandingFlow />
        <Testimonials />
        <ServiceAreas />
        <PricingInsurance />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;