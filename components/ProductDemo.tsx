import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, Building2, Banknote, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'exporter' | 'domestic' | 'international'>('exporter');

  const demoTabs = [
    {
      id: 'exporter' as const,
      title: 'Exporter/Company Demo',
      icon: Building2,
      color: 'emerald',
      description: 'Experience how Indian exporters can access competitive GBP/EUR financing'
    },
    {
      id: 'domestic' as const,
      title: 'Domestic Bank Demo',
      icon: Banknote,
      color: 'blue',
      description: 'See the Indian banking dashboard with trade finance and netting capabilities'
    },
    {
      id: 'international' as const,
      title: 'International Bank Demo',
      icon: Globe,
      color: 'purple',
      description: 'Explore UK banking operations and cross-border settlement features'
    }
  ];

  const getTabClasses = (tabId: string, isActive: boolean) => {
    const colors = {
      exporter: isActive ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700',
      domestic: isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700',
      international: isActive ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
    };
    return `flex-1 px-6 py-4 rounded-lg font-medium transition-colors cursor-pointer ${colors[tabId as keyof typeof colors]}`;
  };

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'exporter':
        return (
          <div className="bg-slate-900 rounded-lg p-8 text-center">
            <Building2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Exporter/Company Demo</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Experience how Indian exporters can access competitive GBP/EUR financing for exports to UK.
              Get competitive rates through smart contract automation while maintaining full control over trade documentation.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Launch Exporter Demo
            </Link>
          </div>
        );
      case 'domestic':
        return (
          <div className="bg-slate-900 rounded-lg p-8 text-center">
            <Banknote className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Domestic Bank Demo</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              See the Indian banking dashboard with comprehensive trade finance and netting capabilities.
              Experience real-time transaction monitoring and automated settlement processes.
            </p>
            <Link
              to="/demo/domestic"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Launch Domestic Bank Demo
            </Link>
          </div>
        );
      case 'international':
        return (
          <div className="bg-slate-900 rounded-lg p-8 text-center">
            <Globe className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">International Bank Demo</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Explore UK banking operations and cross-border settlement features.
              See how international banks handle multi-currency transactions and compliance.
            </p>
            <Link
              to="/demo/international"
              className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Launch International Bank Demo
            </Link>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold">TradeSync Product Demos</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-4 p-2 bg-slate-100 rounded-lg">
            {demoTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={getTabClasses(tab.id, activeDemo === tab.id)}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              {demoTabs.find(tab => tab.id === activeDemo)?.title}
            </h2>
            <p className="text-slate-600">
              {demoTabs.find(tab => tab.id === activeDemo)?.description}
            </p>
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-4xl mx-auto">
          {renderDemoContent()}
        </div>

        {/* Features Overview */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Why Choose TradeSync?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">For Exporters</h3>
              <p className="text-slate-600 text-sm">
                Access competitive financing and maintain full control over your trade documentation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">For Domestic Banks</h3>
              <p className="text-slate-600 text-sm">
                Comprehensive dashboard for trade finance management and automated netting.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">For International Banks</h3>
              <p className="text-slate-600 text-sm">
                Cross-border settlement features with multi-currency transaction handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDemo;
