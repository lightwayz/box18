"use client";

import { useEffect, useMemo, useState } from "react";
import { allStories } from "@/lib/content";

export default function SearchModal({
                                        open,
                                        onCloseAction,
                                    }: {
    open: boolean;
    onCloseAction: () => void;
}) {
    const [q, setQ] = useState("");

    useEffect(() => {
        if (!open) return;

        setQ("");

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseAction();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onCloseAction]);

    const results = useMemo(() => {
        const query = q.trim().toLowerCase();
        if (!query) return [];

        return allStories.filter((s) => {
            const haystack = [
                s.title,
                s.caption ?? "",
                s.pillar,
                s.format,
                s.location ?? "",
                s.author,
                ...(s.topics ?? []),
            ]
                .join(" ")
                .toLowerCase();

            return haystack.includes(query);
        });
    }, [q]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[60]">
            {/* Backdrop (Foxiz: clean overlay, not glass) */}
            <button
                className="absolute inset-0 bg-black/55 dark:bg-black/70"
                aria-label="Close search"
                onClick={onCloseAction}
            />

            {/* Panel */}
            <div className="relative max-w-3xl mx-auto mt-20 sm:mt-24 px-4 sm:px-6">
                <div
                    className={[
                        "rounded-3xl overflow-hidden",
                        // ✅ consistent surface in light + dark
                        "glass",
                    ].join(" ")}
                >
                    {/* Header */}
                    <div className="p-5 sm:p-6 border-b border-border flex items-center gap-3">
                        <span className="text-muted text-sm">Search</span>

                        <input
                            autoFocus
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search football, diaspora, video, academies…"
                            className={[
                                "w-full rounded-xl px-3 py-2 text-sm sm:text-base outline-none",
                                // ✅ no bg-white; always token-driven
                                "bg-bg border border-border text-ink placeholder:text-muted",
                                "focus:ring-2 focus:ring-accent focus:border-primary/40",
                                "dark:bg-surface dark:border-border dark:focus:border-accent/40",
                            ].join(" ")}
                        />

                        <button
                            onClick={onCloseAction}
                            className={[
                                "rounded-full px-3 py-1 text-xs font-semibold border transition",
                                // ✅ token-driven; consistent in both modes
                                "bg-surface border-border text-muted hover:text-ink",
                            ].join(" ")}
                            title="Press Esc"
                        >
                            Esc
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-6">
                        {!q.trim() ? (
                            <div className="text-sm text-muted">
                                Try: <span className="text-ink">diaspora</span>,{" "}
                                <span className="text-ink">video</span>,{" "}
                                <span className="text-ink">academy</span>
                            </div>
                        ) : results.length === 0 ? (
                            <div className="text-sm text-muted">No results found.</div>
                        ) : (
                            <div className="divide-y divide-border rounded-2xl border border-border overflow-hidden bg-card">
                                {results.slice(0, 8).map((r) => (
                                    <a
                                        key={r.id}
                                        href={r.href}
                                        onClick={onCloseAction}
                                        className={[
                                            "block p-4 transition-colors",
                                            // ✅ token-driven hover in both modes
                                            "bg-card hover:bg-surface",
                                        ].join(" ")}
                                    >
                                        <div className="text-xs text-muted">
                                            {r.pillar} • {r.format}
                                            {r.location ? ` • ${r.location}` : ""}
                                        </div>

                                        <div className="mt-1 font-heading text-lg tracking-tight text-ink">
                                            {r.title}
                                        </div>

                                        {r.caption ? (
                                            <div className="mt-1 text-sm text-muted line-clamp-2">
                                                {r.caption}
                                            </div>
                                        ) : null}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-5 sm:px-6 py-4 border-t border-border text-xs text-muted">
                        Tip: Press <span className="text-ink">Esc</span> to close.
                    </div>
                </div>
            </div>
        </div>
    );
}
