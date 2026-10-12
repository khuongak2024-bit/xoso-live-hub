"use client";

import { useState } from "react";
import { CheckCircle2, Search, XCircle } from "lucide-react";

export default function TicketChecker() {
  const [ticketNum, setTicketNum] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketNum || ticketNum.length < 2) {
      setResult("Vui lòng nhập tối thiểu 2 chữ số cuối.");
      return;
    }

    // Logic giả lập dò vé nhanh
    if (ticketNum.endsWith("89")) {
      setResult("CHÚC MỪNG: Trùng 2 số cuối Giải Đặc Biệt (Hoặc Giải Tám)!");
    } else {
      setResult("Rất tiếc: Vé số của bạn chưa trùng giải nào trong đợt này.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-5 h-5 text-red-600" />
        <h2 className="font-bold text-slate-800 text-sm md:text-base">
          Dò Vé Số Trực Tuyến Nhanh
        </h2>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          placeholder="Nhập 6 hoặc 2 số đuôi (vd: 567889)"
          value={ticketNum}
          onChange={(e) => setTicketNum(e.target.value.replace(/[^0-9]/g, ""))}
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-500 font-mono tracking-widest text-center"
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition"
        >
          Dò ngay
        </button>
      </form>

      {result && (
        <div className={`mt-3 p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 ${
          result.startsWith("CHÚC MỪNG") ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-600"
        }`}>
          {result.startsWith("CHÚC MỪNG") ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <XCircle className="w-4 h-4 text-slate-400 shrink-0" />}
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}
