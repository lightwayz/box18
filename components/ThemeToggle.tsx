"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

function SunIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
            <path
                d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M21 13.2A8.5 8.5 0 0 1 10.8 3 7 7 0 1 0 21 13.2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const current = useMemo(() => {
        if (!mounted) return "light";
        return theme === "system" ? (systemTheme ?? "light") : theme;
    }, [mounted, theme, systemTheme]);

    const isDark = current === "dark";

    if (!mounted) return <div className="w-10 h-10" />;

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={[
                // size + shape
                "inline-flex items-center justify-center w-10 h-10 rounded-full",
                // Foxiz-like subtle outline on navy
                "border border-white/20",
                // make it readable on the header (navy) in both modes
                "bg-white/10 text-white",
                "hover:bg-white/15 hover:border-white/30",
                "transition",
                // focus matches your tokens
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
            ].join(" ")}
        >
            {/* On a navy header: show the *next* mode icon (common UX) */}
            {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
