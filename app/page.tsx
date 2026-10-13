"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import LotteryTable from "@/components/LotteryTable";
import TicketChecker from "@/components/TicketChecker";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [activeTab, setActiveTab] = useState("XSMN");
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLottery() {
      setLoading(true);
      const { data, error } = await supabase
        .from("lottery_records")
        .select("*")
        .order("draw_date", { ascending: false });

      if (!error && data) {
        setRecords(data);
      }
      setLoading(false);
    }

    fetchLottery();
  }, []);

  // Lọc kết quả theo miền đang chọn
  const filteredRecords = records.filter((item) => {
    const code = (item.code || "").toUpperCase();
    const region = (item.region || "").toUpperCase();
    const province = (item.province || "").toUpperCase();

    if (activeTab === "XSMN") {
      return (
        region === "XSMN" ||
        code.startsWith("MN") ||
        province.includes("HỒ CHÍ MINH") ||
        province.includes("TIỀN GIANG") ||
        province.includes("ĐỒNG THÁP") ||
        province.includes("CÀ MAU")
      );
    }
    if (activeTab === "XSMT") {
      return (
        region === "XSMT" ||
        code.startsWith("MT") ||
        province.includes("ĐÀ NẴNG") ||
        province.includes("KHÁNH HÒA") ||
        province.includes("HUẾ")
      );
    }
    if (activeTab === "XSMB") {
      return (
        region === "XSMB" ||
        code.startsWith("MB") ||
        province.includes("MIỀN BẮC") ||
        province.includes("HÀ NỘI")
      );
    }
    if (activeTab === "VIETLOTT") {
      return (
        region === "VIETLOTT" ||
        code.includes("MEGA") ||
        code.includes("POWER") ||
        province.includes("VIETLOTT")
      );
    }
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-100 pb-16">
      {/* Truyền hàm nhận sự kiện click vào Header */}
      <Header activeTab={activeTab} onSelectTab={(tabId) => setActiveTab(tabId)} />

      <div className="max-w-5xl mx-auto px-4 mt-6">
        {/* Khung Dò Vé Số Nhanh */}
        <div className="mb-6">
          <TicketChecker />
        </div>

        {/* Khung Banner Quảng cáo */}
        <div className="bg-red-50 border border-dashed border-red-300 rounded-xl p-3 text-center text-xs text-red-500 font-medium mb-6">
          Vị trí Banner Đối tác Vé số Online / Google AdSense (Header Banner)
        </div>

        {/* Danh sách Bảng Kết quả */}
        {loading ? (
          <div className="bg-white rounded-xl p-12 text-center text-slate-500 shadow-sm border border-slate-200">
            Đang tải dữ liệu xổ số...
          </div>
        ) : filteredRecords.length > 0 ? (
          <div className="space-y-6">
            {filteredRecords.map((record) => (
              <LotteryTable
                key={record.id || `${record.code}-${record.draw_date}`}
                record={record}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center text-slate-500 shadow-sm border border-slate-200">
            <p className="text-base font-semibold text-slate-700 mb-1">
              Chưa có dữ liệu cho miền này.
            </p>
            <p className="text-xs text-slate-400">
              Hệ thống sẽ tự động cập nhật ngay khi có kết quả mở thưởng.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}