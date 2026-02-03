// noinspection HtmlUnknownAnchorTarget

import { focusStory } from "@/lib/content";

export default function Hero() {
    return (
        <div className="pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
                <div className="max-w-3xl">
                    <h1 className="font-heading text-4xl sm:text-6xl leading-[1.05] tracking-tight text-ink">
                        African Football, <span className="accent-underline">Beyond the Pitch</span>.
                    </h1>

                    <p className="mt-5 text-lg text-muted">
                        Premium editorial stories where football meets culture, business, technology, and diaspora life.
                    </p>

                    {/* Single CTA only (no chips to avoid repetition with header) */}
                    <div className="mt-7">
                        <a
                            href={focusStory?.href ?? "#focus"}
                            className={[
                                "inline-flex items-center rounded-full",
                                "px-5 py-2 text-sm font-bold",
                                "bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))]",
                                "border border-[hsl(var(--border))]",
                                "hover:-translate-y-0.5 transition",
                            ].join(" ")}
                        >
                            Read today’s Focus →
                        </a>
                    </div>
                </div>

                {/* Solid divider */}
                <div className="mt-10 border-t border-[hsl(var(--border))]" />
            </div>
        </div>
    );
}
