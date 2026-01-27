export default function VideoFeature() {
    return (
        <div id="watch" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
                <h2 className="font-heading text-2xl tracking-tight">Watch</h2>
                <p className="mt-2 text-sm text-ink/70">
                    Video is treated as a pillar — not an embedded afterthought.
                </p>

                <div className="mt-6 overflow-hidden rounded-3xl border border-divider shadow-soft">
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="BOX18 Feature Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-divider bg-paper p-6">
                <div className="text-xs tracking-widest text-muted">VIDEO NOTES</div>
                <h3 className="mt-3 font-heading text-xl tracking-tight">
                    Tomorrow’s demo: one featured film + two supporting clips.
                </h3>
                <p className="mt-3 text-sm text-ink/75">
                    After approval, we can evolve this into a full Video hub: playlists, categories, and featured series.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                    <a href="#" className="block hover:underline">• Football and street culture mini-doc</a>
                    <a href="#" className="block hover:underline">• Fans, chants, and community rituals</a>
                    <a href="#" className="block hover:underline">• Style influence: jerseys to runway</a>
                </div>
            </div>
        </div>
    );
}
