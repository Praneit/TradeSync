import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend 
} from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle2, Lock, XCircle, Globe, Flag } from 'lucide-react';

// Data: Market Share (The Opportunity Gap)
const marketShareData = [
  { name: 'Traditional Banks', value: 25, fill: '#94a3b8' }, 
  { name: 'Niche FinTechs', value: 10, fill: '#64748b' },    
  { name: 'Untapped (The Gap)', value: 65, fill: '#3b82f6' }, 
];

// Data: Domestic vs Cross Border (TAM)
const tamData = [
  {
    name: 'Domestic Supply Chain',
    served: 120,
    unserved: 380, 
  },
  {
    name: 'Cross-Border Trade',
    served: 450,
    unserved: 850, 
  },
];

const MarketData: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Market Intelligence</span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mt-2 mb-4">
            The $1.7 Trillion Liquidity Gap
          </h2>
          <p className="text-lg text-slate-600">
            Traditional finance is failing MSMEs. We aren't just competing for market share; 
            we are capturing the 65% of the market that banks currently reject.
          </p>
        </div>

        {/* SECTION: GLOBAL STRATEGIC MARKETS */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" /> Strategic Target Markets (2025 Projections)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* UK */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">UK</div>
                        <div>
                            <h4 className="font-bold text-slate-900">United Kingdom</h4>
                            <span className="text-xs text-slate-500">Primary Beachhead</span>
                        </div>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>Export Lending Vol</span>
                            <span className="font-bold text-slate-900">£880 Billion</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>Domestic MSME Gap</span>
                            <span className="font-bold text-slate-900">£56 Billion</span>
                        </li>
                    </ul>
                    <div className="mt-4 text-[10px] text-slate-400 italic">Source: ONS 2025 & UK Finance Projections</div>
                </div>

                {/* UAE */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">UAE</div>
                        <div>
                            <h4 className="font-bold text-slate-900">United Arab Emirates</h4>
                            <span className="text-xs text-slate-500">Expansion Hub</span>
                        </div>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>Non-Oil Trade Target</span>
                            <span className="font-bold text-slate-900">$1.1 Trillion</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>Trade Finance Gap</span>
                            <span className="font-bold text-slate-900">$25 Billion</span>
                        </li>
                    </ul>
                    <div className="mt-4 text-[10px] text-slate-400 italic">Source: Ministry of Economy 2025 Vision</div>
                </div>

                {/* SINGAPORE */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-700">SG</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Singapore</h4>
                            <span className="text-xs text-slate-500">APAC Gateway</span>
                        </div>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>Total Trade Vol</span>
                            <span className="font-bold text-slate-900">$1.4 Trillion</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>SME Credit Gap</span>
                            <span className="font-bold text-slate-900">$21 Billion</span>
                        </li>
                    </ul>
                    <div className="mt-4 text-[10px] text-slate-400 italic">Source: Dept of Statistics SG 2025 Est.</div>
                </div>

                 {/* INDIA */}
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">IN</div>
                        <div>
                            <h4 className="font-bold text-slate-900">India</h4>
                            <span className="text-xs text-slate-500">High Growth Engine</span>
                        </div>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>Export Target</span>
                            <span className="font-bold text-slate-900">$900 Billion</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                            <span>MSME Credit Gap</span>
                            <span className="font-bold text-slate-900">$530 Billion</span>
                        </li>
                    </ul>
                    <div className="mt-4 text-[10px] text-slate-400 italic">Source: RBI & DGFT 2025 Projections</div>
                </div>
            </div>
        </div>

        {/* SECTION 1: THE FRICTION (Why we are needed) */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* The Problem */}
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center gap-2 mb-6">
                    <XCircle className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-bold text-slate-800">The Current Broken System</h3>
                </div>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[24px]"><AlertCircle className="w-5 h-5 text-red-400" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-800">30-90 Day Payment Traps</h4>
                            <p className="text-sm text-slate-600">MSMEs deliver goods but wait months for payment, forcing them to turn down new orders due to lack of working capital.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[24px]"><Lock className="w-5 h-5 text-red-400" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-800">"Blind" Lending Rejections</h4>
                            <p className="text-sm text-slate-600">Banks reject 45% of MSME loan applications because they rely on outdated balance sheets rather than real-time order data.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[24px]"><AlertCircle className="w-5 h-5 text-red-400" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-800">Opaque Supply Chain</h4>
                            <p className="text-sm text-slate-600">Buyers (Vendors) have zero visibility into sub-supplier progress, leading to delays and "black box" logistics.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Solution */}
            <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-2 mb-6">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    <h3 className="text-xl font-bold text-slate-800">The TradeSync Fix</h3>
                </div>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[24px]"><TrendingUp className="w-5 h-5 text-emerald-500" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-800">Instant Milestone Liquidity</h4>
                            <p className="text-sm text-slate-600">Funds are released via Smart Contract the moment a logistics milestone (Pickup/QC) is verified. No waiting.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[24px]"><TrendingUp className="w-5 h-5 text-emerald-500" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-800">Flow-Based Risk Scoring</h4>
                            <p className="text-sm text-slate-600">We score risk based on the *transaction* (PO + Valid Invoice), not just the company's history. Lenders get verified data.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[24px]"><TrendingUp className="w-5 h-5 text-emerald-500" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-800">Radical Transparency</h4>
                            <p className="text-sm text-slate-600">Multi-nodal tracking gives Buyers granular updates. If a sub-supplier is late, the dashboard updates instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 2: THE NUMBERS */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Chart 1: The Untapped Gap */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Market Penetration</h3>
                <p className="text-xs text-slate-500 mb-4">Percentage of MSME Trade Finance requests served.</p>
                <div className="h-[300px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={marketShareData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {marketShareData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center">
                        <div className="text-3xl font-bold text-blue-600">65%</div>
                        <div className="text-xs text-slate-500 font-medium">UNSERVED</div>
                    </div>
                </div>
                <p className="text-center text-xs text-slate-400 mt-2">Source: Asian Development Bank Trade Finance Gap Report</p>
            </div>

            {/* Chart 2: Domestic vs Global TAM */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Total Addressable Market (TAM)</h3>
                <p className="text-xs text-slate-500 mb-4">Domestic (Beachhead) vs. Global (Expansion) in $ Billions.</p>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={tamData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{fontSize: 12}} />
                            <YAxis label={{ value: '$ Billions', angle: -90, position: 'insideLeft' }} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Legend />
                            <Bar dataKey="served" stackId="a" name="Currently Served" fill="#94a3b8" barSize={50} />
                            <Bar dataKey="unserved" stackId="a" name="Untapped Opportunity" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                 <p className="text-center text-xs text-slate-400 mt-2">The "Unserved" portion represents liquidity denied by traditional banks.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MarketData;