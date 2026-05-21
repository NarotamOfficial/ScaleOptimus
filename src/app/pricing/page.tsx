'use client';
import { Check, ShieldAlert, BarChart } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="space-y-24 pb-20">
      {/* Glow Header */}
      <section className="hero-glow border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-4">
          <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest bg-rose-100 px-3 py-1 rounded-md">Licensing Options</span>
          <h1 className="text-4xl font-black tracking-tighter text-zinc-950 sm:text-6xl max-w-4xl mx-autoLEADING-[1.1]">
            Unlock Deterministic Performance Analysis
          </h1>
          <p className="text-lg text-zinc-700 max-w-2xl mx-auto font-medium">Select a licensed operational tier aligned precisely with your strategic transaction velocity.</p>
        </div>
      </section>

      {/* Modern Tiers - elevated visual style */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { tier: "Sandbox Free", price: "$0", desc: "Basic logical tracking sandbox.", accent: "zinc" },
          { tier: "Operator Pro", price: "$49", desc: "Advanced recursive multivariable tracking.", accent: "orange" },
          { tier: "Enterprise Core", price: "$149", desc: "Multi-tenant infrastructure priority allocation.", accent: "pink" },
        ].map((item, idx) => (
          <div key={idx} className={`p-10 ${item.accent === 'orange' ? 'bg-card-gradient border-2 border-orange-200 shadow-2xl shadow-orange-500/10' : 'bg-white border border-zinc-200'} rounded-3xl space-y-10 flex flex-col justify-between hover:shadow-xl transition group relative`}>
            {item.accent === 'orange' && <div className="absolute top-0 right-8 -translate-y-1/2 bg-orange-600 text-white text-[10px] font-mono tracking-widest font-bold px-3 py-1 rounded-full uppercase">Standard Production</div>}
            <div className="space-y-6">
              <div className={`w-14 h-14 rounded-2xl ${item.accent === 'orange' ? 'bg-orange-100/50' : 'bg-zinc-100'} flex items-center justify-center text-${item.accent}-500`}><BarChart className="w-7 h-7" /></div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">{item.tier}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mt-1">{item.desc}</p>
              </div>
              <div className="text-5xl font-black tracking-tighter text-zinc-950">{item.price} <span className="text-sm font-medium text-zinc-500 tracking-normal">/ absolute static</span></div>
              <ul className="space-y-4 text-xs text-zinc-700 font-medium pt-6 border-t border-zinc-200">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-orange-500" /> 5 daily calculation runs</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-orange-500" /> Sandbox analytics dashboard access</li>
                {item.accent === 'zinc' && <li className="flex items-center gap-3 text-zinc-400"><ShieldAlert className="w-4 h-4" /> No AI explanation calls</li>}
                {item.accent !== 'zinc' && <li className="flex items-center gap-3"><Check className="w-4 h-4 text-orange-500" /> PDF report generation</li>}
              </ul>
            </div>
            <button className={`w-full py-4 ${item.accent === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-zinc-950 hover:bg-zinc-800'} text-white font-semibold rounded-2xl text-xs transition shadow-lg`}>Commit Execution Contract</button>
          </div>
        ))}
      </section>
    </div>
  );
}
