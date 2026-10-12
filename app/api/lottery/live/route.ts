import { NextResponse } from "next/server";

// Server-Sent Events (SSE) Endpoint mô phỏng phát kết quả trực tiếp theo thời gian thực (Real-time live draw)
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Giả lập 5 bước cập nhật kết quả từng giải cách nhau 1.5 giây
      const steps = [
        { type: "update", prize: "g8", numbers: ["89"], status: "live" },
        { type: "update", prize: "g7", numbers: ["412"], status: "live" },
        { type: "update", prize: "g6", numbers: ["8432", "1905", "3321"], status: "live" },
        { type: "update", prize: "g1", numbers: ["73829"], status: "live" },
        { type: "finish", prize: "gdb", numbers: ["567889"], status: "completed" },
      ];

      for (const step of steps) {
        const payload = `data: ${JSON.stringify(step)}\n\n`;
        controller.enqueue(encoder.encode(payload));
        await new Promise((res) => setTimeout(res, 1500));
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
