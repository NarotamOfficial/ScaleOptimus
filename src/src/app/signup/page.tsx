'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(''); setErr('');
    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: name }, emailRedirectTo: `${window.location.origin}/dashboard` }
    });
    if (error) setErr(error.message);
    else setMsg('Verification transmission dispatched. Inspect your email inbox to activate authorization access.');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-zinc-900 border border-zinc-900 rounded-3xl p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white text-center">Instantiate Credentials</h2>
          <p className="text-xs text-zinc-500 text-center mt-1">Establish your localized data analytics node</p>
        </div>
        {msg && <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono rounded-xl">{msg}</div>}
        {err && <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-mono rounded-xl">{err}</div>}
        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" required placeholder="Identity Label (Full Name)" value={name} onChange={e=>setName(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          <input type="email" required placeholder="Endpoint Vector (Email)" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          <input type="password" required placeholder="Access Signature Key (Password)" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-xs transition">Instantiate Matrix Account</button>
        </form>
        <div className="text-center"><Link href="/login" className="text-xs text-zinc-500 hover:text-white transition">Existing signature mapped? Authenticate profile</Link></div>
      </div>
    </div>
  );
}
