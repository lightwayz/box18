export default function VideoRail() {
    return (
        <section id="video" className="card p-6 sm:p-8">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <div className="text-xs tracking-widest text-muted">WATCH PARTY</div>
                    <h2 className="mt-2 font-heading text-2xl tracking-tight">Featured Video</h2>
                    <p className="mt-2 text-sm text-muted">
                        A multimedia anchor — video is treated as a pillar, not an afterthought.
                    </p>
                </div>

                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm hover:opacity-90"
                >
                    Join the Conversation →
                </a>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main video */}
                <div className="lg:col-span-8 overflow-hidden rounded-3xl border border-border">
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="BOX18 Featured Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Next up */}
                <div className="lg:col-span-4">
                    <div className="text-xs tracking-widest text-muted">NEXT UP</div>
                    <div className="mt-3 space-y-3">
                        {[
                            "Fans, chants, and community rituals",
                            "Jersey to streetwear — fashion codes",
                            "Business of academies and transfers",
                        ].map((t) => (
                            <a
                                key={t}
                                href="#"
                                className="block rounded-2xl border border-border glass p-4 text-sm hover:opacity-95"
                            >
                                <div className="font-medium text-ink">{t}</div>
                                <div className="mt-1 text-xs text-muted">Play →</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 sm:hidden inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm hover:opacity-90"
            >
                Join the Conversation →
            </a>
        </section>
    );
}
