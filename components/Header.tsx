import ThemeToggle from "./ThemeToggle";

const nav = [
    { label: "Home", href: "#top" },
    { label: "Football Events", href: "#events" },
    { label: "Talent Spotlight", href: "#talent" },
    { label: "Business", href: "#business" },
    { label: "Culture & Lifestyle", href: "#culture" },
    { label: "Diaspora Roots", href: "#diaspora" },
    { label: "Exclusives", href: "#exclusives" },
    { label: "Interviews", href: "#interviews" },
    { label: "Podcast", href: "#podcast" },
    { label: "About", href: "#about" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border glass">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="#top" className="font-heading text-lg tracking-tight whitespace-nowrap">
                    <span className="font-bold">BOX18</span>{" "}
                    <span className="text-muted">Naija</span>
                </a>

                {/* Nav */}
                <nav className="hidden lg:flex items-center gap-5 text-sm text-muted">
                    {nav.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="hover:text-ink transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Search (simple + premium; we can upgrade later) */}
                    <a
                        href="#search"
                        className="hidden sm:inline-flex items-center rounded-full border border-border glass px-4 py-2 text-sm text-muted hover:text-ink"
                    >
                        Search
                    </a>

                    <ThemeToggle />

                    <a
                        href="#partner"
                        className="inline-flex items-center rounded-full border border-[hsla(var(--accent)/0.35)] glass px-4 py-2 text-sm
                       transition-all duration-200 ease-out
                       hover:-translate-y-0.5 hover:shadow-glass hover:border-[hsla(var(--accent)/0.55)]
                       active:translate-y-0"
                    >
                        Partner
                    </a>
                </div>
            </div>

            {/* Mobile nav (minimal; premium) */}
            <div className="lg:hidden border-t border-border">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex gap-3 overflow-x-auto text-sm text-muted">
                    {nav.slice(0, 6).map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="whitespace-nowrap hover:text-ink"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
