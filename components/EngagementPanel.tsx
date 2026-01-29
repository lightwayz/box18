"use client";

import { trending } from "@/lib/content";

export default function EngagementPanel() {
    return (
        <aside className="card p-6 sm:p-7">
            <div className="text-xs tracking-widest text-muted">TRENDING</div>

            <div className="mt-3 flex flex-wrap gap-2">
                {trending.map((t) => (
                    <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-border glass px-3 py-1 text-xs text-muted"
                    >
            {t}
          </span>
                ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
                <div className="text-xs tracking-widest text-muted">NEWSLETTER</div>
                <h3 className="mt-3 font-heading text-lg tracking-tight">
                    Get the best of BOX18 weekly.
                </h3>
                <p className="mt-2 text-sm text-muted">
                    Culture, talent, and business—curated in one email.
                </p>

                <form
                    className="mt-4 flex gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Newsletter hooked for demo. Connect later.");
                    }}
                >
                    <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full rounded-full border border-border bg-[hsl(var(--card))] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[hsla(var(--ring)/0.45)]"
                    />

                    <button
                        type="submit"
                        className="rounded-full px-4 py-2 text-sm font-medium text-white"
                        style={{
                            background:
                                "linear-gradient(90deg, hsla(var(--accent) / 0.9), hsla(var(--accent2) / 0.9))",
                        }}
                    >
                        Join
                    </button>
                </form>
                <div className="mt-4 text-sm text-muted">
                    Join our Telegram for early drops, behind-the-scenes stories, and community discussions.
                </div>

                <a
                    href="https://t.me/box18naija"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center rounded-full border border-[hsla(var(--accent)/0.35)] glass px-4 py-2 text-sm hover:opacity-95"
                >
                    Join Telegram →
                </a>

                <div className="mt-8 border-t border-border pt-6">
                    <div className="text-xs tracking-widest text-muted">FOLLOW</div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {[
                            { label: "X", href: "https://x.com" },
                            { label: "Instagram", href: "https://instagram.com" },
                            { label: "YouTube", href: "https://youtube.com" },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm text-muted hover:text-ink"
                            >
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>


                <div className="mt-4 text-xs text-muted">No spam. Cancel anytime.</div>
            </div>
        </aside>
    );
}
