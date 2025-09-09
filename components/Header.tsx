"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Buy" },
  { href: "/", label: "Refinance" },
  { href: "/", label: "HELOC" },
  { href: "/", label: "Rates" },
  { href: "/", label: "Better+" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isStart = pathname.startsWith("/start");
  const [solid, setSolid] = useState(!isHome);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (key: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(key);
  };
  const scheduleClose = (key: string) => {
    // Slight delay so users can traverse into the submenu without it closing
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMenu((prev) => (prev === key ? null : prev));
    }, 160);
  };

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.getBoundingClientRect().bottom : 520;
      setSolid((hero ? threshold <= 0 : window.scrollY > 520));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const subMenus: Record<string, { label: string; href: string; badge?: string }[]> = {
    Buy: [
      { label: "Apply now", href: "/start" },
      { label: "Purchase rates", href: "/mortgage-calculator" },
      { label: "Affordability calculator", href: "/mortgage-calculator" },
      { label: "Mortgage calculator", href: "/mortgage-calculator" },
      { label: "Rent vs buy calculator", href: "/mortgage-calculator" },
      { label: "Find an agent", href: "/about-us" },
      { label: "VA loans", href: "/about-us" },
      { label: "Learning center", href: "/about-us" },
    ],
    Refinance: [
      { label: "Apply Now", href: "/start" },
      { label: "Refinance rates", href: "/mortgage-calculator" },
      { label: "Cash-out refinance calculator", href: "/mortgage-calculator" },
      { label: "Learning Center", href: "/about-us" },
    ],
    HELOC: [
      { label: "Apply Now", href: "/start" },
      { label: "Calculate your Cash", href: "/mortgage-calculator" },
      { label: "HELOC vs. Cash-out Refinance", href: "/about-us" },
      { label: "Learning Center", href: "/about-us" },
    ],
    Rates: [
      { label: "Purchase mortgage rates", href: "/mortgage-calculator" },
      { label: "Refinance rates", href: "/mortgage-calculator" },
      { label: "Refinance cash-out rates", href: "/mortgage-calculator" },
      { label: "HELOC rates", href: "/mortgage-calculator" },
      { label: "Purchase VA rates", href: "/mortgage-calculator" },
    ],
    "Better+": [
      { label: "Get Insurance", href: "/about-us" },
      { label: "Title and Closing", href: "/about-us" },
      { label: "Better Attorney Match", href: "/about-us" },
      { label: "Learning Center", href: "/about-us" },
      { label: "Better Agent Match", href: "/about-us", badge: "For Agents" },
    ],
  };

  return (
    <>
      <header
        className={
          isHome && !solid
            ? "fixed inset-x-0 top-0 z-50 bg-transparent transition-colors"
            : "fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur transition-colors"
        }
      >
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-start px-4 py-3 md:py-4">
          {/* Left: logo + nav */}
          <div className="flex items-center gap-8 md:gap-10">
            <Link href="/" className="flex items-center gap-2">
              <div className="leading-tight">
                <span
                  className={
                    isHome && !solid
                      ? "text-2xl font-extrabold text-white"
                      : "text-2xl font-extrabold text-[#0B6E4F]"
                  }
                >
                  Better
                </span>
                {isStart && (
                  <div className="text-xs font-medium text-[#102A22]">Mortgage</div>
                )}
              </div>
            </Link>

            {/* Center nav (hidden on start) */}
            {!isStart && (
              <nav className="hidden items-center gap-8 text-sm md:flex">
                {nav.map((n) => {
                  const active = openMenu === n.label;
                  const base = "rounded-full px-3 py-1.5 transition";
                  const homeIdle = "text-white/90 hover:text-white";
                  const homeActive = "bg-white/20 text-white";
                  const solidIdle = "text-gray-700 hover:text-gray-900";
                  const solidActive = "bg-gray-100 text-gray-900";
                  return (
                    <div
                      key={n.label}
                      className="relative"
                      onMouseEnter={() => open(n.label)}
                      onMouseLeave={() => scheduleClose(n.label)}
                      onFocus={() => open(n.label)}
                      onBlur={(e) => {
                        const current = e.currentTarget as HTMLElement;
                        if (!current.contains(e.relatedTarget as Node)) setOpenMenu(null);
                      }}
                    >
                      <Link
                        href={n.href}
                        aria-haspopup={!!subMenus[n.label]}
                        aria-expanded={active}
                        className={
                          isHome && !solid
                            ? `${base} ${active ? homeActive : homeIdle}`
                            : `${base} ${active ? solidActive : solidIdle}`
                        }
                      >
                        {n.label}
                      </Link>

                      {/* Dropdown */}
                      {subMenus[n.label] && active && (
                      <div
                        className="absolute left-0 top-full z-[60] mt-2 w-72 rounded-xl border border-emerald-100 bg-white p-3 text-[#102A22] shadow-xl"
                        onMouseEnter={() => open(n.label)}
                        onMouseLeave={() => scheduleClose(n.label)}
                      >
                        <ul className="space-y-1">
                          {subMenus[n.label].map((i) => (
                            <li key={i.label}>
                              <Link
                                href={i.href}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-[14px] hover:bg-emerald-50"
                              >
                                <span>{i.label}</span>
                                {i.badge && (
                                  <span className="ml-3 rounded-full bg-amber-300 px-2 py-0.5 text-[11px] font-semibold text-[#0B3F2F]">{i.badge}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            )}

          </div>

          {/* Center home icon (only on /start) */}
          {isStart && (
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300 bg-white text-[#0B6E4F] shadow-[0_0_0_6px_rgba(16,185,129,0.16)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 10.5 12 3l9 7.5" stroke="#0B6E4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 10v9h14v-9" stroke="#0B6E4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          )}

          {/* Right actions */}
          <div className="ml-auto flex items-center justify-end gap-5 md:gap-6">
            {isStart ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm text-[#0B6E4F]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" stroke="#0B6E4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Need help? Call 415‑523‑8837</span>
              </div>
            ) : (
              <>
                <button
                  aria-label="Call"
                  className={
                    isHome && !solid
                      ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/90 hover:text-white"
                      : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:text-gray-900"
                  }
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <Link
                  href="#"
                  className={
                    isHome && !solid
                      ? "text-sm font-medium text-white/90 hover:text-white"
                      : "text-sm font-medium text-gray-700 hover:text-gray-900"
                  }
                >
                  Sign in
                </Link>
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center rounded-full bg-[#0B6E4F] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#0a6246]"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      {/* Spacer to offset fixed header on non-home, non-start routes */}
      {!isHome && !isStart && <div aria-hidden className="h-16" />}
    </>
  );
}
