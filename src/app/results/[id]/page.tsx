'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Cpu, FileDown, ArrowLeft, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ResultsView({ params }: { params: { id: string } }) {
  const [record, setRecord] = useState<any>(null);
  const [aiText, setAiText] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    supabase.from('calculations').select('*').eq('id', params.id).single().then(({ data }) => {
      setRecord(data);
      if (data?.ai_explanation) setAiText(data.ai_explanation);
    });
  }, [params.id]);

  const fetchAiInsight = async () => {
    if (!record) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: record.calculator_type, inputs: record.inputs, outputs: record.outputs })
      });
      const data = await res.json();
      setAiText(data.explanation);
      // Cache generated response back inside persistent document row
      await supabase.from('calculations').update({ ai_explanation: data.explanation }).eq('id', record.id);
    } catch (e) { console.error(e); }
    setAiLoading(false);
  };

  if (!record) return <div className="p-24 text-center font-mono text-xs text-zinc-500 animate-pulse">De-serializing matrix records...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-8">
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition font-mono"><ArrowLeft className="w-3.5 h-3.5" /> Return to console</Link>
      
      <div className="bg-zinc-900 border border-zinc-900 rounded-3xl p-8 space-y-8">
        <div className="flex justify-between items-center border-b border-zinc-950 pb-6">
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded uppercase">{record.calculator_type}</span>
            <h1 className="text-xl font-bold text-white mt-2">Analytical Processing Result Frame</h1>
          </div>
          <button onClick={() => window.print()} className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-2 transition"><FileDown className="w-3.5 h-3.5" /> Export Frame</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">Input Vectors</h3>
            <pre className="text-xs text-zinc-300 font-mono bg-zinc-900/50 p-4 rounded-xl overflow-x-auto">{JSON.stringify(record.inputs, null, 2)}</pre>
          </div>
          <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">Compiled Outputs</h3>
            <pre className="text-sm font-bold text-emerald-400 font-mono bg-zinc-900/50 p-4 rounded-xl overflow-x-auto">{JSON.stringify(record.outputs, null, 2)}</pre>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-950 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase flex items-center gap-2"><Cpu className="w-4 h-4 text-indigo-400" /> Executive AI Summary Layer</h3>
            {!aiText && !aiLoading && <button onClick={fetchAiInsight} className="px-4 py-1.5 bg-indigo-600 text-white font-bold text-xs rounded-lg hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/10">Explain Results</button>}
          </div>

          {aiLoading && <div className="text-xs font-mono text-zinc-500 animate-pulse p-4 bg-zinc-950 border border-zinc-900 rounded-xl">Asynchronously crunching semantic abstractions...</div>}
          
          {aiText && (
            <div className="p-6 bg-indigo-600/[0.02] border border-indigo-500/10 text-zinc-300 text-sm leading-relaxed rounded-2xl font-normal whitespace-pre-wrap">
              {aiText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
