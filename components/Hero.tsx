// noinspection HtmlUnknownAnchorTarget

import { focusStory } from "@/lib/content";

const pillars = ["Football", "Culture", "Business", "Tech", "Diaspora", "Talent"] as const;

export default function Hero() {
    const chips = [
        ...pillars.slice(0, 4), // keep it quiet: show 4 only
    ];

    // take up to 2 topics from a focus story (if available)
    const topicChips = (focusStory.topics ?? []).slice(0, 2);

    return (
        <div className="bg-ambient">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
                <div className="max-w-3xl">
                    <h1 className="font-heading text-4xl sm:text-6xl leading-[1.05] tracking-tight">
                        African Football, <span className="accent-underline">Beyond the Pitch</span>.
                    </h1>

                    <p className="mt-5 text-lg text-muted">
                        Premium editorial stories where football meets culture, business, technology, and diaspora life.
                    </p>

                    {/* ✅ Curated chips (no repeats, no noise) */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        {chips.map((t) => (
                            <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm text-muted"
                            >
                {t}
              </span>
                        ))}

                        {/* ✅ Story-led chips (topics) */}
                        {topicChips.map((t) => (
                            <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-muted bg-transparent"
                            >
                {t}
              </span>
                        ))}

                        <a
                            href="#focus"
                            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-ink"
                            style={{
                                background:
                                    "linear-gradient(90deg, hsla(var(--accent) / 0.22), hsla(var(--accent2) / 0.22))",
                                border: "1px solid hsla(var(--border) / 0.8)",
                            }}
                        >
                            Read today’s Focus →
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-border" />
            </div>
        </div>
    );
}
