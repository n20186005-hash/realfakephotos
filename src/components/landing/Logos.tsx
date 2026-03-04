export default function Logos() {
  const logos = ["Mercedes", "Microsoft", "Harvard", "Google", "ETH", "AWS"];

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
              #1 AI Headshot Generator from 🇨🇭（原站文案结构）
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              105K+ 用户已经生成 AI 头像
            </h2>
            <p className="mt-2 text-zinc-600">这里用“灰度文字 Logo 墙”复刻原站的信任背书模块。</p>
          </div>
          <a
            href="#pricing"
            className="inline-flex px-4 py-2 rounded-lg text-white font-semibold"
            style={{ background: "var(--brand)" }}
          >
            Get yours now!
          </a>
        </div>

        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {logos.map((name) => (
            <div
              key={name}
              className="h-14 rounded-2xl border border-[var(--border)] bg-white grid place-items-center text-zinc-500 font-semibold"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
