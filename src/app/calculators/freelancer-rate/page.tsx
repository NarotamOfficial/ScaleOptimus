'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, ArrowRight, Loader2 } from 'lucide-react';

export default function FreelancerRate() {
  const [incomeGoal, setIncomeGoal] = useState('');
  const [hours, setHours] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setErr('');
    try {
      const res = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'freelancer-rate', inputs: { incomeGoal, hours } })
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
          <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400"><Briefcase className="w-5 h-5" /></div>
          <div><h1 className="text-xl font-bold text-white">Freelancer Hourly Matrix</h1><p className="text-xs text-zinc-500">Map targeted earnings allocations directly onto billable capacity timelines.</p></div>
        </div>
        {err && <div className="p-3 bg-red-500/10 border border-red-500/20 text-xs text-red-400 rounded-xl font-mono">{err}</div>}
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Target Monthly Net Income ($)</label>
            <input type="number" required placeholder="e.g. 8000" value={incomeGoal} onChange={e=>setIncomeGoal(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Billable Allocations (Hours / Monthly)</label>
            <input type="number" required placeholder="e.g. 120" value={hours} onChange={e=>setHours(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3.5 bg-white text-zinc-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition hover:bg-zinc-200 disabled:opacity-40">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Analyze Allocation <ArrowRight className="w-3.5 h-3.5" /></>}
          </button>
        </form>
      </div>
    </div>
  );
}
