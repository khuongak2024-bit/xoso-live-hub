import { Flame, Radio } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-red-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-amber-400 text-red-900 p-1.5 rounded-lg font-black text-lg tracking-wider">
            XS
          </div>
          <div>
            <h1 className="font-extrabold text-base md:text-lg leading-tight tracking-tight">
              XỔ SỐ LIVE HUB
            </h1>
            <p className="text-xs text-red-200">Trực Tiếp 3 Miền & Vietlott</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-red-800/80 px-2.5 py-1 rounded-full text-xs font-semibold border border-red-500/40 text-amber-300">
            <Radio className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>16:15 - 18:30 Live</span>
          </div>
        </div>
      </div>
    </header>
  );
}
