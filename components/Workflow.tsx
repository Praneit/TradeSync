import React from 'react';
import { 
  FileUp, 
  ShieldCheck, 
  FileCode, 
  Landmark, 
  Truck, 
  Banknote
} from 'lucide-react';

const steps = [
  {
    title: "1. Ingestion & Digitization",
    icon: FileUp,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "MSME uploads Purchase Orders (PO), Invoices, and Supplier Invoices. The system digitizes and extracts critical data to solve document friction.",
    details: ["PO & Invoice Upload", "Supplier Data Entry", "Digital Parsing"]
  },
  {
    title: "2. Deep Verification",
    icon: ShieldCheck,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    description: "AI authenticates documents and pulls real-time data: GST history, Income Tax returns, and CIBIL-standard credit scores to build trust.",
    details: ["GST & Tax Data Pull", "CIBIL Score Analysis", "Vendor Authentication"]
  },
  {
    title: "3. Risk Grid & Smart Contract",
    icon: FileCode,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    description: "Advanced analytics generate a 0-100 Risk Score. A Smart Contract is minted to automate financial control and compliance for the MSME.",
    details: ["Risk Grid Generation", "Score: 0-100 Scale", "Smart Contract Minting"]
  },
  {
    title: "4. Escrow & Strategic Funding",
    icon: Landmark,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    description: "Virtual Escrow initialized. Vendor pays 20% advance. Lenders view the Risk Grid (better than banking data) and fund 40% instantly.",
    details: ["Virtual Escrow Setup", "Vendor: 20% Advance", "Lender: Access to Market", "Fast Funding"]
  },
  {
    title: "5. Logistics & Milestone Tracking",
    icon: Truck,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description: "Vendor tracks work progress live. Funds release automatically to Sub-suppliers based on milestones (Pickup, Delivery, QC), easing cash flow.",
    details: ["Vendor Progress View", "Sub-Supplier Paid Live", "QC Verification", "Auto-Release Funds"]
  },
  {
    title: "6. Settlement & Tax Auto-Split",
    icon: Banknote,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    description: "Vendor settles final 80%. Smart Contract splits payments: Lender earns interest instantly, Government gets Tax (GST/VAT) on time, MSME gets profit.",
    details: ["Lender Repayment", "Gov Tax Auto-Paid", "MSME Profit Release", "Final Settlement"]
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4 animate-fade-in-up">
            The Intelligent Engine
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Live Settlement Workflow
          </h2>
          <p className="text-lg text-slate-600">
            From funding MSMEs to paying Government taxes—our automated workflow ensures every stakeholder gets paid on time with full visibility.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Gradient Pulse */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -ml-0.5 md:ml-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse opacity-50"></div>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center md:justify-between group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon Marker */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 ${step.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon className={`w-6 h-6 ${step.iconColor} transition-transform duration-500 group-hover:rotate-12`} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-0">
                      {/* Arrow indicator for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-b border-l border-slate-200 transform rotate-45 ${isEven ? '-right-2.5 border-t-0 border-r-0' : '-left-2.5 border-b-0 border-l-0 border-t border-r'}`}></div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details Pills */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {step.details.map((detail, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty Spacer for flex balance */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center mt-16">
             <div className="bg-slate-900 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-xl z-10 border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <span className="font-semibold tracking-wide">Supply Chain Complete</span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;