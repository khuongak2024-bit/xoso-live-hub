"use client";

import React from "react";

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export default function Header({ activeTab, onSelectTab }: HeaderProps) {
  const tabs = [
    { id: "XSMN", label: "Miền Nam" },
    { id: "XSMT", label: "Miền Trung" },
    { id: "XSMB", label: "Miền Bắc" },
    { id: "VIETLOTT", label: "Vietlott" },
  ];

  return (
    <header className="w-full bg-[#c82222] text-white shadow-md">
      {/* Khung tiêu đề Logo */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-400 text-red-800 font-black rounded-lg flex items-center justify-center text-xl shadow">
            XS
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight uppercase leading-tight">
              XỔ SỐ LIVE HUB
            </h1>
            <p className="text-xs text-red-100 opacity-90">
              Trực Tiếp 3 Miền & Vietlott
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-red-800/80 px-3 py-1.5 rounded-full text-xs font-medium text-amber-300">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-ping inline-block"></span>
          <span>16:15 - 18:30 Live</span>
        </div>
      </div>

      {/* Thanh nút bấm chọn miền */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-2 grid grid-cols-4 gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`py-2 px-3 text-center font-bold text-sm rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#c82222] text-white shadow"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}