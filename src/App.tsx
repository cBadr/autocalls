import React from 'react';
import Navbar from './components/Navbar';
import BetaBanner from './components/BetaBanner';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import PatternBackground from './components/PatternBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-cairo text-right">
      <PatternBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <BetaBanner />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;