export interface LotteryResult {
  id?: string;
  draw_date: string; // YYYY-MM-DD
  region: "XSMN" | "XSMT" | "XSMB" | "VIETLOTT";
  province: string;  // Ví dụ: TP.HCM, Tiền Giang, Hà Nội
  g8?: string[];
  g7?: string[];
  g6?: string[];
  g5?: string[];
  g4?: string[];
  g3?: string[];
  g2?: string[];
  g1?: string[];
  gdb: string[];     // Giải Đặc Biệt
  status: "live" | "completed";
  created_at?: string;
}

export interface TicketCheckerInput {
  number: string;
  province: string;
  date: string;
}
