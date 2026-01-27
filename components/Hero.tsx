export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
            <div className="max-w-3xl">
                <h1 className="font-heading text-4xl sm:text-6xl leading-[1.05] tracking-tight">
                    African Football, <span className="underline decoration-accent/40">Beyond the Pitch</span>.
                </h1>
                <p className="mt-5 text-lg text-ink/80">
                    Premium editorial stories on culture, music, fashion, community, and the business shaping the game.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                    {["Culture", "Football", "Business"].map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-divider bg-paper px-4 py-2 text-sm text-ink/80"
                        >
              {t}
            </span>
                    ))}
                    <a
                        href="#focus"
                        className="inline-flex items-center rounded-full bg-ink text-paper px-5 py-2 text-sm hover:opacity-90"
                    >
                        Read today’s Focus
                    </a>
                </div>
            </div>

            <div className="mt-10 border-t border-divider" />
        </div>
    );
}
