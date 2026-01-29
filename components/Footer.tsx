import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Brand column */}
                    <div className="md:col-span-5">
                        {/* Icon-only stamp */}
                        <a
                            href="/"
                            className="
    inline-flex h-14 w-14 items-center justify-center
    rounded-full border border-border
    bg-white dark:bg-white
    shadow-sm
  "
                            aria-label="BOX18 Naija home"
                        >
                            <Image
                                src="/brand/box18-mark.png"
                                alt=""
                                width={80}
                                height={80}
                                className="h-9 w-9 object-contain"
                            />
                        </a>



                        <p className="mt-4 text-sm text-muted max-w-sm">
                            We cover African football as culture infrastructure — where the game shapes sound,
                            style, identity, and the business of talent.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="md:col-span-3">
                        <div className="text-xs tracking-widest text-muted">SECTIONS</div>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <a className="text-muted hover:text-ink transition-colors" href="/stories">
                                    Stories
                                </a>
                            </li>
                            <li>
                                <a className="text-muted hover:text-ink transition-colors" href="/focus">
                                    Focus
                                </a>
                            </li>
                            <li>
                                <a className="text-muted hover:text-ink transition-colors" href="/video">
                                    Video
                                </a>
                            </li>
                            <li>
                                <a className="text-muted hover:text-ink transition-colors" href="/about">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Partners */}
                    <div className="md:col-span-4">
                        <div className="text-xs tracking-widest text-muted">PARTNERS</div>
                        <p className="mt-4 text-sm text-muted">
                            Want to sponsor a series or feature? We can package culture, football, and business
                            stories into premium campaigns.
                        </p>

                        <a
                            href="/#partner"
                            className="mt-5 inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white
              transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-95"
                            style={{
                                background:
                                    "linear-gradient(90deg, hsla(var(--accent) / 0.95), hsla(var(--accent2) / 0.95))",
                            }}
                        >
                            Contact / Sponsor →
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-6">
                    <div className="text-xs text-muted">© {new Date().getFullYear()} BOX18 Naija</div>
                    <div className="text-xs text-muted">
                        Built for clean editorial rhythm • fast, mobile-first
                    </div>
                </div>
            </div>
        </footer>
    );
}
