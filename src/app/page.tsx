import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, DollarSign, Target } from 'lucide-react';

export default function LandingPage() {
  const calculators = [
    { title: "Profit Margin", desc: "Analyze profitability instantly.", icon: <DollarSign className="w-6 h-6 text-orange-500" /> },
    { title: "Target Pricing", desc: "Optimize retail metrics for growth.", icon: <Target className="w-6 h-6 text-pink-500" /> },
    { title: "Break-Even", desc: "Define structural volume baselines.", icon: <BarChart2 className="w-6 h-6 text-orange-500" /> },
    { title: "Timeline Growth", desc: "Map compound scaling trails.", icon: <TrendingUp className="w-6 h-6 text-pink-500" /> },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Suite - image_6 style feel */}
      <section className="hero-glow border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-200 rounded-full text-[10px] font-semibold text-orange-600 uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> CONFIGURATION ENGINE V1.0 LIVE
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-zinc-950 leading-[1.05]">
            Process Business Numbers. <br />
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Extract Absolute Clarity.
            </span>
          </h1>
          <p className="text-xl text-zinc-700 max-w-3xl mx-auto font-medium">
            Skip messy sheets. Map financial variables instantly through specialized modular computational engines with structural certainty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/signup" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-950 text-white font-semibold rounded-2xl hover:bg-zinc-800 transition shadow-lg flex items-center justify-center gap-2">
              Initialize Free Core <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-800 font-semibold rounded-2xl hover:bg-zinc-100 transition shadow-sm">
              Explore 6 Core Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Cards Section - image_6 pattern feel */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-100 px-3 py-1 rounded-md">SPECIALIZED MODULES</span>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-950 sm:text-4xl">Scale Through One-Stop Solution</h2>
          <p className="text-zinc-600 text-base">Select a specific operational environment aligned with your current data processing requirement.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((c, index) => (
            <div key={index} className="p-8 bg-card-gradient border border-white rounded-3xl space-y-6 hover:border-orange-100 hover:shadow-2xl hover:shadow-orange-500/10 transition group">
              <div className="w-12 h-12 rounded-xl bg-white border border-orange-100 flex items-center justify-center shadow-sm">{c.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">{c.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mt-1">{c.desc}</p>
              </div>
              <Link href="/services" className="text-xs font-semibold text-orange-600 group-hover:text-rose-500 flex items-center gap-1.5 transition">
                Execute Process <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
