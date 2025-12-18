import React from 'react';
import { Users, Target, Shield, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">About TradeSync</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Revolutionizing cross-border trade finance through smart contract technology and automated netting solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize cross-border trade finance by connecting Indian and UK financial institutions through 
                innovative smart contract technology, enabling seamless, secure, and cost-effective netting solutions.
              </p>
              <p className="text-slate-600">
                We bridge the gap between traditional banking systems and modern blockchain technology, creating 
                a more efficient and transparent global trade ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Efficiency</h3>
                <p className="text-sm text-slate-600">Streamlined processes reduce settlement times by up to 70%</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Security</h3>
                <p className="text-sm text-slate-600">Bank-grade security with smart contract automation</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Innovation</h3>
                <p className="text-sm text-slate-600">Cutting-edge technology for modern trade finance</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Collaboration</h3>
                <p className="text-sm text-slate-600">Connecting Indian and UK banking ecosystems</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Connect Banks</h3>
              <p className="text-slate-600">
                Establish secure connections between Indian and UK financial institutions through our 
                blockchain-based platform.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Automate Netting</h3>
              <p className="text-slate-600">
                Use smart contracts to automatically calculate and execute multilateral netting 
                across multiple transactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Reduce Risk</h3>
              <p className="text-slate-600">
                Minimize counterparty risk and settlement failures through real-time monitoring 
                and automated reconciliation.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TradeSync?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Indian Exporters</h3>
              <ul className="space-y-2">
                <li>• Faster receivables from UK importers</li>
                <li>• Reduced foreign exchange risk</li>
                <li>• Lower transaction costs</li>
                <li>• Improved cash flow management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For UK Importers</h3>
              <ul className="space-y-2">
                <li>• Access to Indian export markets</li>
                <li>• Competitive financing rates</li>
                <li>• Streamlined payment processes</li>
                <li>• Enhanced supplier relationships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Transform Your Trade Finance?</h2>
          <p className="text-slate-600 mb-6">Contact us to learn how TradeSync can benefit your business.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
