export default function Badge({
                                  label,
                                  variant = "pillar",
                              }: {
    label: string;
    variant?: "pillar" | "news";
}) {
    const isNews = variant === "news";

    return (
        <span
            className={[
                "inline-flex items-center rounded-full px-3 py-1",
                "text-[11px] font-bold tracking-wider uppercase",
                "border transition-colors",
                isNews
                    ? "bg-[hsl(var(--danger))] text-white border-[hsl(var(--danger))]"
                    : [
                        // ✅ readable in BOTH modes
                        "bg-white text-ink border-border",
                        "dark:bg-card dark:text-ink dark:border-border",
                        // ✅ hover feedback
                        "hover:bg-surface hover:border-[hsl(var(--accent))]/40",
                        "dark:hover:bg-surface dark:hover:border-[hsl(var(--accent))]/35",
                    ].join(" "),
            ].join(" ")}
        >
      {label}
    </span>
    );
}
