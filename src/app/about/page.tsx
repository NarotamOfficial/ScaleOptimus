export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black tracking-tight text-white">The Scale Optimus Paradigm</h1>
        <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest">Architectural Determinism vs Stochastic Hype</p>
      </div>
      <hr className="border-zinc-900" />
      <div className="grid md:grid-cols-2 gap-10 text-zinc-400 text-sm leading-relaxed">
        <p>
          Scale Optimus was built out of necessity. Modern business software has become bogged down by overly casual chat interfaces and heavy, unoptimized frameworks. We reject the idea that basic accounting tools require long conversational flows or complex setups.
        </p>
        <p>
          Our platform isolates numerical calculations into robust, independent computational pipelines. By processing metrics through pure algorithmic functions rather than generative guess patterns, we protect your data accuracy and keep operations streamlined.
        </p>
      </div>
    </div>
  );
}
