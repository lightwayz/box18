
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";
import useScrollSpy from "./useScrollSpy";

const nav = [
    { label: "Home", href: "/" },

    // Page routes
    { label: "Stories", href: "/stories" },
    { label: "Focus", href: "/focus" },
    { label: "Video", href: "/video" },
    { label: "About", href: "/about" },

    // Category routes
    { label: "Talent Spotlight", href: "/category/talent" },
    { label: "Business", href: "/category/business" },
    { label: "Culture & Lifestyle", href: "/category/culture" },
    { label: "Diaspora Roots", href: "/category/diaspora" },
];

// Optional: homepage section anchors for scroll-spy (only meaningful on "/")
const homeAnchors = [
    { label: "Top Stories", href: "#stories", id: "stories" },
    { label: "Talent", href: "#talent", id: "talent" },
    { label: "Business", href: "#business", id: "business" },
    { label: "Culture", href: "#culture", id: "culture" },
    { label: "Diaspora", href: "#diaspora", id: "diaspora" },
    { label: "Watch Party", href: "#video", id: "video" },
];

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // Scroll spy only matters on homepage, for anchors
    const spy = useScrollSpy(
        ["stories", "talent", "business", "culture", "diaspora", "video", "about"],
        140
    );

    const linkClass = (active: boolean) =>
        [
            "transition-colors",
            active ? "text-ink" : "text-muted hover:text-ink",
        ].join(" ");

    return (
        <header className="sticky top-0 z-50 border-b border-border glass">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="/" className="font-heading text-lg tracking-tight whitespace-nowrap">
                    <span className="font-bold">BOX18</span>{" "}
                    <span className="text-muted">Naija</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-5 text-sm">
                    {nav.map((item) => {
                        const isActive = item.href === pathname;
                        return (
                            <a key={item.label} href={item.href} className={linkClass(isActive)}>
                                {item.label}
                            </a>
                        );
                    })}

                    {/* Homepage-only section quicklinks (scroll spy) */}
                    {isHome && (
                        <div className="ml-3 pl-3 border-l border-border flex items-center gap-4">
                            {homeAnchors.slice(0, 3).map((a) => (
                                <a
                                    key={a.id}
                                    href={a.href}
                                    className={linkClass(spy === a.id)}
                                    title={a.label}
                                >
                                    {a.label}
                                </a>
                            ))}
                        </div>
                    )}
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
                    {nav.slice(0, 6).map((item) => (
                        <a key={item.label} href={item.href} className="whitespace-nowrap hover:text-ink">
                            {item.label}
                        </a>
                    ))}
                    {isHome &&
                        homeAnchors.slice(0, 2).map((a) => (
                            <a key={a.id} href={a.href} className="whitespace-nowrap hover:text-ink">
                                {a.label}
                            </a>
                        ))}
                </div>
            </div>

            {/* Search modal */}
            <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
        </header>
    );
}
