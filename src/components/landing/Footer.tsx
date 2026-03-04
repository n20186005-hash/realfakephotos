export default function Footer() {
  const links = [
    { label: "Company Headshots", href: "https://www.companyheadshots.ai/" },
    { label: "Affiliate", href: "https://www.realfakephotos.com/affiliate" },
    { label: "Privacy", href: "https://www.realfakephotos.com/legal/privacy-policy" },
    { label: "Terms", href: "https://www.realfakephotos.com/legal/terms-of-use" },
  ];

  return (
    <footer className="pt-10 pb-12 border-t border-[var(--border)] bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              RealFakePhotos Clone
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              仅用于学习与演示：复刻页面结构/交互，不包含真实 AI 生成与支付。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-950 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 hr-soft" />
        <p className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Demo. Not affiliated with the original website.
        </p>
      </div>
    </footer>
  );
}
