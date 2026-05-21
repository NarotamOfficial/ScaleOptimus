'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Settings() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setEmail(user.email || '');
        setName(user.user_metadata.full_name || '');
      }
    });
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    const { error } = await supabase.auth.updateUser({ data: { full_name: name } });
    if (!error) setMsg('Account data profile configuration verified.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-2xl font-bold text-white">Profile Node Parameter Matrix</h1>
      <div className="bg-zinc-900 border border-zinc-900 rounded-2xl p-8 max-w-xl space-y-6">
        {msg && <div className="p-3 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-xl">{msg}</div>}
        <div>
          <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Static Routing Endpoint</label>
          <input type="text" disabled value={email} className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-900 rounded-xl text-sm text-zinc-500 outline-none cursor-not-allowed" />
        </div>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Identity Parameter Label</label>
            <input type="text" required value={name} onChange={e=>setName(e.target.value)} className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none transition" />
          </div>
          <button type="submit" className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl text-xs transition">Commit Vector Shifts</button>
        </form>
        <div className="pt-6 border-t border-zinc-950 flex justify-between items-center">
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = '/'; }} className="text-xs text-red-400 font-semibold hover:underline">Terminate Matrix Session</button>
        </div>
      </div>
    </div>
  );
}
