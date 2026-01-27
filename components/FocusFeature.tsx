import Image from "next/image";
import type { Story } from "@/lib/content";
import Badge from "./Badge";

export default function FocusFeature({ story }: { story: Story }) {
    return (
        <div id="focus" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-divider shadow-soft">
                <div className="relative aspect-[16/10]">
                    <Image src={story.image} alt={story.title} fill className="object-cover" priority />
                </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                    <Badge category={story.category} />
                    <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight">
                        {story.title}
                    </h2>
                    <p className="mt-4 text-ink/80">{story.excerpt}</p>

                    <div className="mt-6 text-sm text-muted">
                        {story.date} · {story.author}
                    </div>
                </div>

                <div className="mt-8">
                    <a
                        href={story.href}
                        className="inline-flex items-center rounded-full bg-accent text-paper px-5 py-2 text-sm font-medium hover:opacity-90"
                    >
                        Read Feature
                    </a>
                </div>
            </div>
        </div>
    );
}
