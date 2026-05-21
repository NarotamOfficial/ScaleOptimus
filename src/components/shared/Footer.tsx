import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/60 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-zinc-900 pb-12 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span className="font-bold text-lg text-white">ScaleOptimus</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Automated high-performance calculations mapping mathematical enterprise truths across global industries.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Calculators</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li><Link href="/calculators/profit-margin" className="hover:text-zinc-300 transition">Profit Margin</Link></li>
              <li><Link href="/calculators/pricing" className="hover:text-zinc-300 transition">Target Pricing</Link></li>
              <li><Link href="/calculators/break-even" className="hover:text-zinc-300 transition">Break Even</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Corporate</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li><Link href="/services" className="hover:text-zinc-300 transition">All Systems</Link></li>
              <li><Link href="/pricing" className="hover:text-zinc-300 transition">Licensing Plans</Link></li>
              <li><Link href="/about" className="hover:text-zinc-300 transition">Our Paradigm</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li><Link href="/privacy" className="hover:text-zinc-300 transition">Data Policy</Link></li>
              <li><Link href="/terms" className="hover:text-zinc-300 transition">Terms Matrix</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-300 transition">Inquiries</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono">
          <p>&copy; {new Date().getFullYear()} Scale Optimus Core. Designed for global algorithmic accuracy.</p>
          <p>Processing Mode: Deterministic Verification Architecture</p>
        </div>
      </div>
    </footer>
  );
}
