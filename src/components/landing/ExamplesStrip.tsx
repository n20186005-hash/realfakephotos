"use client";

import Image from "next/image";

const imgs = [
  "/images/image_w2048_h2048_headshot-01.png",
  "/images/image_w2048_h2048_headshot-02.png",
  "/images/image_w2048_h2048_headshot-03.png",
  "/images/image_w2048_h2048_headshot-04.png",
  "/images/image_w2048_h2048_headshot-05.png",
  "/images/image_w2048_h2048_headshot-06.png",
];

function Tile({ src }: { src: string }) {
  return (
    <div className="relative shrink-0 w-[180px] sm:w-[210px] aspect-square rounded-2xl overflow-hidden border border-[var(--border)] bg-white" style={{ boxShadow: "0 10px 24px rgba(0,0,0,.08)" }}>
      <Image src={src} alt="AI生成头像示例" width={512} height={512} className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-2 text-[11px] px-2 py-1 rounded-lg bg-black/55 text-white">
        100% AI generated
      </div>
    </div>
  );
}

export default function ExamplesStrip() {
  return (
    <section id="examples" className="py-10">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              示例效果（横向展示）
            </h2>
            <p className="mt-1 text-zinc-600">复刻原站“头像滑带 + 100% AI generated”视觉。</p>
          </div>
          <a href="#pricing" className="hidden sm:inline-flex text-sm font-semibold" style={{ color: "var(--brand)" }}>
            查看价格 →
          </a>
        </div>

        <div className="mt-6 relative">
          <div className="overflow-hidden">
            <div className="flex gap-5 py-2 animate-[marquee_28s_linear_infinite] [--tw-translate-x:0]">
              {Array.from({ length: 2 }).flatMap((_, pass) =>
                imgs.map((src, i) => <Tile key={`${pass}-${i}`} src={src} />)
              )}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
