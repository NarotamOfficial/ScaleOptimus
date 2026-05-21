import Link from 'next/link';
import { ArrowRight, DollarSign, Percent, TrendingUp, Briefcase, RefreshCw, BarChart2 } from 'lucide-react';

export default function ServicesPage() {
  const modules = [
    { title: "Profit Margin System", path: "/calculators/profit-margin", desc: "Evaluate net capital return relative to cost baselines.", icon: <Percent className="w-5 h-5 text-indigo-400" />, sector: "Corporate Profitability" },
    { title: "Dynamic Cost Optimizer", path: "/calculators/pricing", desc: "Establish optimal retail metrics matching targeted gross marks.", icon: <DollarSign className="w-5 h-5 text-emerald-400" />, sector: "Pricing Strategy" },
    { title: "Break-Even Matrix", path: "/calculators/break-even", desc: "Compute explicit volume metrics to outpace structural overhead.", icon: <BarChart2 className="w-5 h-5 text-sky-400" />, sector: "Risk Management" },
    { title: "Freelancer Hourly Matrix", path: "/calculators/freelancer-rate", desc: "Map professional asset rates against billing objectives.", icon: <Briefcase className="w-5 h-5 text-amber-400" />, sector: "Solo Optimization" },
    { title: "Capital Investment ROI", path: "/calculators/roi", desc: "Formulate accurate efficiency indices across variable campaigns.", icon: <RefreshCw className="w-5 h-5 text-purple-400" />, sector: "Capital Deployment" },
    { title: "Velocity Growth Modeler", path: "/calculators/growth", desc: "Extrapolate linear compounding trajectories over multi-month runs.", icon: <TrendingUp className="w-5 h-5 text-pink-400" />, sector: "Strategic Scaling" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Computational Environments</h1>
        <p className="text-zinc-400 text-base">Select a specialized algorithmic environment below to initiate transaction evaluations.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((m, index) => (
          <div key={index} className="p-8 bg-zinc-900/40 border border-zinc-900 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center">{m.icon}</div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">{m.sector}</span>
              <h3 className="text-xl font-bold text-white">{m.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
            <Link href={m.path} className="mt-8 text-xs font-semibold text-indigo-400 group-hover:text-white flex items-center gap-1.5 transition">
              Boot Pipeline <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
