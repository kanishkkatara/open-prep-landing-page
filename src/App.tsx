// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import { ThumbsUp } from 'lucide-react';

function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true) }, []);
  return (
    <div
      className={`min-h-screen bg-white ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}
    >
      <main>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <Pricing />

        <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your GMAT journey?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join thousands of students who have improved their scores with OpenPrep.
          </p>
          <a
            href={import.meta.env.VITE_PLATFORM_URL}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ThumbsUp size={20} />
            Start Your Free Trial Today
          </a>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Legal pages */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy"         element={<PrivacyPolicy />} />
        <Route path="/refund-policy"          element={<RefundPolicy />} />

        {/* (optional) catch-all 404 could go here */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
