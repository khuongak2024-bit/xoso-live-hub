import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trực Tiếp Kết Quả Xổ Số 3 Miền & Vietlott Hôm Nay",
  description: "Cập nhật trực tiếp kết quả xổ số miền Nam, miền Trung, miền Bắc, Vietlott và Keno theo thời gian thực.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
