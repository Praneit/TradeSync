import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing and using TradeSync's cross-border trade finance platform, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Use License</h2>
            <p className="text-slate-600 mb-6">
              Permission is granted to temporarily access the materials (information or software) on TradeSync's website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Service Description</h2>
            <p className="text-slate-600 mb-6">
              TradeSync provides smart contract-based cross-border trade finance solutions connecting Indian and UK banks for automated netting and settlement processes.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Privacy Policy</h2>
            <p className="text-slate-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Contact Information</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700"><strong>Email:</strong> contact@tradesync.ai</p>
              <p className="text-slate-700"><strong>Phone:</strong> +91 79907 79342</p>
              <p className="text-slate-700"><strong>Address:</strong> Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
