import Image from "next/image";

export default function CultureStrip() {
    return (
        <div className="rounded-3xl border border-divider bg-paper overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative aspect-[16/9]">
                    <Image src="/images/culture.jpg" alt="Culture highlight" fill className="object-cover" />
                </div>

                <div className="lg:col-span-5 p-7 flex flex-col justify-between">
                    <div>
                        <div className="text-xs tracking-widest text-muted">CULTURE ENGINE</div>
                        <h3 className="mt-3 font-heading text-2xl tracking-tight">
                            Where the game becomes music, fashion, and identity.
                        </h3>
                        <p className="mt-3 text-sm text-ink/75">
                            BOX18 treats culture as a first-class pillar — not a sidebar. This is the difference.
                        </p>

                        <ul className="mt-5 space-y-2 text-sm">
                            <li className="flex gap-2"><span className="text-accent">●</span> Matchday chants → soundtracks</li>
                            <li className="flex gap-2"><span className="text-accent">●</span> Jerseys → streetwear codes</li>
                            <li className="flex gap-2"><span className="text-accent">●</span> Community → identity movement</li>
                        </ul>
                    </div>

                    <div className="mt-7">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-full border border-ink/20 px-5 py-2 text-sm hover:border-ink/40"
                        >
                            Explore Culture →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
