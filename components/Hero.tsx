// noinspection HtmlUnknownAnchorTarget

import { focusStory } from "@/lib/content";

const pillars = ["Football", "Culture", "Business", "Tech", "Diaspora", "Talent"] as const;

export default function Hero() {
    const chips = [...pillars.slice(0, 4)];
    const topicChips = (focusStory.topics ?? []).slice(0, 2);

    return (
        <div className="bg-ambient pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
                <div className="max-w-3xl">
                    <h1 className="font-heading text-4xl sm:text-6xl leading-[1.05] tracking-tight text-ink">
                        African Football, <span className="accent-underline">Beyond the Pitch</span>.
                    </h1>

                    <p className="mt-5 text-lg text-muted">
                        Premium editorial stories where football meets culture, business, technology, and diaspora life.
                    </p>

                    {/* Foxiz-style chips */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        {chips.map((t) => (
                            <span
                                key={t}
                                className="
                  inline-flex items-center rounded-full
                  px-4 py-2 text-[13px] sm:text-sm
                  chip
                  hover:bg-surface transition-colors
                "
                            >
                {t}
              </span>
                        ))}

                        {topicChips.map((t) => (
                            <span
                                key={t}
                                className="
                  inline-flex items-center rounded-full
                  px-4 py-2 text-[13px] sm:text-sm
                  chip
                  hover:bg-surface transition-colors
                "
                            >
                {t}
              </span>
                        ))}

                        {/* Foxiz CTA (yellow pill) */}
                        <a
                            href="#focus"
                            className="
                inline-flex items-center rounded-full
                px-5 py-2 text-[13px] sm:text-sm font-bold
                bg-accent text-primary border border-border
                hover:-translate-y-0.5 transition
              "
                        >
                            Read today’s Focus →
                        </a>
                    </div>
                </div>

                {/* Lighter divider like Foxiz */}
                <div className="mt-10 border-t border-border/70" />
            </div>
        </div>
    );
}
