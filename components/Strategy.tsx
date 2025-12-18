import React from 'react';
import { ArrowRight, Truck, Building2, Globe2 } from 'lucide-react';
import { Phase } from '../types';

const phases: Phase[] = [
  {
    title: 'Phase I',
    timeline: '0-12 Months',
    sector: 'UK Logistics & Trade Finance',
    description: 'Partner with 2-3 Niche Vertical SaaS platforms (e.g., Fleet Management) for exclusive data access and Proof-of-Concept milestone payments.',
  },
  {
    title: 'Phase II',
    timeline: '12-36 Months',
    sector: 'Mid-Tier UK Lenders',
    description: 'Roll out AI-Driven Alternate Risk Scoring API to lenders focused on MSME/SME working capital, leveraging Phase I data.',
  },
  {
    title: 'Phase III',
    timeline: '36+ Months',
    sector: 'Cross-Border Expansion',
    description: 'Leverage UK regulatory compliance to expand to Singapore/EU via initiatives like Project mBridge.',
  },
];

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Go-To-Market Strategy
          </h2>
          <p className="text-lg text-slate-600">
            Targeting high-value, high-friction sectors where instantaneous settlement offers the clearest ROI.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="relative pt-8 md:pt-0">
               <div className="md:absolute md:-top-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10 mb-6 md:mb-0 mx-auto">
                  <Truck className="w-5 h-5 text-blue-600" />
               </div>
               <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-blue-600 font-bold text-sm mb-1">{phases[0].timeline}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{phases[0].title}</h3>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">{phases[0].sector}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{phases[0].description}</p>
               </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pt-8 md:pt-0">
               <div className="md:absolute md:-top-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center z-10 mb-6 md:mb-0 mx-auto">
                  <Building2 className="w-5 h-5 text-indigo-600" />
               </div>
               <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-indigo-600 font-bold text-sm mb-1">{phases[1].timeline}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{phases[1].title}</h3>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">{phases[1].sector}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{phases[1].description}</p>
               </div>
            </div>

            {/* Phase 3 */}
            <div className="relative pt-8 md:pt-0">
               <div className="md:absolute md:-top-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-4 border-emerald-600 rounded-full flex items-center justify-center z-10 mb-6 md:mb-0 mx-auto">
                  <Globe2 className="w-5 h-5 text-emerald-600" />
               </div>
               <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-emerald-600 font-bold text-sm mb-1">{phases[2].timeline}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{phases[2].title}</h3>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">{phases[2].sector}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{phases[2].description}</p>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-4 bg-slate-900 text-white rounded-lg shadow-xl">
            <span className="font-semibold">Ready to revolutionize settlement?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;