"use client";

import { useState } from "react";

export default function LazyYouTube({
                                        youtubeId,
                                        title,
                                    }: {
    youtubeId: string;
    title: string;
}) {
    const [play, setPlay] = useState(false);
    const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border">
            {!play ? (
                <button
                    type="button"
                    onClick={() => setPlay(true)}
                    className="group absolute inset-0"
                    aria-label={`Play ${title}`}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={thumb} alt={title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition" />
                    <div className="absolute inset-0 grid place-items-center">
                        <div className="rounded-full border border-white/40 bg-black/30 px-5 py-3 text-sm text-white">
                            ▶ Play
                        </div>
                    </div>
                </button>
            ) : (
                <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
}
