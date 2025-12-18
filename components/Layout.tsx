import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Phone, Layers } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: 'features' },
    { name: 'Process', href: 'workflow' },
    { name: 'Market', href: 'market' },
    { name: 'Strategy', href: 'strategy' },
    { name: 'Pricing', href: 'pricing' },
  ];

  const isHome = location.pathname === '/';

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If we are not home, we need to navigate first, then scroll. 
    // Since HashRouter makes this tricky with standard anchors, we'll assume correct conditional rendering handles checking isHome.
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Layers className="w-8 h-8 text-blue-500 fill-blue-500/10" strokeWidth={1.5} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            TradeSync <span className="text-blue-500">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/product-demo" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/product-demo' ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}
          >
            Product Demo
          </Link>
          
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}
          >
            About Us
          </Link>
          
          {isHome && navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleScrollTo(link.href, e)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          
          {!isHome && (
             <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                              Back to Home
             </Link>
          )}

          <Link 
            to="/contacts" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
          >
            Contact
          </Link>
        </nav>        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
          <Link 
              to="/product-demo" 
              className="text-slate-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Product Demo
            </Link>
          <Link 
              to="/about" 
              className="text-slate-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          {isHome && navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleScrollTo(link.href, e)}
              className="text-left text-slate-300 hover:text-white py-2 bg-transparent border-none"
            >
              {link.name}
            </button>
          ))}
          {!isHome && (
             <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-2">
                              Back to Home
             </Link>
          )}
          <Link 
            to="/contacts" 
            onClick={() => setIsOpen(false)}
            className="text-center bg-blue-600 text-white py-2 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Safe navigation for SPA
        navigate('/');
        // Small delay to allow home component to mount before scrolling
        setTimeout(() => {
           const el = document.getElementById(id);
           if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold text-white">TradeSync AI</span>
            </div>
            <p className="text-sm max-w-sm mb-4">
              The Settlement Revolution: Programmable Finance for B2B & Lending.
              Merging CBDC security with Smart Contract automation.
            </p>
            <div className="flex items-center gap-2 text-white font-medium mt-4">
                <Phone className="w-4 h-4 text-blue-500" />
                <a href="tel:+917990779342" className="hover:text-blue-400 transition-colors">+91 79907 79342</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/demo" className="hover:text-blue-400">Live Demo</Link></li>
              <li><button onClick={(e) => handleScrollTo('features', e)} className="hover:text-blue-400 bg-transparent border-none p-0 cursor-pointer">Features</button></li>
              <li><button onClick={(e) => handleScrollTo('workflow', e)} className="hover:text-blue-400 bg-transparent border-none p-0 cursor-pointer">How It Works</button></li>
              <li><button onClick={(e) => handleScrollTo('pricing', e)} className="hover:text-blue-400 bg-transparent border-none p-0 cursor-pointer">Pricing</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Investor Deck</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Sales</a></li>
              <li><a href="tel:+917990779342" className="hover:text-blue-400">+91 79907 79342</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} TradeSync AI Technologies Ltd. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <Link to="/contacts" className="hover:text-white">Contact Us</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;