"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

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

    const activeCategory = useMemo(() => {
        const match = topCategories.find((c) => pathname?.startsWith(c.href));
        return match?.href ?? "";
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50">
            {/* ---------------------------
          TIER 1: Utility Bar (HIDE ON MOBILE)
      ---------------------------- */}
            <div className="hidden sm:block bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] border-b border-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-10 grid grid-cols-3 items-center gap-3">
                    {/* Left: date */}
                    <div className="hidden sm:flex items-center gap-3 text-xs justify-self-start">
                        <span className="font-semibold">{today}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="hidden md:inline">BOX18 Editorial</span>
                    </div>

                    {/* Center: categories (Desktop only) */}
                    <nav className="hidden md:flex items-center justify-center gap-4 text-xs sm:text-sm justify-self-center">
                        {topCategories.map((item) => (
                            <a key={item.label} href={item.href} className="py-2 hover:text-white">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Search only */}
                    <div className="flex items-center gap-2 justify-self-end">
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="inline-flex items-center h-8 rounded-full bg-[hsl(var(--primary-fg))] text-[hsl(var(--primary))] px-3 text-xs font-semibold hover:opacity-95 transition"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* ---------------------------
          TIER 2: Main Nav Bar
      ---------------------------- */}
            <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 font-heading tracking-tight whitespace-nowrap"
                        aria-label="BOX18 Naija home"
                    >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-white">
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
              <span className="text-lg font-bold tracking-tight">BOX18</span>
              <span className="text-lg tracking-tight">Naija</span>
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
                                        "relative py-2 pb-3 transition-colors",
                                        active ? "font-semibold text-white" : "text-white/90 hover:text-white",
                                    ].join(" ")}
                                >
                                    {item.label}
                                    {/* ✅ Yellow active indicator */}
                                    {active && (
                                        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[hsl(var(--accent))]" />
                                    )}
                                </a>
                            );
                        })}

                        {/* Sections dropdown */}
                        <div className="relative z-[80]">
                            <details className="group">
                                <summary
                                    className={[
                                        "list-none cursor-pointer select-none py-2 pb-3",
                                        "text-sm text-white/90 hover:text-white transition-colors",
                                        "inline-flex items-center gap-1",
                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--primary))]",
                                    ].join(" ")}
                                >
                                    Sections
                                    <span className="inline-block group-open:rotate-180 transition-transform">▾</span>
                                </summary>

                                <div className={["absolute left-0 mt-3 w-72 overflow-hidden rounded-2xl", "glass", "text-[hsl(var(--ink))]", "z-[90]"].join(" ")}>
                                    <div className="p-2">
                                        {sections.map((s) => {
                                            const active = isHome ? spy === s.anchor : pathname === s.route;

                                            return (
                                                <a
                                                    key={s.label}
                                                    href={sectionHref(s)}
                                                    className={[
                                                        "group/item flex items-center justify-between rounded-xl px-3 py-2 text-sm",
                                                        active
                                                            ? "bg-[hsl(var(--surface))] text-[hsl(var(--ink))]"
                                                            : "text-[hsl(var(--muted))] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--ink))]",
                                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
                                                    ].join(" ")}
                                                >
                                                    <span className="transition-transform group-hover/item:translate-x-[1px]">{s.label}</span>

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

                    {/* Partner + Mobile Search */}
                    <div className="flex items-center justify-end gap-2 min-w-[170px]">
                        {/* Mobile Search */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="sm:hidden inline-flex items-center h-9 rounded-full bg-white text-[hsl(var(--primary))] px-4 text-sm font-semibold hover:opacity-95 transition"
                        >
                            Search
                        </button>

                        <a
                            href={isHome ? "#partner" : "/#partner"}
                            className="inline-flex items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))] font-bold px-5 py-2 text-sm hover:-translate-y-0.5 transition shadow-sm"
                        >
                            Partner
                        </a>
                    </div>
                </div>

                {/* Mobile: ONE merged strip (main nav + category chips) */}
                <div className="lg:hidden border-t border-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
                        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap no-scrollbar text-sm overscroll-x-contain">
                            {mainNav.map((item) => {
                                const active = isActiveMain(item.href);
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={[
                                            "relative py-2 pb-3 transition-colors",
                                            active ? "font-semibold text-white" : "text-white/90 hover:text-white",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                        {/* ✅ Yellow active indicator (mobile) */}
                                        {active && (
                                            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[hsl(var(--accent))]" />
                                        )}
                                    </a>
                                );
                            })}

                            <span className="mx-1 h-1 w-1 rounded-full bg-white shrink-0" />

                            {topCategories.map((item) => {
                                const active = activeCategory === item.href;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={[
                                            "shrink-0 rounded-full border px-3 py-1.5 text-sm transition",
                                            active
                                                ? "border-[hsl(var(--accent))] text-[hsl(var(--primary-fg))]"
                                                : "border-white text-[hsl(var(--primary-fg))]",
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
