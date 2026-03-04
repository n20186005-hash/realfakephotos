layout.tsximport Image from "next/image";

export default function Steps() {
  return (
    <section className="py-12">
      <div className="container grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-7 sm:p-9" style={{ boxShadow: "var(--shadow)" }}>
          <p className="text-sm font-extrabold" style={{ color: "var(--brand)", fontFamily: "var(--font-display)" }}>
            Step 1
          </p>
          <h3 className="mt-1 text-3xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            上传 10+ 张自拍
          </h3>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            选择 10–20 张脸部清晰的照片即可。合照也可以；演示站同样展示“3 小时后自动删除”的文案结构（不做真实上传）。
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-semibold">
            Upload your selfies now!
          </div>

          <div className="mt-7 hr-soft" />

          <div className="mt-7 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].slice(0, 6).map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border)] bg-zinc-50 aspect-square grid place-items-center text-xs text-zinc-500"
              >
                自拍 {i}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[var(--border)] bg-white p-7 sm:p-9" style={{ boxShadow: "var(--shadow)" }}>
          <p className="text-sm font-extrabold" style={{ color: "var(--brand)", fontFamily: "var(--font-display)" }}>
            Step 2
          </p>
          <h3 className="mt-1 text-3xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            等待 → 生成 → 下载
          </h3>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            原站会在数小时后交付 80+ 结果，并提供“Professional / Casual”等风格。本复刻用静态示例图模拟“输出墙”。
          </p>

          <div className="mt-6 rounded-3xl border border-[var(--border)] overflow-hidden bg-white">
            <div className="grid grid-cols-3">
              <Image src="/images/image_w2048_h2048_headshot-02.png" alt="输出示例" width={512} height={512} className="w-full h-auto object-cover" />
              <Image src="/images/image_w2048_h2048_headshot-03.png" alt="输出示例" width={512} height={512} className="w-full h-auto object-cover" />
              <Image src="/images/image_w2048_h2048_headshot-05.png" alt="输出示例" width={512} height={512} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="px-3 py-1.5 rounded-full border border-[var(--border)]">2 styles</span>
            <span className="px-3 py-1.5 rounded-full border border-[var(--border)]">Professional</span>
            <span className="px-3 py-1.5 rounded-full border border-[var(--border)]">Casual</span>
          </div>
        </div>
      </div>
    </section>
  );
}
