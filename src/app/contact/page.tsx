'use client';
import { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-zinc-900 border border-zinc-900 rounded-3xl p-8 space-y-6 relative overflow-hidden">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2"><Terminal className="w-5 h-5 text-indigo-400" /> Secure Communications</h1>
          <p className="text-xs text-zinc-500">Routing inquiries directly into the platform priority service queue.</p>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-mono">
            Transmission acknowledged. Data packets safely logged into operational routing loops.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Operator Endpoint (Email)</label>
              <input type="email" required placeholder="name@corporation.com" className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Payload Context (Message)</label>
              <textarea required rows={4} placeholder="Provide details regarding systemic metrics parameters..." className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:border-indigo-500 outline-none transition resize-none" />
            </div>
            <button type="submit" className="w-full py-3 bg-white text-zinc-950 font-semibold rounded-xl text-xs hover:bg-zinc-200 transition">Dispatch Packet</button>
          </form>
        )}
      </div>
    </div>
  );
}
