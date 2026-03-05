"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

const navItems: Array<{ label: string; href: string }> = [
  { label: "示例", href: "/#examples" },
  { label: "价格", href: "/#pricing" },
  { label: "常见问题", href: "/#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-[var(--border)]">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="grid place-items-center size-8 rounded-xl"
            style={{ background: "var(--brand)" }}
            aria-hidden
          >
            <span className="text-white font-black" style={{ fontFamily: "var(--font-display)" }}>
              RF
            </span>
          </span>
          <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Real Fake Photos
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-700 hover:text-zinc-950 transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.companyheadshots.ai/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-700 hover:text-zinc-950 transition"
          >
            Teams
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="hidden sm:inline-flex px-3 py-2 rounded-lg text-sm font-medium border border-[var(--border)] hover:bg-zinc-50 transition">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="hidden sm:inline-flex px-3 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--brand)" }}>
                Sign up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <Link href="/dashboard" className="text-sm font-medium text-zinc-700 hover:text-black mr-2">
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </Show>
        </div>
      </div>
    </header>
  );
}
