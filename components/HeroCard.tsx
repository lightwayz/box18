// noinspection HtmlUnknownAnchorTarget

import Image from "next/image";
import type { Story } from "@/lib/content";
import Badge from "./Badge";

export default function HeroCard({ story }: { story: Story }) {
    return (
        <section className="card overflow-hidden relative">
            <div className="relative aspect-[21/9] min-h-[320px]">
                <Image src={story.image} alt={story.title} fill className="object-cover" priority />

                {/* Versus-like heavy gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Apple-ish ambient glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(700px 350px at 20% 20%, hsla(var(--accent) / 0.22), transparent 60%)",
                    }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                    <div className="flex items-center gap-3">
                        <Badge category={story.category} />
                        <span className="text-xs text-white/75">{story.date}</span>
                    </div>

                    <h2 className="mt-4 font-heading text-3xl sm:text-5xl leading-[1.05] tracking-tight text-white">
                        {story.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
                        {story.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                        <a
                            href={story.href}
                            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white
                         transition-all hover:-translate-y-0.5 hover:opacity-95"
                            style={{
                                background:
                                    "linear-gradient(90deg, hsla(var(--accent) / 0.85), hsla(var(--accent2) / 0.85))",
                            }}
                        >
                            Read Feature →
                        </a>

                        <a
                            href="#stories"
                            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white/90
                         border border-white/25 hover:border-white/40"
                        >
                            Browse Stories
                        </a>
                    </div>

                    <div className="mt-4 text-xs text-white/70">{story.author}</div>
                </div>
            </div>
        </section>
    );
}
