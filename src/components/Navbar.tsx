import { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <BookOpen size={28} className="text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Open Prep</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
            <a 
              href="https://open-prep-fe.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-lg ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              } font-semibold transition-colors shadow-sm`}
            >
              Get Started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 sm:px-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="https://open-prep-fe.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;