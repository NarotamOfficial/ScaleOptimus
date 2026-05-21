import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white relative z-10 subtle-grid">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-zinc-100 pb-12 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-orange-600/10 border border-orange-500/20 rounded-xl group-hover:border-orange-500 transition duration-300">
                <Layers className="w-5 h-5 text-orange-400" />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-950">
                Scale<span className="text-orange-500 font-medium">Optimus</span>
              </span>
            </div>
            <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
              Automated high-fidelity computational engines mapping financial enterprise truths instantly across global operations.
            </p>
          </div>
          {['Calculators', 'Corporate', 'Legal'].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-3 text-sm text-zinc-700">
                <li><Link href="/services" className="hover:text-orange-600 transition">All Engines</Link></li>
                <li><Link href="/pricing" className="hover:text-orange-600 transition">Licensing Plans</Link></li>
                <li><Link href="/contact" className="hover:text-orange-600 transition">communications</Link></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Scale Optimus Core Operations Group. Designed for absolute algorithmic precision.</p>
          <p>Processing Mode: Deterministic Verification Framework</p>
        </div>
      </div>
    </footer>
  );
}
