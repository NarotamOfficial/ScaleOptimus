'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/dashboard/settings` });
    setMsg('Recovery data packet dispatched to the target communication loop.');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-zinc-900 border border-zinc-900 rounded-3xl p-8 space-y-6">
        <h2 className="text-xl font-bold text-white text-center">Recover Access Token</h2>
        {msg && <div className="p-3 bg-indigo-500/10 text-indigo-400 text-xs rounded-xl">{msg}</div>}
        <form onSubmit={handleReset} className="space-y-4">
          <input type="email" required placeholder="Registered Target Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          <button type="submit" className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold transition">Transmit Token Loop</button>
        </form>
      </div>
    </div>
  );
}
