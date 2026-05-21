'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setErr(error.message);
    else router.push('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-zinc-900 border border-zinc-900 rounded-3xl p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white text-center">Verify Identity Credentials</h2>
          <p className="text-xs text-zinc-500 text-center mt-1">Unlock encrypted analytics dashboard operations</p>
        </div>
        {err && <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-mono rounded-xl">{err}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" required placeholder="Endpoint Vector (Email)" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          <input type="password" required placeholder="Access Signature Key" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none" />
          <button type="submit" className="w-full py-3 bg-white text-zinc-950 font-semibold rounded-xl text-xs hover:bg-zinc-200 transition">Execute Validation</button>
        </form>
        <div className="flex justify-between text-xs text-zinc-500 px-1">
          <Link href="/forgot-password" className="hover:text-white transition">Recover Token Key</Link>
          <Link href="/signup" className="hover:text-white transition">Instantiate Account</Link>
        </div>
      </div>
    </div>
  );
}
