import { LotteryResult } from "@/types/lottery";

interface Props {
  data: LotteryResult;
}

export default function LotteryTable({ data }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden mb-6">
      {/* Tiêu đề bảng */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white px-4 py-2.5 flex items-center justify-between">
        <div>
          <span className="font-bold text-sm md:text-base uppercase tracking-wide">
            {data.region} - {data.province}
          </span>
          <span className="text-xs text-rose-100 ml-2">({data.draw_date})</span>
        </div>
        {data.status === "live" ? (
          <span className="bg-amber-400 text-red-900 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
            Đang quay
          </span>
        ) : (
          <span className="text-xs bg-red-800/60 px-2 py-0.5 rounded text-rose-200">
            Đã hoàn thành
          </span>
        )}
      </div>

      {/* Bảng kết quả chuẩn truyền thống */}
      <div className="divide-y divide-slate-100 text-sm">
        {data.g8 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Tám</div>
            <div className="col-span-3 text-center text-rose-600 font-extrabold text-lg tracking-widest">
              {data.g8.join(" - ") || "..."}
            </div>
          </div>
        )}

        {data.g7 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Bảy</div>
            <div className="col-span-3 text-center font-bold tracking-wider text-slate-800">
              {data.g7.join(" - ") || "..."}
            </div>
          </div>
        )}

        {data.g6 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Sáu</div>
            <div className="col-span-3 text-center font-bold tracking-wider text-slate-800 flex justify-around">
              {data.g6.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          </div>
        )}

        {data.g5 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Năm</div>
            <div className="col-span-3 text-center font-bold tracking-wider text-slate-800">
              {data.g5.join(" - ") || "..."}
            </div>
          </div>
        )}

        {data.g4 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Bốn</div>
            <div className="col-span-3 text-center font-bold tracking-wider text-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {data.g4.map((n, i) => (
                <span key={i} className="bg-slate-50 py-1 rounded border border-slate-100">{n}</span>
              ))}
            </div>
          </div>
        )}

        {data.g3 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Ba</div>
            <div className="col-span-3 text-center font-bold tracking-wider text-slate-800 flex justify-around">
              {data.g3.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          </div>
        )}

        {data.g2 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Nhì</div>
            <div className="col-span-3 text-center font-bold tracking-wider text-slate-800">
              {data.g2.join(" - ") || "..."}
            </div>
          </div>
        )}

        {data.g1 && (
          <div className="grid grid-cols-4 p-2.5 items-center hover:bg-slate-50/50">
            <div className="text-slate-500 font-semibold text-xs uppercase">Giải Nhất</div>
            <div className="col-span-3 text-center font-extrabold text-base tracking-wider text-slate-900">
              {data.g1.join(" - ") || "..."}
            </div>
          </div>
        )}

        {/* Giải Đặc Biệt nổi bật */}
        <div className="grid grid-cols-4 p-3.5 items-center bg-rose-50/70 border-t-2 border-red-300">
          <div className="text-red-700 font-black text-xs md:text-sm uppercase">ĐẶC BIỆT</div>
          <div className="col-span-3 text-center text-red-600 font-black text-2xl md:text-3xl tracking-widest drop-shadow-xs">
            {data.gdb.join(" - ") || "..."}
          </div>
        </div>
      </div>
    </div>
  );
}
