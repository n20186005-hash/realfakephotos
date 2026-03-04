"use client";

const tiers = [
  {
    name: "1 Style",
    price: "€9.99",
    oldPrice: null,
    bullets: ["4 小时交付", "40 张头像", "1 种风格"],
    cta: "Get 40 headshots in 4 hours",
    highlight: false,
  },
  {
    name: "2 Styles",
    price: "€12.98",
    oldPrice: "€19.98",
    bullets: ["3 小时交付", "80 张头像", "2 种风格", "100% 退款保证"],
    cta: "Get 80 headshots in 3 hours!",
    highlight: true,
  },
  {
    name: "4 Styles",
    price: "€15.96",
    oldPrice: "€39.96",
    bullets: ["2.5 小时交付", "160 张头像", "4 种风格"],
    cta: "Get 160 headshots in 2.5 hours",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14">
      <div className="container">
        <p className="text-center text-sm font-semibold" style={{ color: "var(--brand)" }}>
          100% Money Back Guarantee
        </p>
        <h2
          className="mt-2 text-center text-3xl sm:text-4xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          职业头像比摄影棚便宜约 <span style={{ color: "var(--brand)" }}>14 倍</span>
        </h2>
        <p className="mt-3 text-center text-zinc-600">
          原站引用了“德国职业照平均 €250”作为对比，这里复刻其叙事方式与卡片布局。
        </p>

        <div className="mt-9 grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-[26px] border bg-white p-7"
              style={{
                borderColor: t.highlight ? "rgba(126,95,255,.45)" : "var(--border)",
                boxShadow: t.highlight ? "0 20px 60px rgba(126,95,255,.18)" : "0 12px 40px rgba(0,0,0,.06)",
              }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  {t.name}
                </p>
                {t.highlight ? (
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ background: "var(--brand)" }}>
                    Best value
                  </span>
                ) : null}
              </div>

              <div className="mt-3 flex items-end gap-2">
                <p className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>
                  {t.price}
                </p>
                {t.oldPrice ? <p className="text-sm text-zinc-500 line-through">{t.oldPrice}</p> : null}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 size-2 rounded-full" style={{ background: "var(--brand)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-6 w-full px-4 py-3 rounded-xl font-semibold text-white"
                style={{ background: t.highlight ? "var(--brand)" : "#111827" }}
                onClick={() => alert("演示站：未接入支付与生成流程。")}
              >
                {t.cta}
              </button>

              {t.highlight ? (
                <p className="mt-3 text-xs text-zinc-500">* 仅复刻前端展示，按钮为占位。</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
