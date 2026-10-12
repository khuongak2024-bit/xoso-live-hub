import Header from "@/components/Header";
import LotteryTable from "@/components/LotteryTable";
import TicketChecker from "@/components/TicketChecker";
import { LotteryResult } from "@/types/lottery";
import type { Metadata } from "next";

export const revalidate = 60; // Tự động làm mới cache mỗi phút trong ngày

export async function generateMetadata(): Promise<Metadata> {
  const today = new Date().toLocaleDateString("vi-VN");
  return {
    title: `Kết Quả Xổ Số Hôm Nay (${today}) - Trực Tiếp XSMN, XSMT, XSMB`,
    description: `Trực tiếp bảng kết quả xổ số kiến thiết 3 miền và Vietlott hôm nay ngày ${today}. Cập nhật nhanh nhất, chính xác nhất.`,
  };
}

// Dữ liệu mẫu ban đầu để SSR render siêu tốc
const demoResults: LotteryResult[] = [
  {
    draw_date: new Date().toISOString().split("T")[0],
    region: "XSMN",
    province: "TP. Hồ Chí Minh",
    g8: ["89"],
    g7: ["412"],
    g6: ["8432", "1905", "3321"],
    g5: ["6204"],
    g4: ["54321", "90812", "12456", "77890"],
    g3: ["99012", "34512"],
    g2: ["65431"],
    g1: ["73829"],
    gdb: ["567889"],
    status: "completed",
  },
  {
    draw_date: new Date().toISOString().split("T")[0],
    region: "XSMN",
    province: "Tiền Giang",
    g8: ["35"],
    g7: ["678"],
    g6: ["1234", "5678", "9012"],
    g5: ["4321"],
    g4: ["65432", "19283", "84726", "29481"],
    g3: ["82910", "47291"],
    g2: ["10293"],
    g1: ["49201"],
    gdb: ["194832"],
    status: "completed",
  },
];

export default function HomePage() {
  return (
    <div className="flex-1 pb-16">
      <Header />

      <main className="max-w-4xl mx-auto px-4 mt-4">
        {/* Banner điều hướng nhanh 3 miền */}
        <div className="grid grid-cols-4 gap-2 mb-4 text-center text-xs font-bold">
          <button className="bg-red-600 text-white py-2 rounded-lg shadow-xs hover:bg-red-700">Miền Nam</button>
          <button className="bg-white text-slate-700 border border-slate-200 py-2 rounded-lg shadow-xs hover:bg-slate-50">Miền Trung</button>
          <button className="bg-white text-slate-700 border border-slate-200 py-2 rounded-lg shadow-xs hover:bg-slate-50">Miền Bắc</button>
          <button className="bg-white text-slate-700 border border-slate-200 py-2 rounded-lg shadow-xs hover:bg-slate-50">Vietlott</button>
        </div>

        {/* Khung Dò vé nhanh */}
        <TicketChecker />

        {/* Vị trí quảng cáo AdSense / Banner đối tác */}
        <div className="mb-5 p-3 rounded-lg border border-dashed border-red-300 bg-red-50/50 text-center text-xs text-red-600">
          Vị trí Banner Đối tác Vé số Online / Google AdSense (Header Banner)
        </div>

        {/* Danh sách bảng kết quả các đài */}
        <div className="space-y-4">
          {demoResults.map((item, idx) => (
            <LotteryTable key={idx} data={item} />
          ))}
        </div>

        {/* Banner chân trang */}
        <div className="mt-8 p-4 rounded-lg border border-dashed border-slate-300 bg-white text-center text-xs text-slate-400">
          Quảng cáo chân trang (In-feed Native Banner)
        </div>
      </main>
    </div>
  );
}
