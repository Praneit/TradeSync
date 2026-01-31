import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              Through our Open Banking integration with HSBC and other financial institutions, we collect:
            </p>
            <ul className="text-slate-600 list-disc pl-6 mb-6">
              <li>Account information for trade finance verification</li>
              <li>Transaction history for credit assessment</li>
              <li>Company details for KYC/AML compliance</li>
              <li>Trade documentation and payment instructions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-6">
              We use your financial data exclusively for trade finance operations including payment initiation, risk assessment, and regulatory compliance.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement bank-grade security measures including 256-bit SSL encryption, token-based authentication, and regular security audits in compliance with PSD2 regulations.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. GDPR Compliance</h2>
            <p className="text-slate-600 mb-6">
              We comply with GDPR regulations for data protection and provide rights to access, rectify, and delete your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Contact Information</h2>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700"><strong>Data Protection Officer:</strong> dpo@arcjet-fintech.com</p>
              <p className="text-slate-700"><strong>Compliance:</strong> compliance@arcjet-fintech.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;