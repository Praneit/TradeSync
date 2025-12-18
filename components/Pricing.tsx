import React from 'react';
import { CheckCircle2, Zap, FileCheck, Percent } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold sm:text-4xl mb-4">Transparent Pricing</h2>
           <p className="text-slate-400 text-lg">Simple, predictable fees for MSMEs and Lenders. No hidden costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Onboarding */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl flex flex-col hover:border-slate-600 transition-colors">
                <div className="mb-6 p-3 bg-blue-500/10 w-fit rounded-xl">
                    <FileCheck className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Onboarding Fee</h3>
                <div className="text-4xl font-bold mb-4">$100 <span className="text-sm font-normal text-slate-400">/ one-time</span></div>
                <p className="text-slate-400 mb-8 leading-relaxed">Complete verification, KYC, and entity setup on the platform.</p>
                <ul className="space-y-4 mt-auto">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Entity Verification</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Wallet Setup</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Compliance Check</span>
                    </li>
                </ul>
            </div>

            {/* Card 2: Transaction */}
            <div className="bg-gradient-to-b from-blue-900/40 to-slate-800/50 backdrop-blur-sm border border-blue-500/30 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
                 <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl tracking-wider">POPULAR</div>
                <div className="mb-6 p-3 bg-blue-500/10 w-fit rounded-xl">
                    <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Invoice Closing</h3>
                <div className="text-4xl font-bold mb-4">$100 <span className="text-sm font-normal text-slate-400">/ invoice</span></div>
                <p className="text-slate-400 mb-8 leading-relaxed">Processing fee for smart contract execution and settlement download.</p>
                 <ul className="space-y-4 mt-auto">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Smart Contract Minting</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Final Settlement Doc</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Audit Trail Download</span>
                    </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Get Started
                </button>
            </div>

            {/* Card 3: Lending */}
             <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl flex flex-col hover:border-slate-600 transition-colors">
                <div className="mb-6 p-3 bg-blue-500/10 w-fit rounded-xl">
                    <Percent className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lending Commission</h3>
                <div className="text-4xl font-bold mb-4">0.5% <span className="text-sm font-normal text-slate-400">/ annum</span></div>
                <p className="text-slate-400 mb-8 leading-relaxed">Platform fee on the loan amount for facilitating the credit connection.</p>
                 <ul className="space-y-4 mt-auto">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Risk Grid Access</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Auto-Repayment Split</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0"/> 
                        <span>Real-time Monitoring</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;