'use client';
import { Check, ShieldAlert } from 'lucide-react';

export default function PricingPage() {
  const handleCheckout = (tier: string) => {
    if (tier === 'free') {
      window.location.href = '/signup';
      return;
    }
    
    // Global Razorpay Implementation Interface
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_placeholder_key",
      amount: tier === 'agency' ? 149000 : 49000, // Amount in fractional subunits
      currency: "USD",
      name: "Scale Optimus Core",
      description: `Activation Contract for ${tier.toUpperCase()} Access Privilege`,
      image: "/logo.png",
      handler: function (response: any) {
        alert(`Payment verification acknowledged: ${response.razorpay_payment_id}`);
        window.location.href = '/dashboard?session_upgrade=true';
      },
      prefill: {
        name: "Enterprise Operator",
        email: "operator@scaleoptimus.com"
      },
      theme: { color: "#4f46e5" }
    };
    
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 space-y-16">
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">High-Performance Operation Licenses</h1>
        <p className="text-zinc-400 text-base">Uncompromising computational bandwidth. Pick the tier aligned with your transaction velocity requirements.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Baseline Execution</h3>
            <p className="text-zinc-500 text-xs">Sandbox access mapping fundamental logic thresholds.</p>
            <div className="text-4xl font-black text-white">$0 <span className="text-xs font-normal text-zinc-600">/ absolute static</span></div>
            <ul className="space-y-3 text-xs text-zinc-400 pt-4 border-t border-zinc-900">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> 5 daily calculation runs</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Standard responsive dashboard</li>
              <li className="flex items-center gap-2 text-zinc-600"><ShieldAlert className="w-3.5 h-3.5" /> No AI narrative insights</li>
            </ul>
          </div>
          <button onClick={() => handleCheckout('free')} className="w-full py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-xl text-xs font-semibold transition">Deploy Sandbox</button>
        </div>

        {/* Tier 2 */}
        <div className="bg-zinc-900 border-2 border-indigo-600 rounded-2xl p-8 flex flex-col justify-between space-y-8 relative shadow-2xl shadow-indigo-600/5">
          <div className="absolute top-0 right-6 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-mono tracking-widest font-bold px-3 py-1 rounded-full uppercase">Standard Production</div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Professional Operator</h3>
            <p className="text-indigo-300 text-xs">For high-throughput independent operators & scaling firms.</p>
            <div className="text-4xl font-black text-white">$49 <span className="text-xs font-normal text-zinc-500">/ monthly billing</span></div>
            <ul className="space-y-3 text-xs text-zinc-300 pt-4 border-t border-zinc-800">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Unlimited calculation executions</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Capped AI narrative explanations</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> PDF report generation</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Historical logs retrieval</li>
            </ul>
          </div>
          <button onClick={() => handleCheckout('pro')} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition shadow-md shadow-indigo-600/20">Authorize Professional Contract</button>
        </div>

        {/* Tier 3 */}
        <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Enterprise Authority</h3>
            <p className="text-zinc-500 text-xs">Maximum resource prioritization for scaled global organizations.</p>
            <div className="text-4xl font-black text-white">$149 <span className="text-xs font-normal text-zinc-600">/ monthly billing</span></div>
            <ul className="space-y-3 text-xs text-zinc-400 pt-4 border-t border-zinc-900">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Uncapped dedicated throughput</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Priority asynchronous API limits</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Multi-user shared tracking dashboards</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Full SLA uptime compliance</li>
            </ul>
          </div>
          <button onClick={() => handleCheckout('agency')} className="w-full py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-xl text-xs font-semibold transition">Authorize Enterprise Protocol</button>
        </div>
      </div>
    </div>
  );
}
