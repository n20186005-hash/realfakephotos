"use client";

export default function FloatingChat() {
  return (
    <button
      className="fixed left-4 bottom-4 z-40 size-14 rounded-full text-white font-black grid place-items-center"
      style={{ background: "var(--brand)", boxShadow: "0 16px 50px rgba(126,95,255,.35)" }}
      onClick={() => alert("演示站：聊天组件为占位。")}
      aria-label="Open chat"
    >
      💬
    </button>
  );
}
