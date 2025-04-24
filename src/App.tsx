import React from 'react';
import Navbar from './components/Navbar';
import BetaBanner from './components/BetaBanner';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
const Pricing = React.lazy(() => import('./components/Pricing'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const ContactCTA = React.lazy(() => import('./components/ContactCTA'));
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
        <React.Suspense fallback={<div>جاري التحميل...</div>}>
          <Pricing />
        </React.Suspense>
        <React.Suspense fallback={<div>جاري التحميل...</div>}>
          <Testimonials />
        </React.Suspense>
        <React.Suspense fallback={<div>جاري التحميل...</div>}>
          <FAQ />
        </React.Suspense>
        <React.Suspense fallback={<div>جاري التحميل...</div>}>
          <ContactCTA />
        </React.Suspense>
        <BetaBanner />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;