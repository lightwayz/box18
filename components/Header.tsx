import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border glass">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <a href="#" className="font-heading text-lg tracking-tight">
                    <span className="font-bold">BOX18</span>{" "}
                    <span className="text-muted">Naija</span>
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
                    {["Stories", "Focus", "Video", "About", "Search"].map((t) => (
                        <a
                            key={t}
                            href={`#${t.toLowerCase()}`}
                            className="hover:text-ink transition-colors"
                        >
                            {t}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="#partner"
                        className="inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm hover:opacity-90"
                    >
                        Partner
                    </a>
                </div>
            </div>
        </header>
    );
}
