// noinspection HtmlUnknownAnchorTarget

import Image from "next/image";
import type { Story } from "@/lib/content";
import Badge from "./Badge";

export default function HeroCard({ story }: { story: Story }) {
    const isVideo = story.format === "Video";

    return (
        <section className="card overflow-hidden relative">
            <div className="relative aspect-[21/9] min-h-[320px]">
                <Image
                    src={story.image}
                    alt={story.imageAlt ?? story.title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Strong readability layer (works in BOTH modes) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />

                {/* Subtle brand wash (Foxiz-ish) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(700px 360px at 18% 15%, hsla(var(--accent) / 0.18), transparent 60%)",
                    }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge label="News" variant="news" />
                        <span className="text-xs text-white/75">{story.date}</span>

                        <span className="text-xs text-white/60">
              • {story.format}
                            {story.location ? ` • ${story.location}` : ""}
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 font-heading text-3xl sm:text-5xl leading-[1.05] tracking-tight text-white">
                        {story.title}
                    </h2>

                    {/* Caption */}
                    {story.caption ? (
                        <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
                            {story.caption}
                        </p>
                    ) : null}

                    {/* CTAs (close together, always visible) */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        {/* PRIMARY (Foxiz yellow pill) */}
                        <a
                            href={story.href}
                            className={[
                                "inline-flex items-center rounded-full px-5 py-2 text-sm font-bold",
                                "bg-[hsl(var(--accent))] text-[hsl(var(--primary))]",
                                "border border-white/10",
                                "transition-all hover:-translate-y-0.5 hover:brightness-105",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70",
                                "focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
                            ].join(" ")}
                        >
                            {isVideo ? "Watch Feature →" : "Read Feature →"}
                        </a>

                        {/* SECONDARY (outline, readable always) */}
                        <a
                            href="#stories"
                            className={[
                                "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold",
                                "bg-white/10 text-white border border-white/25",
                                "transition hover:bg-white/15 hover:border-white/40",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                                "focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
                            ].join(" ")}
                        >
                            Browse Stories
                        </a>

                        {/* Optional topics text */}
                        {story.topics?.length ? (
                            <span className="text-xs text-white/60">
                • {story.topics.slice(0, 3).join(" • ")}
              </span>
                        ) : null}
                    </div>

                    <div className="mt-4 text-xs text-white/70">{story.author}</div>
                </div>
            </div>
        </section>
    );
}
