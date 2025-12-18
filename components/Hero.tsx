import React from 'react';
import { ChevronRight, ShieldCheck, Zap, Scale, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden pb-16 pt-32 lg:pt-48 lg:pb-32">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Revolutionizing Cross-Border Trade Finance
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Smart Contracts for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Supply Chain Resilience
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Solve MSME fund shortages, streamline financial control, and give Vendors real-time tracking. 
            Automated compliance ensuring Lenders earn faster and Governments get paid on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative z-20">
            <Link to="/product-demo" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25">
              <PlayCircle className="mr-2 h-5 w-5" />
              Product Demo
            </Link>
            <button 
              onClick={(e) => scrollTo('features', e)} 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              Explore Features
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={(e) => scrollTo('workflow', e)} 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-750 hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl">
            <div className="h-10 w-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <Scale className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">For Indian Exporters</h3>
            <p className="text-slate-400 text-sm">
              Access GBP/EUR financing for exports to UK. Get competitive rates through smart contract automation while maintaining full control over trade documentation.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl">
            <div className="h-10 w-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">For UK Importers</h3>
            <p className="text-slate-400 text-sm">
              Secure trade finance coverage for imports from India. Benefit from automated compliance and risk assessment through blockchain-based smart contracts.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl">
            <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Banks Lenders & Government Netting</h3>
            <p className="text-slate-400 text-sm">
              Daily netting between Indian and UK banks reduces forex risk, transaction costs, and reserve requirements. Settle net amounts instead of full transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;