'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ShieldAlert, UserPlus, RefreshCw, Layers } from 'lucide-react';

export default function AdminConsole() {
  const [users, setUsers] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  async function loadAdminData() {
    // Admin pipeline reading directly from core edge routers
    const { data: profiles } = await supabase.from('profiles').select('*');
    if (profiles) setUsers(profiles);

    const { data: usage } = await supabase.from('usage_logs').select('*').order('action_date', { ascending: false });
    if (usage) setLogs(usage);
  }

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    
    // Remote client injection loop to provision accounts through actions router
    const response = await fetch('/hidden-core-admin-console/actions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    
    const result = await response.json();
    if (result.success) {
      setStatus('User provisioned securely inside main authentication structure.');
      setEmail(''); setPassword(''); setName('');
      loadAdminData();
    } else {
      setStatus(`Execution error: ${result.error}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-3xl flex items-center gap-4">
        <ShieldAlert className="w-10 h-10 text-amber-500 shrink-0" />
        <div>
          <h1 className="text-2xl font-black text-white">Hidden Core Governance Console</h1>
          <p className="text-xs text-zinc-400 mt-0.5">Authorized for override operator access only: <span className="text-amber-400 font-mono font-bold">narotamkhatkarofficial@gmail.com</span></p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Provision Node form */}
        <div className="bg-zinc-900 border border-zinc-900 rounded-2xl p-6 space-y-4 h-fit">
          <h3 className="text-sm font-bold tracking-wider font-mono uppercase text-zinc-400 flex items-center gap-2"><UserPlus className="w-4 h-4 text-indigo-400" /> Provision Operator Node</h3>
          {status && <div className="p-3 bg-zinc-950 text-indigo-400 text-xs font-mono rounded-xl border border-zinc-800">{status}</div>}
          <form onSubmit={handleCreateUser} className="space-y-3">
            <input type="text" required placeholder="Identity Label" value={name} onChange={e=>setName(e.target.value)} className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-white rounded-xl text-xs outline-none" />
            <input type="email" required placeholder="Target Email Vector" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-white rounded-xl text-xs outline-none" />
            <input type="password" required placeholder="Raw Generation Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 text-white rounded-xl text-xs outline-none" />
            <button type="submit" className="w-full py-2.5 bg-white text-zinc-950 text-xs font-bold rounded-xl transition hover:bg-zinc-200">Inject Credentials Block</button>
          </form>
        </div>

        {/* Global Profiles Log viewer */}
        <div className="lg:col-span-2 bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold tracking-wider font-mono uppercase text-zinc-400 flex items-center gap-2"><Layers className="w-4 h-4 text-emerald-400" /> Infrastructure Node Ledger ({users.length})</h3>
          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
            {users.map((u) => (
              <div key={u.id} className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-white">{u.full_name || 'No Label Record'}</div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5">{u.email}</div>
                </div>
                <span className="text-[9px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  {u.subscription_tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
