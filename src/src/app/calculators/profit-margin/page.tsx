'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Percent, ArrowRight, Loader2 } from 'lucide-react';

export default function ProfitMargin() {
  const [revenue, setRevenue] = useState('');
  const [cost, setCost] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setErr('');
    try {
      const res = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'profit-margin', inputs: { revenue, cost } })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      router.push(`/results/${data.data.id}`);
    } catch (err: any) { setErr(err.message); setLoading(false); }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-24">
      <div className="bg-zinc-900 border border-zinc-900 rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400"><Percent className="w-5 h-5" /></div>
          <div><h1 className="text-xl font-bold text-white">Profit Margin Module</h1><p className="text-xs text-zinc-500">Analyze raw revenue against structural production costs.</p></div>
        </div>
        {err && <div className="p-3 bg-red-500/10 border border-red-500/20 text-xs text-red-400 rounded-xl font-mono">{err}</div>}
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Gross Revenue Vector ($)</label>
            <input type="number" required placeholder="e.g. 50000" value={revenue} onChange={e=>setRevenue(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Baseline Production Cost ($)</label>
            <input type="number" required placeholder="e.g. 32000" value={cost} onChange={e=>setCost(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3.5 bg-white text-zinc-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition hover:bg-zinc-200 disabled:opacity-40">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Run Calculations <ArrowRight className="w-3.5 h-3.5" /></>}
          </button>
        </form>
      </div>
    </div>
  );
}
