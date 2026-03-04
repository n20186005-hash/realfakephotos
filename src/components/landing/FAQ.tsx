"use client";

import { useState } from "react";

const faqs = [
  {
    q: "生成的 AI 头像版权归谁？",
    a: "演示站不生成真实图片；在真实产品里通常会声明用户拥有使用权/版权，具体以条款为准。",
  },
  {
    q: "如果不满意怎么办？",
    a: "原站强调 100% 退款保证。本复刻仅展示其信息结构，不提供退款/客服流程。",
  },
  {
    q: "上传照片会被保存吗？",
    a: "原站文案提到自拍在 3 小时后删除。这里用 Cookie 同意条 + FAQ 复刻其信任叙事。",
  },
  {
    q: "需要多少张自拍？",
    a: "通常建议 10–20 张，包含不同角度/表情/光线。",
  },
  {
    q: "支持哪些图片格式？",
    a: "常见为 JPG/PNG/HEIC。真实实现需在上传端做校验与压缩。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14">
      <div className="container grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 rounded-[28px] border border-[var(--border)] bg-white p-7 sm:p-9" style={{ boxShadow: "0 12px 40px rgba(0,0,0,.06)" }}>
          <h2 className="text-2xl sm:text-3xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            常见问题
          </h2>

          <div className="mt-5 divide-y divide-[var(--border)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  className="w-full text-left py-4 flex items-start justify-between gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div>
                    <p className="font-semibold">{f.q}</p>
                    {isOpen ? <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.a}</p> : null}
                  </div>
                  <span className="mt-1 text-2xl leading-none text-zinc-500" aria-hidden>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-7 sm:p-9" style={{ boxShadow: "0 12px 40px rgba(0,0,0,.06)" }}>
            <h3 className="text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Looking for team headshots?
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              原站在 FAQ 旁边放了企业版本入口。本复刻提供同样的“侧栏 CTA”。
            </p>
            <a
              className="mt-5 inline-flex px-4 py-2 rounded-lg border border-[var(--border)] font-semibold hover:bg-zinc-50 transition"
              href="https://www.companyheadshots.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Create company headshots
            </a>
          </div>

          <div className="mt-6 rounded-[28px] bg-zinc-50 border border-[var(--border)] p-7 sm:p-9">
            <h3 className="text-xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              今日就更新你的头像
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              复刻原站底部“Get your AI headshots today”的二次转化模块。
            </p>
            <a
              href="#pricing"
              className="mt-5 inline-flex px-4 py-2 rounded-lg text-white font-semibold"
              style={{ background: "var(--brand)" }}
            >
              Create yours now →
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
