"use client";

import { useState } from "react";

const KEY = "rfp_cookie_consent_v1";

export default function CookieConsent({ initialOpen }: { initialOpen: boolean }) {
  const [open, setOpen] = useState(initialOpen);

  if (!open) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 w-[320px] sm:w-[360px]">
      <div className="rounded-2xl border border-[var(--border)] bg-white p-4" style={{ boxShadow: "0 16px 50px rgba(0,0,0,.16)" }}>
        <p className="text-sm font-semibold">Cookie 提示</p>
        <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
          为了提供更个性化的体验，我们会使用 Cookie 保存一些非敏感信息。
          点击“Accept all”即代表你同意此演示站存储本地偏好。
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <a
            className="text-xs font-semibold"
            style={{ color: "var(--brand)" }}
            href="https://www.realfakephotos.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          <button
            className="px-3 py-2 rounded-lg text-xs font-semibold text-white"
            style={{ background: "var(--brand)" }}
            onClick={() => {
              try {
                document.cookie = `${KEY}=accepted; path=/; max-age=31536000`;
              } catch {}
              setOpen(false);
            }}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
