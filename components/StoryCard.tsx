import Image from "next/image";
import type { Story } from "@/lib/content";
import Badge from "./Badge";

export default function StoryCard({ story }: { story: Story }) {
    return (
        <article className="rounded-3xl border border-divider overflow-hidden bg-paper hover:shadow-soft transition-shadow">
            <div className="relative aspect-[16/10]">
                <Image src={story.image} alt={story.title} fill className="object-cover" />
            </div>
            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <Badge category={story.category} />
                    <span className="text-xs text-muted">{story.date}</span>
                </div>
                <h3 className="mt-3 font-heading text-xl leading-snug tracking-tight">
                    {story.title}
                </h3>
                <p className="mt-2 text-sm text-ink/75">{story.excerpt}</p>
                <div className="mt-4 text-xs text-muted">{story.author}</div>
            </div>
        </article>
    );
}
