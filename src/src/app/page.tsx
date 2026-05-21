import Link from 'next/link';
import { ArrowRight, Shield, Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="space-y-32 pb-24">
      {/* Hero Suite */}
      <section className="max-w-6xl mx-auto px-4 pt-32 text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/5 border border-indigo-500/20 rounded-full text-xs font-mono tracking-wider text-indigo-400 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> CONFIGURATION ENGINE V1.0 LIVE
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.05]">
          Process Business Numbers. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Extract Absolute Capital Clarity.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal">
          Bypass fragile spreadsheets. Map variables instantly through low-latency calculation processors with asynchronous minimalist execution explanations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/10">
            Initialize Free Core <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 transition duration-200">
            Inspect Calculators
          </Link>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white">Engineered For Structural Business Accuracy</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm">High-fidelity metrics processing designed explicitly for modern agencies, global freelancers, and growing ventures.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-2xl space-y-4 hover:border-zinc-800 transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400"><Cpu className="w-5 h-5" /></div>
            <h3 className="text-lg font-bold text-white">Deterministic Execution</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">No stochastic chat engines or unpredictable outputs. Results are compiled via rigorous pure-mathematics criteria.</p>
          </div>
          <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-2xl space-y-4 hover:border-zinc-800 transition">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400"><Shield className="w-5 h-5" /></div>
            <h3 className="text-lg font-bold text-white">Isolated Security Matrix</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Transactions are recorded down inside relational databases with full row-level policy enforcement.</p>
          </div>
          <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-2xl space-y-4 hover:border-zinc-800 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"><Activity className="w-5 h-5" /></div>
            <h3 className="text-lg font-bold text-white">Minimalist Narrative Layer</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Optional asynchronous execution insight provides precise executive actions capped at a strict 150-word profile.</p>
          </div>
        </div>
      </section>

      {/* Trust Optimization Blueprint */}
      <section className="max-w-5xl mx-auto px-4 bg-gradient-to-b from-zinc-900/50 to-zinc-950 border border-zinc-900 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4 max-w-xl">
          <h2 className="text-3xl font-extrabold text-white">Ready to streamline your metrics?</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Join thousands of operators mapping overhead thresholds, project margin minimums, and compounding velocity trajectories with total functional confidence.</p>
        </div>
        <Link href="/signup" className="px-7 py-3.5 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-200 transition shrink-0 text-sm">
          Establish Live Session
        </Link>
      </section>
    </div>
  );
}
