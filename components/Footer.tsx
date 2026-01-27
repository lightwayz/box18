export default function Footer() {
    return (
        <footer className="border-t border-divider">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-5" id="about">
                    <div className="font-heading text-lg">
                        <span className="font-bold">BOX18</span> <span className="text-muted">Naija</span>
                    </div>
                    <p className="mt-3 text-sm text-ink/75">
                        We cover African football as culture infrastructure — where the game shapes sound, style,
                        identity, and the business of talent.
                    </p>
                </div>

                <div className="md:col-span-3">
                    <div className="text-xs tracking-widest text-muted">SECTIONS</div>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a className="hover:underline" href="#stories">Stories</a></li>
                        <li><a className="hover:underline" href="#focus">Focus</a></li>
                        <li><a className="hover:underline" href="#watch">Video</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4" id="partner">
                    <div className="text-xs tracking-widest text-muted">PARTNERS</div>
                    <p className="mt-3 text-sm text-ink/75">
                        Want to sponsor a series or feature? We can package culture, football, and business stories
                        into premium campaigns.
                    </p>
                    <a
                        className="mt-4 inline-flex items-center rounded-full bg-ink text-paper px-5 py-2 text-sm hover:opacity-90"
                        href="#"
                    >
                        Contact / Sponsor
                    </a>
                </div>
            </div>

            <div className="border-t border-divider">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-xs text-muted flex justify-between">
                    <span>© {new Date().getFullYear()} BOX18 Naija</span>
                    <span>Built for editorial clarity</span>
                </div>
            </div>
        </footer>
    );
}
