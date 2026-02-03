// components/HeroCard.tsx
// noinspection HtmlUnknownAnchorTarget

import Image from "next/image";
import type { Story } from "@/lib/content";
import Badge from "./Badge";

export default function HeroCard({
                                     story,
                                     showNewsBadge = true,
                                 }: {
    story: Story;
    showNewsBadge?: boolean;
}) {
    const isVideo = story.format === "Video";

    return (
        <section className="rounded-2xl overflow-hidden">
            {/* Image only (keeps your 21:9 hero look) */}
            <div className="relative aspect-[21/9] min-h-[320px]">
                <Image
                    src={story.image}
                    alt={story.imageAlt ?? story.title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Optional: add readability overlay on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Text block (now can expand fully) */}
            <div className="bg-black border-t border-black w-full">
                <div className="p-6 sm:p-10 min-w-0 w-full">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 min-w-0">
                        {showNewsBadge ? <Badge label="News" variant="news" /> : null}
                        <span className="text-xs text-white/90 shrink-0">{story.date}</span>

                        <span className="text-xs text-white/80 min-w-0 flex-1 whitespace-normal break-words [overflow-wrap:anywhere]">
              • {story.format}
                            {story.location ? ` • ${story.location}` : ""}
            </span>
                    </div>

                    <h2 className="hero-title mt-4 font-heading text-3xl sm:text-5xl leading-[1.05] tracking-tight text-white">
                        {story.title}
                    </h2>

                    {story.caption ? (
                        <p className="mt-4 block w-full min-w-0 max-w-2xl text-sm sm:text-base text-white/90 whitespace-normal break-words [overflow-wrap:anywhere]">
                            {story.caption}
                        </p>
                    ) : null}

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            href={story.href}
                            className={[
                                "inline-flex items-center rounded-full px-5 py-2 text-sm font-bold",
                                "bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))]",
                                "border border-black",
                                "transition hover:-translate-y-0.5",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
                                "focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                            ].join(" ")}
                        >
                            {isVideo ? "Watch Feature →" : "Read Feature →"}
                        </a>
                    </div>

                    <div className="mt-4 text-xs text-white/80 break-words">{story.author}</div>
                </div>
            </div>
        </section>
    );
}
