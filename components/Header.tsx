"use client";

import Image from "next/image";
import { useState } from "react";
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

const sections = [
    { label: "Top Stories", anchor: "stories", route: "/stories" },
    { label: "Talent Spotlight", anchor: "talent", route: "/category/talent" },
    { label: "Business", anchor: "business", route: "/category/business" },
    { label: "Technology", anchor: "tech", route: "/category/tech" },
    { label: "Culture & Lifestyle", anchor: "culture", route: "/category/culture" },
    { label: "Diaspora Roots", anchor: "diaspora", route: "/category/diaspora" },
    { label: "Watch Party", anchor: "video", route: "/video" },
];

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // Scroll spy only matters on homepage anchors
    const spy = useScrollSpy(
        ["stories", "talent", "business", "tech", "culture", "diaspora", "video"],
        140
    );

    const linkClass = (active: boolean) =>
        ["transition-colors", active ? "text-ink" : "text-muted hover:text-ink"].join(" ");

    const sectionHref = (s: (typeof sections)[number]) => (isHome ? `#${s.anchor}` : s.route);

    return (
        <header className="sticky top-0 z-50 border-b border-border glass">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                {/* Logo: icon badge + wordmark */}
                <a
                    href="/"
                    className="inline-flex items-center gap-3 font-heading tracking-tight whitespace-nowrap"
                    aria-label="BOX18 Naija home"
                >
                    {/* Brand mark */}
                    <span
                        className="
      inline-flex h-12 w-12 items-center justify-center
      rounded-full border border-border
      bg-white dark:bg-white
      shadow-sm
    "
                    >
    <Image
        src="/brand/box18-mark.png"
        alt=""
        width={96}
        height={96}
        className="h-9 w-9 object-contain"
        priority
    />
  </span>

                    {/* Wordmark */}
                    <span className="flex items-baseline gap-1">
  <span className="text-lg font-bold tracking-tight">BOX18</span>
  <span className="text-lg text-muted tracking-tight">Naija</span>
</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-5 text-sm">
                    {mainNav.map((item) => {
                        const isActive = item.href === pathname;
                        return (
                            <a key={item.label} href={item.href} className={linkClass(isActive)}>
                                {item.label}
                            </a>
                        );
                    })}

                    {/* Sections dropdown */}
                    <div className="relative">
                        <details className="group">
                            <summary className="list-none cursor-pointer select-none text-sm text-muted hover:text-ink transition-colors">
                                Sections
                                <span className="ml-1 inline-block group-open:rotate-180 transition-transform">▾</span>
                            </summary>

                            <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-border glass p-2 shadow-soft">
                                {sections.map((s) => {
                                    const active = isHome ? spy === s.anchor : pathname === s.route;
                                    return (
                                        <a
                                            key={s.label}
                                            href={sectionHref(s)}
                                            className={[
                                                "block rounded-xl px-3 py-2 text-sm transition-colors",
                                                active ? "text-ink" : "text-muted hover:text-ink",
                                            ].join(" ")}
                                        >
                                            {s.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>
                    </div>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="hidden sm:inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm text-muted hover:text-ink"
                    >
                        Search
                    </button>

                    <ThemeToggle />

                    <a
                        href={isHome ? "#partner" : "/#partner"}
                        className="inline-flex items-center rounded-full border border-[hsla(var(--accent)/0.35)] glass px-4 py-2 text-sm
            transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:shadow-glass hover:border-[hsla(var(--accent)/0.55)]
            active:translate-y-0"
                    >
                        Partner
                    </a>
                </div>
            </div>

            {/* Mobile nav */}
            <div className="lg:hidden border-t border-border">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex gap-3 overflow-x-auto text-sm text-muted">
                    {mainNav.map((item) => (
                        <a key={item.label} href={item.href} className="whitespace-nowrap hover:text-ink">
                            {item.label}
                        </a>
                    ))}

                    {/* Mobile sections quicklinks */}
                    {sections.slice(1, 6).map((s) => (
                        <a key={s.label} href={sectionHref(s)} className="whitespace-nowrap hover:text-ink">
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>

            <SearchModal open={searchOpen} onCloseAction={() => setSearchOpen(false)} />
        </header>
    );
}
