import Image from "next/image";
import type { Story } from "@/lib/content";
import Badge from "./Badge";

export default function FocusFeature({ story }: { story: Story }) {
    const isVideo = story.format === "Video";

    return (
        <div id="focus" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-border shadow-soft">
                <div className="relative aspect-[16/10]">
                    <Image
                        src={story.image}
                        alt={story.imageAlt ?? story.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between min-w-0">
                <div className="min-w-0">
                    <Badge label="News" variant="news" />

                    <div className="mt-3 text-xs text-muted break-words">
                        {story.format}
                        {story.location ? ` • ${story.location}` : ""} • {story.date}
                    </div>

                    {/* ✅ FORCE WRAP + prevent overflow */}
                    <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight !whitespace-normal !break-words max-w-full overflow-hidden">
                        {story.title}
                    </h2>

                    {story.caption ? (
                        <p className="mt-4 text-ink whitespace-normal break-words">
                            {story.caption}
                        </p>
                    ) : null}

                    <div className="mt-6 text-sm text-muted break-words">{story.author}</div>
                </div>

                <div className="mt-8">
                    <a
                        href={story.href}
                        className="inline-flex items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))] px-5 py-2 text-sm font-bold border border-border hover:brightness-95 transition"
                    >
                        {isVideo ? "Watch Feature" : "Read Feature"}
                    </a>
                </div>
            </div>
        </div>
    );
}
