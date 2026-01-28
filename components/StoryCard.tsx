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
                <Image src={story.image} alt={story.title} fill className="object-cover" />

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
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <Badge category={story.category} />
                    <span className="text-xs text-muted">{story.date}</span>
                </div>

                <h3 className="mt-3 font-heading text-xl leading-snug tracking-tight">
                    {story.title}
                </h3>

                <p className="mt-2 text-sm text-muted">{story.excerpt}</p>

                <div className="mt-4 text-xs text-muted">{story.author}</div>
            </div>
        </article>
    );
}
