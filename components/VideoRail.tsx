import Image from "next/image";
import LazyYouTube from "./LazyYouTube";
import { videoStories } from "@/lib/content";

export default function VideoRail() {
    const featured = videoStories[0];
    const nextUp = videoStories.slice(1, 4);

    return (
        <section id="video" className="card p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs text-muted">
                <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent2))]" />
                Community Watch Party
            </div>

            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="mt-2 font-heading text-2xl tracking-tight">Featured Video</h2>
                    {featured?.caption ? (
                        <p className="mt-2 text-sm text-muted max-w-2xl">{featured.caption}</p>
                    ) : null}
                </div>

                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white
          transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-95"
                    style={{
                        background:
                            "linear-gradient(90deg, hsla(var(--accent) / 0.95), hsla(var(--accent2) / 0.95))",
                    }}
                >
                    Join the Conversation →
                </a>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main video (lazy) */}
                <div className="lg:col-span-8">
                    {featured?.video?.youtubeId ? (
                        <LazyYouTube youtubeId={featured.video.youtubeId} title={featured.title} />
                    ) : (
                        <div className="aspect-video rounded-3xl border border-border grid place-items-center text-sm text-muted">
                            No featured video yet
                        </div>
                    )}

                    {/* Quiet meta under video */}
                    {featured ? (
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted">
              <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5">
                {featured.pillar.toUpperCase()}
              </span>
                            <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5">
                {featured.format.toUpperCase()}
              </span>
                            {featured.location ? <span>• {featured.location}</span> : null}
                            {featured.video?.duration ? <span>• {featured.video.duration}</span> : null}
                        </div>
                    ) : null}
                </div>

                {/* Next up (thumbnail list) */}
                <div className="lg:col-span-4">
                    <div className="text-xs tracking-widest text-muted">NEXT UP</div>

                    <div className="mt-3 space-y-3">
                        {nextUp.map((s) => (
                            <a
                                key={s.id}
                                href={s.href}
                                className="block rounded-2xl border border-border glass p-3 hover:opacity-95"
                            >
                                <div className="flex gap-3">
                                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-border">
                                        <Image
                                            src={s.image}
                                            alt={s.imageAlt ?? s.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        {s.video?.duration ? (
                                            <div className="absolute bottom-1 right-1 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
                                                {s.video.duration}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="min-w-0">
                                        <div className="font-medium text-ink line-clamp-2">{s.title}</div>
                                        <div className="mt-1 text-xs text-muted">
                                            {s.pillar} • {s.location ?? "—"} • Play →
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 sm:hidden inline-flex w-full justify-center items-center rounded-full px-5 py-3 text-sm font-medium text-white
        transition-all duration-200 ease-out"
                style={{
                    background:
                        "linear-gradient(90deg, hsla(var(--accent) / 0.95), hsla(var(--accent2) / 0.95))",
                }}
            >
                Join the Conversation on YouTube →
            </a>
        </section>
    );
}
