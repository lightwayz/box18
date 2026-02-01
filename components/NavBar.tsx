"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";
import useScrollSpy from "./useScrollSpy";

const mainNav = [
    { label: "Home", href: "/" },
    { label: "Stories", href: "/stories" },
    { label: "Focus", href: "/focus" },
    { label: "Video", href: "/video" },
    { label: "About", href: "/about" },
];

const topCategories = [
    { label: "Football", href: "/category/football" },
    { label: "Culture", href: "/category/culture" },
    { label: "Business", href: "/category/business" },
    { label: "Tech", href: "/category/tech" },
];

const sections = [
    { label: "Top Stories", anchor: "stories", route: "/stories" },
    { label: "Talent Spotlight", anchor: "talent", route: "/category/talent" },
    { label: "Business", anchor: "business", route: "/category/business" },
    { label: "Technology", anchor: "tech", route: "/category/tech" },
    { label: "Culture & Lifestyle", anchor: "culture", route: "/category/culture" },
    { label: "Diaspora Roots", anchor: "diaspora", route: "/category/diaspora" },
    { label: "Watch Party", anchor: "video", route: "/video" },
];

function formatToday() {
    const d = new Date();
    return d.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
}

export default function NavBar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const spy = useScrollSpy(["stories", "talent", "business", "tech", "culture", "diaspora", "video"], 140);

    const sectionHref = (s: (typeof sections)[number]) => (isHome ? `#${s.anchor}` : s.route);
    const isActiveMain = (href: string) => href === pathname;

    const today = useMemo(() => formatToday(), []);

    // Highlight category chips on /category/*
    const activeCategory = useMemo(() => {
        const match = topCategories.find((c) => pathname?.startsWith(c.href));
        return match?.href ?? "";
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50">
            {/* ---------------------------
          TIER 1: Utility Bar (date + desktop categories + actions)
      ---------------------------- */}
            <div className="bg-[hsl(var(--primary))] text-white border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-10 grid grid-cols-3 items-center gap-3">
                    {/* Left: date */}
                    <div className="hidden sm:flex items-center gap-3 text-xs text-white/85 justify-self-start">
                        <span className="font-semibold text-white/90">{today}</span>
                        <span className="hidden md:inline text-white/35">•</span>
                        <span className="hidden md:inline text-white/70">BOX18 Editorial</span>
                    </div>

                    {/* Center: categories (Desktop only) */}
                    <nav className="hidden md:flex items-center justify-center gap-4 text-xs sm:text-sm justify-self-center">
                        {topCategories.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="py-2 text-white/65 hover:text-white/90 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: actions */}
                    <div className="flex items-center gap-2 sm:gap-3 justify-self-end">
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs sm:text-sm text-white/90 hover:bg-white/15 hover:text-white transition"
                        >
                            Search
                        </button>

                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* ---------------------------
          TIER 2: Main Nav Bar (logo + desktop nav + partner)
          + mobile merged nav strip (mainNav + category chips)
      ---------------------------- */}
            <div className="bg-[hsl(var(--primary))] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 font-heading tracking-tight whitespace-nowrap"
                        aria-label="BOX18 Naija home"
                    >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-white/30">
              <Image
                  src="/brand/box18-mark.png"
                  alt=""
                  width={96}
                  height={96}
                  className="h-7 w-7 object-contain"
                  priority
              />
            </span>

                        <span className="flex items-baseline gap-1">
              <span className="text-lg font-bold tracking-tight text-white">BOX18</span>
              <span className="text-lg tracking-tight text-white/80">Naija</span>
            </span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm">
                        {mainNav.map((item) => {
                            const active = isActiveMain(item.href);
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={[
                                        "relative py-2 transition-colors",
                                        active ? "text-white" : "text-white/85 hover:text-white",
                                    ].join(" ")}
                                >
                                    {item.label}
                                    {active && (
                                        <span className="absolute left-0 right-0 -bottom-3 h-[2px] bg-[hsl(var(--accent))]" />
                                    )}
                                </a>
                            );
                        })}

                        {/* Sections dropdown */}
                        <div className="relative z-[80]">
                            <details className="group">
                                <summary
                                    className={[
                                        "list-none cursor-pointer select-none py-2",
                                        "text-sm text-white/85 hover:text-white transition-colors",
                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--primary))]",
                                        "inline-flex items-center gap-1",
                                    ].join(" ")}
                                >
                                    Sections
                                    <span className="inline-block group-open:rotate-180 transition-transform">▾</span>
                                </summary>

                                <div
                                    className={[
                                        "absolute left-0 mt-3 w-72 overflow-hidden rounded-2xl",
                                        "glass border border-border shadow-soft",
                                        "text-ink",
                                        "z-[90]",
                                    ].join(" ")}
                                >
                                    <div className="p-2">
                                        {sections.map((s) => {
                                            const active = isHome ? spy === s.anchor : pathname === s.route;

                                            return (
                                                <a
                                                    key={s.label}
                                                    href={sectionHref(s)}
                                                    className={[
                                                        "group/item flex items-center justify-between rounded-xl px-3 py-2 text-sm",
                                                        "transition-colors",
                                                        active ? "bg-surface text-ink" : "text-muted hover:bg-surface hover:text-ink",
                                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/60",
                                                    ].join(" ")}
                                                >
                          <span className="transition-transform group-hover/item:translate-x-[1px]">
                            {s.label}
                          </span>

                                                    <span
                                                        className={[
                                                            "h-2 w-2 rounded-full bg-[hsl(var(--accent))] transition-opacity",
                                                            active ? "opacity-100" : "opacity-0 group-hover/item:opacity-60",
                                                        ].join(" ")}
                                                    />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </details>
                        </div>
                    </nav>

                    {/* Partner */}
                    <div className="flex items-center justify-end min-w-[140px]">
                        <a
                            href={isHome ? "#partner" : "/#partner"}
                            className="inline-flex items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] font-bold px-5 py-2 text-sm hover:-translate-y-0.5 transition shadow-sm"
                        >
                            Partner
                        </a>
                    </div>
                </div>

                {/* ✅ Mobile: ONE merged strip (main nav and category chips) */}
                <div className="lg:hidden border-t border-white/15 relative">
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[hsl(var(--primary))] to-transparent" />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
                        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap no-scrollbar text-sm">
                            {/* Main nav links */}
                            {mainNav.map((item) => {
                                const active = isActiveMain(item.href);
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={[
                                            "relative py-2",
                                            active ? "text-white" : "text-white/85 hover:text-white",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                        {active && (
                                            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[hsl(var(--accent))]" />
                                        )}
                                    </a>
                                );
                            })}

                            {/* separator */}
                            <span className="mx-1 h-1 w-1 rounded-full bg-white/25 shrink-0" />

                            {/* Category chips */}
                            {topCategories.map((item) => {
                                const active = activeCategory === item.href;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={[
                                            "shrink-0 rounded-full border px-3 py-1.5 text-sm transition",
                                            active
                                                ? "border-white/35 bg-white/15 text-white"
                                                : "border-white/20 bg-white/5 text-white/90 hover:bg-white/10",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <SearchModal open={searchOpen} onCloseAction={() => setSearchOpen(false)} />
        </header>
    );
}
