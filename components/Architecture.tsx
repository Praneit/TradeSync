import React from 'react';
import { Landmark, Brain, Timer, FileCheck, CheckCircle2 } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'msme-fund',
    title: 'MSME Liquidity & Control',
    stakeholder: 'MSMEs',
    description: 'Solves fund shortages by unlocking capital against verified POs. Streamlines financial control and regulation compliance automatically.',
    icon: Landmark,
  },
  {
    id: 'vendor-track',
    title: 'Vendor Progress Tracking',
    stakeholder: 'Vendors (Buyers)',
    description: 'Vendors who raise Purchase Orders gain live visibility into work progress. Milestone tracking ensures you only pay for verified results.',
    icon: Timer,
  },
  {
    id: 'supplier-pay',
    title: 'Instant Sub-Supplier Pay',
    stakeholder: 'Sub-Suppliers',
    description: 'Live settlement based on milestone completion. Sub-suppliers receive payments immediately, keeping the supply chain healthy.',
    icon: Timer, // Reusing Timer or could import a new icon like Banknote if available in types
  },
  {
    id: 'lender-gov',
    title: 'Lender Risk & Gov Tax',
    stakeholder: 'Lenders & Government',
    description: 'Lenders access better live credit risk data than traditional banks. Government taxes are auto-settled instantly via Smart Contract.',
    icon: Brain,
  },
];

const Architecture: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Smart Contract Ecosystem
          </h2>
          <p className="text-lg text-slate-600">
            A unified platform where MSMEs get funds, Vendors get visibility, and Regulators get compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {feature.stakeholder}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Automated Compliance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;