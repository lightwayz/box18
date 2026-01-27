"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-10 h-10" />;

    const current = theme === "system" ? systemTheme : theme;
    const isDark = current === "dark";

    return (
        <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border glass hover:opacity-90"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            <span className="text-sm">{isDark ? "☀️" : "🌙"}</span>
        </button>
    );
}
