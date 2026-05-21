'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Play, Sliders, Shield, FileText } from 'lucide-react';

export default function UserDashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: prof } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
      setProfile(prof);

      const { data: calcs } = await supabase.from('calculations').select('*').eq('user_id', session.user.id).order('created_at', { ascending: false });
      if (calcs) setHistory(calcs);
    }
    loadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
      <div className="space-y-2">
        <Link href="/dashboard" className="flex items-center gap-2.5 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-semibold text-white"><Shield className="w-4 h-4 text-indigo-400" /> Operational Control</Link>
        <Link href="/dashboard/settings" className="flex items-center gap-2.5 px-4 py-3 text-zinc-500 hover:text-white rounded-xl text-sm font-semibold transition"><Sliders className="w-4 h-4" /> Account Node Matrix</Link>
      </div>

      <div className="md:col-span-3 space-y-8">
        <div className="p-8 bg-zinc-900/40 border border-zinc-900 rounded-2xl flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">Active Node Framework</h2>
            <p className="text-xs text-zinc-500 mt-0.5">Telemetry tracking logs streaming safely.</p>
          </div>
          <span className="px-3 py-1 bg-indigo-600/10 border border-indigo-500/20 rounded-md text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
            {profile?.subscription_tier || 'Free Sandbox'}
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-zinc-400 font-mono">Recent Evaluation Chronology</h3>
          {history.length === 0 ? (
            <div className="p-8 border border-zinc-900 rounded-2xl text-center text-xs text-zinc-600">No telemetry frames saved into this instance. Launch a processing module to trace results.</div>
          ) : (
            <div className="space-y-3">
              {history.map((h) => (
                <div key={h.id} className="p-5 bg-zinc-900/20 border border-zinc-900 rounded-xl flex items-center justify-between hover:border-zinc-800 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400"><FileText className="w-4 h-4" /></div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">{h.calculator_type.replace('-', ' ')}</h4>
                      <p className="text-[10px] font-mono text-zinc-500">{new Date(h.created_at).toUTCString()}</p>
                    </div>
                  </div>
                  <Link href={`/results/${h.id}`} className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 text-zinc-300"><Play className="w-3.5 h-3.5" /></Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
