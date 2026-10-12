# Xổ Số Live Hub (Next.js 15 + Supabase + SSE Realtime)

Dự án website chuyên tra cứu kết quả xổ số 3 miền, tích hợp Server-Sent Events (SSE) phát trực tiếp, công cụ dò vé số nhanh và bot cào dữ liệu qua GitHub Actions.

## Cấu trúc dự án:
- `app/page.tsx`: Giao diện bảng kết quả chuẩn di động, tối ưu tải trang cực nhanh.
- `app/api/lottery/live/route.ts`: Endpoint SSE stream từng con số về client thời gian thực.
- `components/TicketChecker.tsx`: Component dò vé nhanh ngay trên web.
- `crawler/lottery_scraper.py`: Script Python cào dữ liệu dự phòng.
- `.github/workflows/lottery_crawler.yml`: Lịch tự động chạy cào KQXS mỗi chiều.

## Cách chạy thử trên máy tính:
1. Cài thư viện:
   ```bash
   npm install
   ```
2. Khởi chạy:
   ```bash
   npm run dev
   ```
3. Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.
