import Image from "next/image";
import Badge from "./Badge";
import type { Story } from "@/lib/content";

type Variant = "editorial" | "culture" | "video";

export default function StoryCard({
                                      story,
                                      variant = "editorial",
                                  }: {
    story: Story;
    variant?: Variant;
}) {
    const frame =
        variant === "culture"
            ? "card overflow-hidden relative ring-1 ring-[hsla(var(--accent2)/0.25)]"
            : "card overflow-hidden relative";

    const headerOverlay =
        variant === "video"
            ? "bg-gradient-to-t from-black/65 via-black/10 to-transparent"
            : "bg-gradient-to-t from-black/55 via-black/10 to-transparent";

    return (
        <article className={`transition-all hover:-translate-y-0.5 hover:shadow-soft ${frame}`}>
            {/* Image */}
            <div className="relative aspect-[16/10]">
                <Image src={story.image} alt={story.imageAlt ?? story.title} fill className="object-cover" />

                {/* Overlay for premium text legibility */}
                <div className={`absolute inset-0 ${headerOverlay}`} />

                {/* Culture accent strip (OkayAfrica-ish) */}
                {variant === "culture" && (
                    <div
                        className="absolute left-4 top-4 h-1.5 w-14 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, hsla(var(--accent) / 0.9), hsla(var(--accent2) / 0.9))",
                        }}
                    />
                )}

                {/* Video play badge */}
                {variant === "video" && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium glass">
                        <span className="text-[hsl(var(--accent2))]">▶</span>
                        <span className="text-muted">Watch</span>
                        {story.video?.duration ? <span className="text-muted">• {story.video.duration}</span> : null}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    {/* ✅ Pillar is the identity badge */}
                    <Badge label={story.pillar} />
                    <span className="text-xs text-muted">{story.date}</span>
                </div>

                {/* ✅ Quiet meta line: FORMAT + location (no noise) */}
                <div className="mt-2 flex items-center gap-2 text-[11px] text-muted">
          <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5">
            {story.format.toUpperCase()}
          </span>
                    {story.location ? <span>• {story.location}</span> : null}
                </div>

                <h3 className="mt-3 font-heading text-xl leading-snug tracking-tight">
                    {story.title}
                </h3>

                {/* ✅ Caption replaces excerpt; clamp to keep it clean */}
                {story.caption ? (
                    <p className="mt-2 text-sm text-muted line-clamp-2">{story.caption}</p>
                ) : null}

                <div className="mt-4 text-xs text-muted">{story.author}</div>
            </div>
        </article>
    );
}
