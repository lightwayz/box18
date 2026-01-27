export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-divider">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <a href="#" className="font-heading text-lg tracking-tight">
                    <span className="font-bold">BOX18</span> <span className="text-muted">Naija</span>
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm text-ink/80">
                    <a className="hover:text-ink" href="#stories">Stories</a>
                    <a className="hover:text-ink" href="#focus">Focus</a>
                    <a className="hover:text-ink" href="#watch">Video</a>
                    <a className="hover:text-ink" href="#about">About</a>
                    <a className="hover:text-ink" href="#search">Search</a>
                </nav>

                <a
                    href="#partner"
                    className="inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-sm hover:border-ink/40"
                >
                    Partner
                </a>
            </div>
        </header>
    );
}
