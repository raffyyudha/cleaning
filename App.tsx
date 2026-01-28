import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PricingEstimator from './components/PricingEstimator';
import BeforeAfter from './components/BeforeAfter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent-500 selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PricingEstimator />
        <BeforeAfter />
        <Stats />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;