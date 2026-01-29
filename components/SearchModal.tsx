"use client";

import { useEffect, useMemo, useState } from "react";
import { allStories } from "@/lib/content";

export default function SearchModal({
                                        open,
                                        onClose,
                                    }: {
    open: boolean;
    onClose: () => void;
}) {
    const [q, setQ] = useState("");

    useEffect(() => {
        if (!open) return;
        setQ("");
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

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
            {/* Backdrop */}
            <button
                className="absolute inset-0 bg-black/40"
                aria-label="Close search"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="relative max-w-3xl mx-auto mt-24 px-4 sm:px-6">
                <div className="glass rounded-3xl border border-border shadow-glass overflow-hidden">
                    <div className="p-5 sm:p-6 border-b border-border flex items-center gap-3">
                        <span className="text-muted text-sm">Search</span>
                        <input
                            autoFocus
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search football, diaspora, video, academies…"
                            className="w-full bg-transparent outline-none text-ink placeholder:text-muted text-sm sm:text-base"
                        />
                        <button
                            onClick={onClose}
                            className="rounded-full border border-border glass px-3 py-1 text-xs text-muted hover:text-ink"
                        >
                            Esc
                        </button>
                    </div>

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
                            <div className="space-y-3">
                                {results.slice(0, 8).map((r) => (
                                    <a
                                        key={r.id}
                                        href={r.href}
                                        className="block rounded-2xl border border-border glass p-4 hover:opacity-95"
                                        onClick={onClose}
                                    >
                                        <div className="text-xs text-muted">
                                            {r.pillar} • {r.format}
                                            {r.location ? ` • ${r.location}` : ""}
                                        </div>

                                        <div className="mt-1 font-heading text-lg tracking-tight">
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

                    <div className="px-5 sm:px-6 py-4 border-t border-border text-xs text-muted">
                        Tip: Press <span className="text-ink">Esc</span> to close.
                    </div>
                </div>
            </div>
        </div>
    );
}
