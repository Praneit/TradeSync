import React from 'react';
import { Shield, Database, Award } from 'lucide-react';
import { Comparison } from '../types';

const comparisons: Comparison[] = [
  {
    feature: 'Settlement Risk',
    ourSolution: 'Integration with regulated tokenized deposits (GBTD) or Wholesale CBDC ensures recognized safety.',
    competition: 'Generic DLT firms are locked out due to lack of regulated settlement assets.',
  },
  {
    feature: 'Data Silos',
    ourSolution: 'Specialized Vertical SaaS & Off-Chain Oracles connect specific data (telematics) to smart contracts.',
    competition: 'Traditional Banks cannot access non-traditional data; DeFi lacks regulatory acceptance.',
  },
  {
    feature: 'Trust/Adoption',
    ourSolution: 'Automated compliance with UK Consumer Duty principles via transparency and audit trails.',
    competition: 'Competitors struggle with institutional confidence; we act as an infrastructure partner.',
  },
];

const Moat: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">
            Competitive Advantage
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            The Moat: Why We Win
          </h2>
          <p className="text-lg text-slate-600">
            Our competitive advantage is the regulatory complexity of the UK market, which we leverage as a barrier to entry for non-compliant competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
             <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Settlement Risk</h3>
             <p className="text-slate-600 mb-4 text-sm">
                <strong>Us:</strong> Regulated Tokenized Deposits & Wholesale CBDC.
             </p>
             <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Generic DLT firms locked out.
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-emerald-500">
             <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-emerald-600" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Data Silos</h3>
             <p className="text-slate-600 mb-4 text-sm">
                <strong>Us:</strong> Vertical SaaS & Off-Chain Oracles integration.
             </p>
             <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Banks lack non-traditional data access.
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-500">
             <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-purple-600" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Adoption</h3>
             <p className="text-slate-600 mb-4 text-sm">
                <strong>Us:</strong> Built-in UK Consumer Duty compliance.
             </p>
             <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Institutional infrastructure partner status.
             </div>
          </div>
        </div>

        {/* Detailed Table for Desktop */}
        <div className="mt-16 hidden lg:block overflow-hidden rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 bg-white">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Barrier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Our Solution (Winner)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Competition Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparisons.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.feature}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 bg-blue-50/30">{item.ourSolution}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{item.competition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Moat;