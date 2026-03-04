"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="pt-14 pb-10">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-zinc-600">#1 AI 职业头像生成器（Demo）</p>
          <h1
            className="mt-3 text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            无需摄影棚，也能拥有
            <span style={{ color: "var(--brand)" }}>专业头像</span>
          </h1>
          <ul className="mt-5 space-y-2 text-zinc-700">
            <li className="flex gap-2">
              <span className="mt-1 size-4 rounded-full" style={{ background: "var(--brand)" }} />
              <span>上传 10+ 张自拍，3 分钟完成下单。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 size-4 rounded-full" style={{ background: "var(--brand)" }} />
              <span>输出更适合 LinkedIn / 简历 / 公司官网的头像风格。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 size-4 rounded-full" style={{ background: "var(--brand)" }} />
              <span>演示价：€9.99 起（仅前端复刻，不含真实支付/生成）。</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold"
              style={{ background: "var(--brand)" }}
            >
              立即生成头像 <span aria-hidden>→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border border-[var(--border)] hover:bg-zinc-50 transition"
              onClick={(e) => {
                e.preventDefault();
                alert("演示站：未接入 App Store 跳转。");
              }}
            >
              下载 iOS App
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold">As seen in</span>
              <span className="px-2 py-1 rounded-md border border-[var(--border)]">heute</span>
              <span className="px-2 py-1 rounded-md border border-[var(--border)]">SRF</span>
              <span className="px-2 py-1 rounded-md border border-[var(--border)]">20min</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-semibold">9,193,440</span>
              <span>AI headshots · 105K+ 用户</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[28px] opacity-60 blur-2xl"
            style={{ background: "radial-gradient(circle at 30% 20%, rgba(126,95,255,.22), transparent 55%), radial-gradient(circle at 80% 70%, rgba(0,0,0,.08), transparent 55%)" }}
            aria-hidden
          />
          <div className="relative rounded-[28px] border border-[var(--border)] overflow-hidden" style={{ boxShadow: "var(--shadow)" }}>
            <Image
              src="/images/hero-collage.png"
              alt="自拍到职业头像的示意图"
              width={2752}
              height={1536}
              priority
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-xs text-zinc-500">* 图片为 AI 生成示例，仅用于前端复刻演示。</p>
        </div>
      </div>
    </section>
  );
}
