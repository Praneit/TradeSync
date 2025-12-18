import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Activity, 
  Truck, 
  Building2, 
  Download, 
  FileCheck,
  ArrowRight,
  Loader2,
  Lock,
  AlertTriangle,
  MapPin,
  Camera,
  TrendingUp,
  FileSignature,
  Landmark,
  ShieldAlert,
  Package,
  Calendar,
  Info,
  Banknote,
  Percent,
  Radio,
  Container,
  Wallet,
  ArrowDownRight,
  History,
  PieChart,
  ClipboardCheck,
  RefreshCw,
  Zap,
  Satellite,
  Coins
} from 'lucide-react';

interface Lender {
  id: string;
  name: string;
  type: 'Bank' | 'Private';
  rate: number;
}

const Demo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  
  // Risk Data State
  const [riskData, setRiskData] = useState<{
    score: number;
    varNotional: string;
    varPercent: string;
    cibil: number;
    params: { name: string; status: 'Stable' | 'Elevated' | 'Critical'; impact: string }[];
  } | null>(null);

  const [selectedLender, setSelectedLender] = useState<Lender | null>(null);
  const [varBreached, setVarBreached] = useState(false);

  // Supplier State for Interactive Demo
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "Jindal Steel Works", status: "QC Done", pickup: true, transit: true, qc: true, gst: 98, itr: "Verified", commodity: "Steel" },
    { id: 2, name: "Gujarat Safety Gear", status: "In Transit", pickup: true, transit: true, qc: false, gst: 92, itr: "Verified", commodity: "Polymers" },
    { id: 3, name: "Asian Paints Chem", status: "Picked Up", pickup: true, transit: false, qc: false, gst: 95, itr: "Verified", commodity: "Chemicals" },
    { id: 4, name: "UltraTech Cement", status: "Scheduled", pickup: false, transit: false, qc: false, gst: 99, itr: "Verified", commodity: "Cement" },
  ]);

  const [escrowProvision, setEscrowProvision] = useState(45000); // Live tracking balance

  // Dynamic Risk Simulation (Corrected Logic)
  useEffect(() => {
    if (step >= 2) {
      // 1. Define Exposures (Total Invoice ~ $100k)
      const exposures = {
        'Steel': 40000,    // 40% of invoice
        'Cement': 25000,   // 25% of invoice
        'Fuel': 20000,     // Logistics/Fuel component (20%)
        'Forex': 100000    // Total exposure to currency risk
      };

      const marketRisks = [
        { name: 'Global Steel Index (HRC)', exposure: 'Steel', volatility: 0.02 }, // 2% std dev
        { name: 'Brent Crude Oil', exposure: 'Fuel', volatility: 0.04 },           // 4% std dev
        { name: 'Limestone Futures', exposure: 'Cement', volatility: 0.015 },      // 1.5% std dev
        { name: 'GBP/USD FX Rate', exposure: 'Forex', volatility: 0.01 },          // 1% std dev
        { name: 'Port Congestion Surcharge', exposure: 'Fuel', volatility: 0.05 }  // High vol event
      ];

      const interval = setInterval(() => {
        // Randomly pick 3 active risks to simulate
        const shuffled = marketRisks.sort(() => 0.5 - Math.random()).slice(0, 4);
        
        const currentParams = shuffled.map(risk => {
           const rand = Math.random();
           
           // VaR 95% Logic: Only 5% of events should be critical (tail risk)
           // 80% Stable, 15% Elevated, 5% Critical
           let status: 'Stable' | 'Elevated' | 'Critical' = 'Stable';
           let movePercent = 0;

           if (rand > 0.95) {
             status = 'Critical';
             movePercent = risk.volatility * (1.5 + Math.random()); // > 1.5 sigma event
           } else if (rand > 0.80) {
             status = 'Elevated';
             movePercent = risk.volatility * (0.8 + Math.random() * 0.5); // 0.8 - 1.3 sigma
           } else {
             status = 'Stable';
             movePercent = risk.volatility * (Math.random() * 0.5); // Normal noise
           }

           // Calculate Monetary Impact
           // Impact = Exposure Amount * % Movement
           // If Stable, we consider the impact negligible/hedged for display, or show small amounts
           const exposureAmount = exposures[risk.exposure as keyof typeof exposures];
           const impactVal = Math.round(exposureAmount * movePercent);

           return {
             name: risk.name,
             status: status,
             impact: status === 'Stable' ? '-$0' : `-$${impactVal.toLocaleString()}`
           };
        });

        setRiskData(prev => {
           if (!prev) return null;
           
           // Calculate Total Impact
           const totalImpact = currentParams.reduce((acc, curr) => acc + (parseInt(curr.impact.replace(/[^0-9]/g, '') || '0')), 0);
           
           // VaR Limit calculation: e.g., 5% of total value ($5,000)
           const varLimit = 5000;
           
           // Update breach state based on actual math
           setVarBreached(totalImpact > varLimit);

           return {
            ...prev,
            params: currentParams,
            // Slight jitter in CIBIL
            cibil: prev.cibil + (Math.random() > 0.5 ? 1 : -1), 
            varPercent: '5.0%' // Fixed 95% confidence interval
           };
        });

      }, 3000);

      return () => clearInterval(interval);
    }
  }, [step]);

  // Lenders with Updated Rates: Banks 3-5%, Private 7-10%
  const lenders: Lender[] = [
    { id: 'b1', name: 'Barclays Corporate', type: 'Bank', rate: 3.5 },
    { id: 'b2', name: 'HSBC Trade Finance', type: 'Bank', rate: 4.2 },
    { id: 'b3', name: 'NatWest Commercial', type: 'Bank', rate: 4.8 },
    { id: 'p1', name: 'NexCapital Liquidity', type: 'Private', rate: 7.9 },
    { id: 'p2', name: 'BlockFi Institutional', type: 'Private', rate: 9.5 },
  ];

  const handleNext = () => {
    // Custom loading logic based on step
    if (step === 1) {
      setLoading(true);
      setLoadingText('Verifying GST & PAN via API...');
      setTimeout(() => {
        setLoadingText('Pulling ITR & GST History...');
        setTimeout(() => {
          setLoadingText('Calculating VaR & Risk Grid...');
          setTimeout(() => {
            setRiskData({
              score: 92,
              varNotional: '$5,000', // 5% of 100k
              varPercent: '5.0%',
              cibil: 785,
              params: [
                { name: 'Global Steel Index (HRC)', status: 'Stable', impact: '-$0' }, 
                { name: 'Brent Crude Oil', status: 'Stable', impact: '-$0' },
                { name: 'GBP/USD FX Rate', status: 'Stable', impact: '-$0' }
              ]
            });
            setLoading(false);
            setStep(2);
          }, 1500);
        }, 1500);
      }, 1500);
    } else {
      setLoading(true);
      const text = step === 4 
        ? 'Verifying Milestones & Triggering Payments...' 
        : step === 5 
        ? 'Reconciling Final Ledger...' 
        : 'Processing Smart Contract...';
      setLoadingText(text);
      
      setTimeout(() => {
        setLoading(false);
        setStep(prev => prev + 1);
      }, 1500);
    }
  };

  const simulateSupplierUpdate = () => {
    setSuppliers(prev => {
        const newSuppliers = [...prev];
        // Find first supplier that isn't done
        const targetIndex = newSuppliers.findIndex(s => !s.qc);
        
        if (targetIndex !== -1) {
            const s = newSuppliers[targetIndex];
            if (!s.pickup) {
                s.pickup = true;
                s.status = "Picked Up";
                setEscrowProvision(prev => prev - 1000); // Simulate logistics fee deduction
            } else if (!s.transit) {
                s.transit = true;
                s.status = "In Transit";
            } else if (!s.qc) {
                s.qc = true;
                s.status = "QC Done";
                setEscrowProvision(prev => prev - 5000); // Simulate payment release
            }
        } else {
            // If all done, reset last one for demo purposes
            const last = newSuppliers[3];
            last.qc = false; last.transit = false; last.pickup = false; last.status = "Scheduled";
        }
        return newSuppliers;
    });
  };

  const generateAuditReport = () => {
    if (!selectedLender || !riskData) return;

    // Recalculate financial totals locally to ensure accuracy in report
    const invoiceValue = 100000;
    const supplierTotal = 20000;
    const lenderPrincipal = 40000;
    // Calculation: 40000 * (rate/100) / 12 * 1.5 months
    const lenderInterest = Math.round(lenderPrincipal * (selectedLender.rate / 100) / 12 * 1.5);
    const lenderTotal = lenderPrincipal + lenderInterest;
    const tax = 20000;
    const logistics = 8000;
    const platformFee = invoiceValue * 0.005; // 0.5% fee
    const netProfit = invoiceValue - supplierTotal - lenderTotal - tax - logistics - platformFee;
    const margin = (netProfit / invoiceValue) * 100;

    // Mock data for the detailed report
    const mockData = [
        { driver: "Rajesh Kumar", vehicle: "MH-04-KY-9921", bank: "HDFC Bank", acct: "****1234", officer: "Amit Varma (QC-88)", amount: "$8,000" },
        { driver: "Wei Chen", vehicle: "DL-1C-AB-5512", bank: "ICICI Bank", acct: "****5678", officer: "Li Wei (QC-12)", amount: "$4,000" },
        { driver: "Sarah Jenkins", vehicle: "KA-53-MC-9981", bank: "Standard Chartered", acct: "****9012", officer: "John Doe (QC-99)", amount: "$3,000" },
        { driver: "Michael Ross", vehicle: "TN-02-X-1234", bank: "SBI", acct: "****3456", officer: "Priya Singh (QC-45)", amount: "$5,000" }
    ];

    const detailedLog = suppliers.map((s, i) => {
        const md = mockData[i] || mockData[0];
        // Generate pseudo-realistic timestamps relative to a base date
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() - (5 - i)); // Staggered dates
        
        const pickupDate = new Date(baseDate);
        const deliveryDate = new Date(baseDate); 
        deliveryDate.setHours(deliveryDate.getHours() + 48); // +2 days
        const qcDate = new Date(deliveryDate);
        qcDate.setHours(qcDate.getHours() + 4); // +4 hours
        const paymentDate = new Date(); // Now

        // Geo-coords
        const pickupGeo = `${(19.07 + i * 0.15).toFixed(4)}°N, ${(72.87 - i * 0.05).toFixed(4)}°E`;
        const deliveryGeo = `18.9220°N, 72.8347°E`;

        return `
[SUPPLIER NODE ${i+1}: ${s.name}]
----------------------------------------------------------------
> LOGISTICS CHAIN
  Driver:        ${md.driver}
  Vehicle ID:    ${md.vehicle}
  Pickup Event:  ${pickupDate.toLocaleString()} 
                 @ Geo: ${pickupGeo} [VERIFIED IoT]
  Delivery Evt:  ${deliveryDate.toLocaleString()} 
                 @ Geo: ${deliveryGeo} [WTC Site]

> QUALITY CONTROL (QC)
  Officer:       ${md.officer}
  Status:        ${s.status.toUpperCase()}
  QC Timestamp:  ${qcDate.toLocaleString()}
  Digital Sig:   0x${Math.random().toString(16).substr(2, 24)}...

> FINANCIAL SETTLEMENT
  Beneficiary:   ${s.name}
  Bank Details:  ${md.bank} (Acct: ${md.acct})
  Amount Paid:   ${md.amount}
  UTR Number:    UTR${Math.floor(1000000000 + Math.random() * 9000000000)}
  Payment Time:  ${paymentDate.toLocaleString()}
  Status:        SETTLED (Smart Contract Auto-Release)
----------------------------------------------------------------
`;
    }).join('\n');

    const content = `
================================================================
       TRADESYNC AI - FINAL AUDIT LEDGER & RISK REPORT
================================================================
Transaction ID:   TXN-8892-ALPHA
Date Generated:   ${new Date().toLocaleString()}
Smart Contract:   0x71C7656EC7ab88b098defB751B7401B5f6d8976F
Ledger Status:    FINAL / IMMUTABLE
================================================================

1. MASTER TRANSACTION SUMMARY
------------------------------------------------
Buyer (Vendor):      World Trade Center
Seller (MSME):       Precrawler Hydraulics
Total Invoice Value: $100,000.00
Financing Partner:   ${selectedLender.name}
Lending Rate:        ${selectedLender.rate}% p.a.
Risk Score:          ${riskData.score}/100 (Low Risk)

2. SUPPLY CHAIN EXECUTION & PROOF OF WORK
------------------------------------------------
${detailedLog}

3. FINANCIAL DISTRIBUTION WATERFALL
------------------------------------------------
(1) Government Tax (GST/TDS)
    Amount: $${tax.toLocaleString()}.00
    Status: AUTO-DEDUCTED
    UTR:    TAX${Math.floor(Math.random() * 10000000)}

(2) Lender Repayment (Principal + Interest)
    Principal: $${lenderPrincipal.toLocaleString()}.00
    Interest:  $${lenderInterest.toLocaleString()}.00
    Total:     $${lenderTotal.toLocaleString()}.00
    Bank:      ${selectedLender.name} Treasury
    UTR:       LND${Math.floor(Math.random() * 10000000)}

(3) TradeSync Platform Fee (0.5%)
    Amount: $${platformFee.toLocaleString()}.00
    Status: AUTO-DEBIT
    UTR:    TSY${Math.floor(Math.random() * 10000000)}

(4) Logistics Fees
    Amount: $${logistics.toLocaleString()}.00
    Status: PAID

(5) MSME Profit Realization
    Net Profit: $${netProfit.toLocaleString()}.00
    Net Margin: ${margin.toFixed(2)}%
    Credit To:  Precrawler Hydraulics (Wallet: 0x88...21)
    UTR:        PRF${Math.floor(Math.random() * 10000000)}

================================================================
   END OF REPORT - VERIFIED BY TRADESYNC CONSENSUS
================================================================
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TradeSync_Audit_TXN8892_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadReport = (type: 'risk' | 'audit') => {
    if (type === 'audit') {
        generateAuditReport();
    } else {
        alert("Downloading Risk Assessment Summary...");
    }
  };

  const areBanksEligible = riskData ? (riskData.score >= 95 && riskData.cibil >= 800) : false;

  // Visual position for the truck based on step (Now 6 steps)
  const getTruckPosition = () => {
      switch(step) {
          case 1: return '5%';
          case 2: return '20%';
          case 3: return '35%';
          case 4: return '55%'; // Logistics
          case 5: return '75%'; // Sub-Pay
          case 6: return '95%'; // Settle
          default: return '5%';
      }
  };

  return (
    <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
      
      {/* Live Logistics Strip */}
      <div className="w-full bg-slate-900 text-white border-b-4 border-emerald-500 mb-8 overflow-hidden relative shadow-2xl">
          <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute top-0 left-0"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full relative z-10"></div>
                      </div>
                      <span className="text-sm font-mono text-emerald-400 tracking-wider">LIVE SATELLITE FEED :: TXN-8892</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono hidden md:block border border-slate-700 px-3 py-1 rounded">
                      EST. ARRIVAL: 12 JAN 2026
                  </div>
              </div>
              
              {/* Transit Track */}
              <div className="relative h-20 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center px-8 overflow-hidden backdrop-blur-sm">
                  {/* Grid Background Effect */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(90deg, transparent 49%, #ffffff 50%, transparent 51%)', backgroundSize: '40px 100%' }}></div>
                  
                  {/* Nodes */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1">
                     <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800 shadow-lg ring-2 ring-blue-500/50"></div>
                     <span className="text-[10px] text-slate-400 font-mono">SUPPLIER</span>
                  </div>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1">
                     <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-800 shadow-lg ring-2 ring-emerald-500/50"></div>
                     <span className="text-[10px] text-slate-400 font-mono">BUYER</span>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="absolute left-10 right-10 h-1 bg-slate-700 top-1/2 -translate-y-1/2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-1000 ease-in-out"
                        style={{ width: getTruckPosition() }}
                      ></div>
                  </div>
                  
                  {/* Animated Lorry Graphic */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out z-20"
                    style={{ left: getTruckPosition(), transform: 'translateX(-50%)' }}
                  >
                      <div className="relative group">
                        {/* Lorry Container */}
                        <div className="absolute -left-7 -top-3 w-10 h-6 bg-blue-600 rounded-sm border border-blue-400 shadow-lg flex items-center justify-center">
                            <span className="text-[6px] text-white font-bold tracking-tighter opacity-70">LOGISTICS</span>
                        </div>
                        {/* Connector */}
                        <div className="absolute -left-1 top-1 w-2 h-1 bg-slate-400"></div>
                        {/* Truck Cab Icon */}
                        <div className="relative z-10 bg-slate-900 rounded p-0.5">
                            <Truck className="w-6 h-6 text-emerald-400 fill-slate-800" />
                        </div>
                        
                        {/* Status Ping */}
                        {step >= 4 && <div className="absolute -top-4 -right-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>}
                        
                        {/* Speed Lines */}
                        <div className="absolute top-1 -left-10 space-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-4 h-0.5 bg-white/20 rounded-full animate-pulse"></div>
                            <div className="w-2 h-0.5 bg-white/20 rounded-full animate-pulse delay-75"></div>
                        </div>
                      </div>
                      
                      <div className="text-[10px] text-emerald-400 mt-3 whitespace-nowrap font-mono font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-emerald-500/30 text-center">
                          {step === 4 ? 'IN TRANSIT' : step === 5 ? 'CONSOLIDATED' : step === 6 ? 'DELIVERED' : 'LOADING'}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Live Transaction Demo</h1>
            <p className="text-slate-600">Multi-party Smart Contract Simulation</p>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 overflow-x-auto pb-2 sm:pb-0">
            {[
              "1. Digitize", 
              "2. Risk & Lending", 
              "3. Escrow", 
              "4. Logistics", 
              "5. Auto-Pay",
              "6. Settle"
            ].map((label, idx) => (
              <React.Fragment key={idx}>
                <span className={`whitespace-nowrap px-3 py-1 rounded-full ${step >= idx + 1 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200'}`}>
                  {label}
                </span>
                {idx < 5 && <div className="w-2 sm:w-4 h-0.5 bg-slate-300"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Interface Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden min-h-[600px] flex flex-col relative">
              
              {/* Window Bar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <div className="ml-4 text-xs text-slate-400 font-mono">TradeSync Enterprise Portal</div>
              </div>

              {/* Dynamic Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                
                {loading ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" />
                    <h3 className="text-xl font-semibold text-slate-800 animate-pulse">{loadingText}</h3>
                    <p className="text-slate-500 mt-2">Connecting to Regulatory Oracles...</p>
                  </div>
                ) : (
                  <>
                    {/* STEP 1: UPLOAD */}
                    {step === 1 && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">1. Data Ingestion & Digitization</h2>
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6 flex justify-between items-center text-sm">
                            <div className="flex gap-4">
                                <div><span className="text-slate-500">PO Date:</span> <span className="font-semibold">10/12/2025</span></div>
                                <div><span className="text-slate-500">Inv Date:</span> <span className="font-semibold">12/12/2025</span></div>
                            </div>
                            <div><span className="text-slate-500">Deadline:</span> <span className="font-bold text-red-500">15/01/2026</span></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                           {/* Vendor Side */}
                           <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50">
                              <h3 className="font-bold text-slate-900 mb-1">World Trade Center</h3>
                              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wide">Buyer Portal</p>
                              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                                <FileText className="w-6 h-6" />
                              </div>
                              <p className="text-sm text-slate-500 mb-3">Upload Purchase Order (PO)</p>
                              <div className="flex items-center justify-center gap-2 text-xs bg-white border border-slate-200 p-2 rounded text-left">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                <div>
                                    <div className="font-semibold">PO-WTC-2025-001.pdf</div>
                                    <div className="text-slate-400">4 Items • $100k Value</div>
                                </div>
                              </div>
                           </div>

                           {/* Company Side */}
                           <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-indigo-50/30">
                              <h3 className="font-bold text-slate-900 mb-1">Precrawler Hydraulics Inc</h3>
                              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wide">Seller Portal (MSME)</p>
                              <div className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                                <Upload className="w-6 h-6" />
                              </div>
                              <p className="text-sm text-slate-500 mb-3">Invoice & Supplier Mapping</p>
                              <div className="text-left text-xs bg-white p-3 rounded border border-slate-200 space-y-2">
                                <div className="font-semibold border-b border-slate-100 pb-1 mb-1 flex items-center gap-1">
                                    <Info className="w-3 h-3 text-blue-500"/> Manifest Details:
                                </div>
                                <div className="space-y-3">
                                    <div className="border-b border-slate-100 pb-1">
                                        <div className="flex justify-between font-medium">1. Steel Pipes</div>
                                        <div className="text-slate-500 text-[10px]">Supp: Jindal Steel Works</div>
                                        <div className="text-slate-400 text-[10px]">PAN: AAACJ... | GST: 27AAA...</div>
                                    </div>
                                    <div className="border-b border-slate-100 pb-1">
                                        <div className="flex justify-between font-medium">2. Welding/Safety</div>
                                        <div className="text-slate-500 text-[10px]">Supp: Gujarat Safety Gear Ltd</div>
                                        <div className="text-slate-400 text-[10px]">PAN: BBBGS... | GST: 24BBB...</div>
                                    </div>
                                    <div className="border-b border-slate-100 pb-1">
                                        <div className="flex justify-between font-medium">3. Waterproofing</div>
                                        <div className="text-slate-500 text-[10px]">Supp: Asian Paints Chemicals</div>
                                        <div className="text-slate-400 text-[10px]">PAN: CCCAP... | GST: 27CCC...</div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between font-medium">4. Cement/Concrete</div>
                                        <div className="text-slate-500 text-[10px]">Supp: UltraTech Cement Hub</div>
                                        <div className="text-slate-400 text-[10px]">PAN: DDDUT... | GST: 27DDD...</div>
                                    </div>
                                </div>
                              </div>
                           </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-bold text-slate-800">2. Risk Grid & Lender Matching</h2>
                          <button onClick={() => downloadReport('risk')} className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                             <Download className="w-4 h-4" /> Download Risk Report
                          </button>
                        </div>
                        
                        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-6">
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-x divide-slate-200">
                              <div>
                                 <div className="text-slate-500 text-xs uppercase tracking-wide">Risk Score</div>
                                 <div className={`text-4xl font-bold mt-1 ${riskData!.score >= 95 ? 'text-emerald-600' : 'text-amber-600'}`}>{riskData?.score}<span className="text-base font-normal text-slate-400">/100</span></div>
                              </div>
                              <div>
                                 <div className="text-slate-500 text-xs uppercase tracking-wide">Standard CIBIL</div>
                                 <div className={`text-4xl font-bold mt-1 ${riskData!.cibil >= 800 ? 'text-blue-600' : 'text-blue-500'}`}>{riskData?.cibil}</div>
                              </div>
                              <div>
                                 <div className="text-slate-500 text-xs uppercase tracking-wide">VaR (95%)</div>
                                 <div className="text-4xl font-bold text-amber-600 mt-1">{riskData?.varPercent}</div>
                              </div>
                           </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Banknote className="w-5 h-5 text-slate-500"/> Select Financing Partner</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lenders.map((lender) => {
                              const disabled = lender.type === 'Bank' && !areBanksEligible;
                              const isSelected = selectedLender?.id === lender.id;
                              
                              return (
                                <button
                                  key={lender.id}
                                  onClick={() => !disabled && setSelectedLender(lender)}
                                  disabled={disabled}
                                  className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 flex flex-col justify-between
                                    ${disabled ? 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed' : 
                                      isSelected ? 'bg-blue-50 border-blue-500 shadow-md' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'
                                    }
                                  `}
                                >
                                  <div className="flex justify-between items-start w-full mb-2">
                                    <div>
                                      <div className="font-bold text-slate-800">{lender.name}</div>
                                      <div className={`text-xs px-2 py-0.5 rounded w-fit mt-1 ${lender.type === 'Bank' ? 'bg-indigo-100 text-indigo-700' : 'bg-purple-100 text-purple-700'}`}>
                                        {lender.type === 'Bank' ? 'Traditional Bank' : 'Private / FinTech'}
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-xl font-bold text-emerald-600">{lender.rate}% <span className="text-xs text-slate-500 font-normal">p.a.</span></div>
                                    </div>
                                  </div>
                                  {disabled && (
                                    <div className="flex items-center gap-1 text-xs text-red-500 font-medium mt-2">
                                      <AlertTriangle className="w-3 h-3" /> Risk Criteria Not Met (Score &lt; 95)
                                    </div>
                                  )}
                                  {isSelected && (
                                     <div className="absolute top-[-10px] right-[-10px] bg-blue-600 text-white p-1 rounded-full">
                                        <CheckCircle className="w-4 h-4" />
                                     </div>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Lender View (Visualisation Part) */}
                        {selectedLender && riskData && (
                           <div className="mt-6 bg-slate-900 text-white rounded-xl p-6 border border-slate-700 animate-in fade-in slide-in-from-top-4">
                              <div className="flex items-center justify-between mb-4">
                                 <h4 className="font-bold flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-emerald-400" /> Lender Intelligence View
                                 </h4>
                                 <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">
                                    MATCH CONFIRMED
                                 </span>
                              </div>
                              <div className="grid grid-cols-3 gap-4 text-center">
                                 <div className="bg-slate-800 p-3 rounded-lg">
                                    <div className="text-xs text-slate-400 mb-1">Projected ROI</div>
                                    <div className="text-lg font-bold text-emerald-400">
                                      {/* Dynamic ROI: Rate + Efficiency Boost + Risk Premium */}
                                      {(selectedLender.rate + 1.25 + (100 - riskData.score) * 0.1).toFixed(2)}%
                                    </div>
                                 </div>
                                 <div className="bg-slate-800 p-3 rounded-lg">
                                    <div className="text-xs text-slate-400 mb-1">Risk-Adj Return</div>
                                    <div className={`text-lg font-bold ${selectedLender.rate > 8 ? 'text-amber-400' : 'text-blue-400'}`}>
                                      {selectedLender.rate > 8 ? 'Med-High' : 'Excellent'}
                                    </div>
                                 </div>
                                 <div className="bg-slate-800 p-3 rounded-lg">
                                    <div className="text-xs text-slate-400 mb-1">Default Prob.</div>
                                    <div className="text-lg font-bold text-slate-200">
                                      {/* Dynamic Prob: (100 - Score) * Factor */}
                                      {((100 - riskData.score) * 0.05).toFixed(2)}%
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 bg-slate-800/50 p-3 rounded border border-slate-700">
                                 <PieChart className="w-4 h-4 text-purple-400" />
                                 <span>Capital Allocation: <strong>$40,000 (Secured)</strong> via Smart Contract Pool 0x71...</span>
                              </div>
                           </div>
                        )}

                        <div className="mt-6">
                           <button 
                              disabled={!selectedLender}
                              onClick={handleNext}
                              className={`w-full py-3 font-mono text-sm rounded-lg flex items-center justify-center gap-2 transition-colors
                                ${selectedLender ? 'bg-slate-900 text-emerald-400 hover:bg-slate-800' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
                              `}
                           >
                              <FileSignature className="w-4 h-4" />
                              {selectedLender ? 'CONFIRM LENDER & MINT CONTRACT' : 'SELECT A LENDER TO PROCEED'}
                           </button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">3. Virtual Escrow Funding</h2>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                           <div className="flex items-center justify-between mb-4">
                              <h3 className="font-semibold text-slate-700">Escrow Balance</h3>
                              <span className="text-2xl font-bold text-slate-900">$65,000</span>
                           </div>
                           <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex">
                              <div className="h-full bg-blue-500 w-[15.3%]" title="Vendor 10%"></div>
                              <div className="h-full bg-indigo-500 w-[23%]" title="Company 15%"></div>
                              <div className="h-full bg-emerald-500 w-[61.5%]" title="Lender 40%"></div>
                           </div>
                           <div className="flex justify-between text-xs text-slate-500 mt-2">
                              <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> World Trade Ctr (10% Adv)</div>
                              <div className="flex items-center gap-1"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Precrawler (15%)</div>
                              <div className="flex items-center gap-1 font-semibold text-emerald-700"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {selectedLender?.name} (40%)</div>
                           </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                           Smart Contract '0x71...9A23' has locked funds. 
                           <br/>Conditions for release: Logistic Milestones & QC Sign-off.
                        </p>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         <h2 className="text-2xl font-bold mb-6 text-slate-800">4. Multi-Nodal Logistics</h2>
                         <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                            
                            {/* Supplier Live Status Grid (New Visualization) */}
                            <div className="relative">
                               <div className="absolute -left-[23px] w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
                               <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                                  <div className="flex justify-between items-start mb-4">
                                     <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                        <Package className="w-4 h-4 text-blue-600" /> Supplier Live Tracking
                                     </h4>
                                     <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Active</span>
                                  </div>
                                  
                                  <div className="space-y-3">
                                    {suppliers.map((s, i) => (
                                      <div key={i} className="bg-slate-50 border border-slate-100 rounded p-3 text-sm transition-all duration-300 hover:shadow-md">
                                        <div className="flex justify-between items-center mb-2">
                                          <div>
                                              <div className="font-semibold text-slate-700">{s.name}</div>
                                              <div className="text-[10px] text-slate-400">Commodity: {s.commodity}</div>
                                          </div>
                                          <div className={`text-[10px] px-1.5 py-0.5 rounded border ${s.status === 'QC Done' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-200 text-slate-500'}`}>
                                            {s.status}
                                          </div>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="relative h-1.5 bg-slate-200 rounded-full mb-2 overflow-hidden">
                                          <div className={`absolute top-0 left-0 h-full bg-emerald-500 transition-all duration-1000`} style={{ width: s.qc ? '100%' : s.transit ? '66%' : s.pickup ? '33%' : '5%' }}></div>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-slate-400 mb-2 font-mono">
                                          <span className={s.pickup ? 'text-emerald-600 font-bold' : ''}>Pickup</span>
                                          <span className={s.transit ? 'text-emerald-600 font-bold' : ''}>Transit</span>
                                          <span className={s.qc ? 'text-emerald-600 font-bold' : ''}>Drop QC</span>
                                        </div>

                                        {/* Geo-Tagging for Supplier 1 (Jindal) */}
                                        {i === 0 && s.pickup && (
                                           <div className="mt-2 p-2 bg-slate-900 rounded flex items-center gap-3 text-xs border border-slate-700 animate-in fade-in slide-in-from-top-1">
                                              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
                                                  <Satellite className="w-4 h-4 text-blue-400 animate-pulse" />
                                              </div>
                                              <div className="font-mono">
                                                  <div className="text-emerald-400 font-bold flex items-center gap-1">
                                                      <MapPin className="w-3 h-3" /> VERIFIED PICKUP
                                                  </div>
                                                  <div className="text-slate-400 text-[10px]">
                                                      19.07°N, 72.87°E • {new Date().toLocaleTimeString()}
                                                  </div>
                                              </div>
                                           </div>
                                        )}

                                        {/* Quick Risk Assessment */}
                                        <div className="flex gap-2 border-t border-slate-200 pt-2 mt-2">
                                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200 text-[10px]">
                                            <span className="text-slate-500">GST Score:</span>
                                            <span className="font-bold text-blue-600">{s.gst}/100</span>
                                          </div>
                                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200 text-[10px]">
                                            <span className="text-slate-500">ITR Status:</span>
                                            <span className="font-bold text-emerald-600 flex items-center gap-1"><CheckCircle className="w-3 h-3"/> {s.itr}</span>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Interactive Update Simulation */}
                                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                                      <div className="text-xs text-slate-500">
                                          <div className="font-bold text-slate-700 mb-1">Provisional Escrow: ${escrowProvision.toLocaleString()}</div>
                                          <span className="text-[10px]">Updates based on logistics triggers.</span>
                                      </div>
                                      <button 
                                        onClick={simulateSupplierUpdate}
                                        className="flex items-center gap-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                                      >
                                          <Zap className="w-3 h-3" /> Simulate Live Network Event
                                      </button>
                                  </div>
                               </div>
                            </div>

                            {/* Milestone 2 */}
                            <div className="relative">
                               <div className="absolute -left-[23px] w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm animate-pulse"></div>
                               <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm opacity-90">
                                  <div className="flex justify-between items-start">
                                     <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-amber-600" /> WTC Site Delivery & QC
                                     </h4>
                                     <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">12/01/2026</span>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-1">QC Officer: Sarah Jenkins. Inward Challan #IC-9923.</p>
                                  <div className="mt-2 text-xs font-mono text-slate-400 bg-slate-50 p-2 rounded border border-slate-100">
                                     {`> Triggering: Auto-Disbursement Protocol`}
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* NEW STEP 5: AUTO-PAYMENT TO SUPPLIERS */}
                    {step === 5 && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-slate-800">5. Smart Contract Auto-Disbursement</h2>
                            <div className="flex items-center gap-2 text-xs font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                               <Activity className="w-3 h-3 animate-pulse" /> Live Execution
                            </div>
                         </div>

                         {/* Live Profitability Tracker */}
                         <div className="bg-emerald-900/90 text-white p-4 rounded-lg mb-6 flex justify-between items-center shadow-lg border border-emerald-500/50 animate-in fade-in slide-in-from-bottom-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-emerald-200 uppercase font-semibold">Live Profitability (Est.)</div>
                                    <div className="text-xl font-bold">11.55% <span className="text-sm font-normal text-emerald-300">($11,550)</span></div>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block">
                                <div className="text-xs text-emerald-300">Net of Finance & Logistics</div>
                                <div className="text-xs font-mono flex items-center justify-end gap-1"><RefreshCw className="w-3 h-3 animate-spin" /> Updating live...</div>
                            </div>
                         </div>

                         {/* Live Escrow Balance Animation */}
                         <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg mb-8 relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-10">
                                 <Wallet className="w-24 h-24" />
                             </div>
                             <div className="relative z-10">
                                 <div className="text-slate-400 text-sm font-medium mb-1">REMAINING ESCROW BALANCE</div>
                                 <div className="flex items-baseline gap-2">
                                     <span className="text-4xl font-mono font-bold text-emerald-400">$45,000.00</span>
                                     <span className="text-sm text-red-400 font-mono animate-pulse">(-$20,000 Released)</span>
                                 </div>
                                 <div className="h-1 w-full bg-slate-700 mt-4 rounded-full overflow-hidden">
                                     <div className="h-full bg-emerald-500 w-[69%] transition-all duration-1000"></div>
                                 </div>
                             </div>
                         </div>

                         {/* Payment Ledger */}
                         <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                             <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                                 <h3 className="font-semibold text-slate-700 text-sm">Sub-Supplier Payment Ledger</h3>
                                 <span className="text-xs text-slate-500">Contract: 0x71C...9A23</span>
                             </div>
                             <div className="divide-y divide-slate-100">
                                 {[
                                     { name: "Jindal Steel Works", amount: "$8,000", txn: "0x3a...1f9", time: "10:42:15 AM", status: "Paid" },
                                     { name: "Gujarat Safety Gear", amount: "$4,000", txn: "0x8b...2a4", time: "10:42:18 AM", status: "Paid" },
                                     { name: "Asian Paints Chemicals", amount: "$3,000", txn: "0x1c...9d2", time: "10:42:20 AM", status: "Paid" },
                                     { name: "UltraTech Cement Hub", amount: "$5,000", txn: "0x5e...3c1", time: "10:42:22 AM", status: "Paid" },
                                 ].map((row, i) => (
                                     <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                         <div className="flex items-center gap-3">
                                             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                 <ArrowDownRight className="w-4 h-4" />
                                             </div>
                                             <div>
                                                 <div className="font-medium text-slate-900 text-sm">{row.name}</div>
                                                 <div className="text-[10px] text-slate-400 font-mono">TXN: {row.txn}</div>
                                             </div>
                                         </div>
                                         <div className="text-right">
                                             <div className="font-bold text-slate-900 text-sm">{row.amount}</div>
                                             <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 mt-1">
                                                 <CheckCircle className="w-3 h-3" /> {row.status}
                                             </div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                         </div>
                      </div>
                    )}

                    {/* OLD STEP 5 BECOMES STEP 6: SETTLEMENT WATERFALL */}
                    {step === 6 && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center mb-6">
                           <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Landmark className="w-8 h-8" />
                           </div>
                           <h2 className="text-2xl font-bold text-slate-800">Final Settlement Waterfall</h2>
                           <p className="text-slate-600 text-sm">Remaining funds distributed according to Smart Contract priority.</p>
                        </div>

                        <div className="space-y-3 max-w-lg mx-auto">
                           {/* Priority 1: Gov */}
                           <div className="flex justify-between items-center p-3 bg-white border-l-4 border-red-500 shadow-sm rounded-r-lg">
                              <div>
                                 <div className="text-xs font-bold text-red-600 uppercase">Priority 1</div>
                                 <div className="text-sm font-semibold text-slate-800">Government (GST/TDS)</div>
                              </div>
                              <div className="text-right">
                                 <div className="font-bold text-slate-900">$20,000</div>
                                 <div className="text-xs text-emerald-600 flex items-center justify-end gap-1"><CheckCircle className="w-3 h-3"/> Paid</div>
                              </div>
                           </div>

                           {/* Priority 2: Lender */}
                           <div className="flex justify-between items-center p-3 bg-white border-l-4 border-blue-500 shadow-sm rounded-r-lg">
                              <div>
                                 <div className="text-xs font-bold text-blue-600 uppercase">Priority 2</div>
                                 <div className="text-sm font-semibold text-slate-800">{selectedLender?.name || 'Financing Partner'}</div>
                                 <div className="text-xs text-slate-500">Principal + {selectedLender?.rate}% Yield</div>
                              </div>
                              <div className="text-right">
                                 <div className="font-bold text-slate-900">
                                    ${(40000 + (selectedLender ? Math.round(40000 * (selectedLender.rate / 100) / 12 * 1.5) : 450)).toLocaleString()}
                                 </div>
                                 <div className="text-xs text-emerald-600 flex items-center justify-end gap-1"><CheckCircle className="w-3 h-3"/> Paid</div>
                              </div>
                           </div>
                           
                           {/* Priority 3: Platform Fee */}
                           <div className="flex justify-between items-center p-3 bg-white border-l-4 border-indigo-500 shadow-sm rounded-r-lg">
                              <div>
                                 <div className="text-xs font-bold text-indigo-600 uppercase">Priority 3</div>
                                 <div className="text-sm font-semibold text-slate-800">TradeSync Platform Fee</div>
                                 <div className="text-xs text-slate-500">0.5% of Contract Value</div>
                              </div>
                              <div className="text-right">
                                 <div className="font-bold text-slate-900">$500</div>
                                 <div className="text-xs text-emerald-600 flex items-center justify-end gap-1"><CheckCircle className="w-3 h-3"/> Auto-Debit</div>
                              </div>
                           </div>

                           {/* Priority 4: MSME */}
                           <div className="flex justify-between items-center p-3 bg-white border-l-4 border-emerald-500 shadow-sm rounded-r-lg">
                              <div>
                                 <div className="text-xs font-bold text-emerald-600 uppercase">Priority 4</div>
                                 <div className="text-sm font-semibold text-slate-800">Precrawler Hydraulics</div>
                                 <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">NET PROFIT REALIZED</div>
                              </div>
                              <div className="text-right">
                                 <div className="font-bold text-emerald-600 text-lg">$11,550</div>
                                 <div className="text-xs text-slate-500">Margin: 11.55%</div>
                                 <div className="text-xs text-emerald-600 flex items-center justify-end gap-1 mt-1"><CheckCircle className="w-3 h-3"/> Released</div>
                              </div>
                           </div>
                        </div>

                        <div className="mt-8 text-center">
                           <button 
                             onClick={() => downloadReport('audit')}
                             className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
                           >
                             <Download className="w-4 h-4" /> Download Final Audit Ledger
                           </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Controls */}
              {step !== 2 && step < 6 && !loading && (
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    {step === 5 ? 'Execute Final Settlement' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* BIG LIVE RISK MONITOR SIDEBAR (Sticky) */}
          <div className="lg:col-span-1 space-y-6 relative sticky top-24 h-fit">
            
            {/* BREACH MODE REPLACES NORMAL CONTENT */}
            {varBreached && step >= 2 ? (
              <div className="bg-red-900 text-white p-6 rounded-xl shadow-2xl border-4 border-red-500 min-h-[600px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20"></div>
                 <div className="relative z-10">
                    <ShieldAlert className="w-20 h-20 text-red-200 animate-pulse mx-auto mb-6" />
                    <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">VaR THRESHOLD BREACHED</h2>
                    <p className="text-red-200 mb-8 text-lg font-medium">Cumulative risk impact has exceeded the safety limit. Automatic hedge protocols active.</p>
                    
                    <div className="bg-red-950/50 p-4 rounded-lg border border-red-700 mb-8 w-full">
                       <div className="text-xs text-red-300 uppercase font-bold mb-1">Total Impact</div>
                       <div className="text-3xl font-mono font-bold text-white">
                         {riskData?.params.reduce((acc, curr) => acc + (parseInt(curr.impact.replace(/[^0-9]/g, '') || '0')), 0) > 0 
                                      ? `-$${riskData?.params.reduce((acc, curr) => acc + (parseInt(curr.impact.replace(/[^0-9]/g, '') || '0')), 0).toLocaleString()}` 
                                      : '-$0'}
                       </div>
                    </div>

                    <button 
                      onClick={() => setVarBreached(false)}
                      className="px-8 py-4 bg-white text-red-900 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-lg flex items-center gap-2 mx-auto"
                    >
                      <RefreshCw className="w-5 h-5" />
                      ACKNOWLEDGE & HEDGE
                    </button>
                 </div>
              </div>
            ) : (
                /* NORMAL RISK MONITOR CONTENT */
                <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg border border-slate-700 min-h-[800px] flex flex-col">
                    <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-4">
                        <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-emerald-500 animate-pulse" /> Live Risk Feed
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">Satellite & Oracle Data Stream</p>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Global Status</div>
                            <div className="text-emerald-400 text-xs font-bold flex items-center justify-end gap-1"><Activity className="w-3 h-3" /> ONLINE</div>
                        </div>
                    </div>
                    
                    {step >= 2 ? (
                    <div className="space-y-4 animate-in fade-in duration-700 flex-grow">
                        
                        {/* Top Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                <div className="text-[10px] text-slate-400 uppercase">Live Credit Score</div>
                                <div className="text-xl font-mono text-blue-400 font-bold">{riskData?.cibil}</div>
                            </div>
                            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                <div className="text-[10px] text-slate-400 uppercase">Notional VaR</div>
                                <div className="text-xl font-mono text-red-400 font-bold">{riskData?.varPercent}</div>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-slate-700 flex-grow">
                            <div className="text-xs text-slate-400 mb-3 uppercase font-semibold flex justify-between items-center">
                                <span>Active Risk Vectors (Only Elevated)</span>
                                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Filtered View</span>
                            </div>
                            <ul className="space-y-3">
                                {riskData?.params.filter(p => p.status !== 'Stable').length === 0 ? (
                                    <div className="text-center py-8 text-slate-600 text-sm">
                                    <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-50"/>
                                    No Active Risks Detected
                                    </div>
                                ) : (
                                    riskData?.params.filter(p => p.status !== 'Stable').map((p, i) => (
                                <li key={i} className="flex flex-col p-3 rounded bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-slate-200 text-sm font-medium">{p.name}</span>
                                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                                            ${p.status === 'Critical' ? 'bg-red-500/20 text-red-400 animate-pulse' : 
                                            'bg-amber-500/20 text-amber-400'}`}>
                                            {p.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-end mt-1">
                                        <span className="text-[10px] text-slate-500">Oracle Confidence: 99.8%</span>
                                        <span className={`font-mono text-xs ${p.impact === '-$0' ? 'text-slate-500' : 'text-red-400'}`}>
                                            Est. Impact: {p.impact}
                                        </span>
                                    </div>
                                </li>
                                )))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-800">
                            <div className="flex justify-between items-center text-xs text-slate-400">
                                <span>Cumulative Session VaR:</span>
                                <span className="text-red-400 font-mono font-bold">
                                    {riskData?.params.reduce((acc, curr) => acc + (parseInt(curr.impact.replace(/[^0-9]/g, '') || '0')), 0) > 0 
                                        ? `-$${riskData?.params.reduce((acc, curr) => acc + (parseInt(curr.impact.replace(/[^0-9]/g, '') || '0')), 0).toLocaleString()}` 
                                        : '-$0'}
                                </span>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500 space-y-4">
                        <Loader2 className="w-10 h-10 animate-spin opacity-50" />
                        <p className="text-sm">Connecting to Global Trade Oracles...</p>
                    </div>
                    )}
                </div>
            )}
            
            {!varBreached && (
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                    <Lock className="w-4 h-4 text-slate-400" /> Secure Environment
                    </div>
                    <div className="text-xs text-slate-500 font-mono space-y-1">
                        <div><span className="text-slate-400">Net:</span> Testnet Beta</div>
                        <div><span className="text-slate-400">Enc:</span> AES-256-GCM</div>
                        <div><span className="text-slate-400">Contract:</span> <span className="text-blue-600">0x71C...9A23</span></div>
                    </div>
                </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Demo;