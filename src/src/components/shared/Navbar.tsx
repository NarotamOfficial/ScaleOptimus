'use client';
import Link from 'next/link';
import { Layers, Activity, User, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2.5 bg-indigo-600/10 border border-indigo-500/20 rounded-xl group-hover:border-indigo-500/50 transition duration-300">
            <Layers className="w-5 h-5 text-indigo-400" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Scale<span className="text-indigo-400 font-medium">Optimus</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/services" className="hover:text-white transition-colors">Calculators</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing Core</Link>
          <Link href="/about" className="hover:text-white transition-colors">Engineering</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Communications</Link>
        </div>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              {session.user.email === 'narotamkhatkarofficial@gmail.com' && (
                <Link href="/hidden-core-admin-console" className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 hover:bg-amber-500/20 transition">
                  <ShieldCheck className="w-4 h-4" />
                </Link>
              )}
              <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-medium text-zinc-200 hover:text-white hover:border-zinc-700 transition">
                <Activity className="w-4 h-4 text-indigo-400" /> Command Room
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition">Sign In</Link>
              <Link href="/signup" className="text-sm font-medium bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/10">Access Matrix</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
