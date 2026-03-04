import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
        404 - 页面未找到
      </h2>
      <p className="text-zinc-600 mb-8 max-w-md">
        抱歉，我们无法找到您正在寻找的页面。它可能已被移动或不再存在。
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-90"
        style={{ background: "var(--brand)" }}
      >
        返回首页
      </Link>
    </div>
  );
}
