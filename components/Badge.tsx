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
                "inline-flex items-center rounded-full",
                // ✅ smaller + safer on mobile
                "px-2.5 py-1",
                // ✅ keep it crisp but not too wide
                "text-[10px] sm:text-[11px] font-bold uppercase",
                // ✅ reduce tracking so it doesn't expand too much
                "tracking-[0.08em]",
                // ✅ never force a single line wider than the card
                "max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
                "border",
                isNews
                    ? "bg-[hsl(var(--danger))] text-white border-[hsl(var(--danger))]"
                    : [
                        // ✅ light-only solid pill
                        "bg-[hsl(var(--card))] text-[hsl(var(--ink))] border-[hsl(var(--border))]",
                        // ✅ solid hover (no transparency)
                        "hover:bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))]",
                        "transition-colors",
                    ].join(" "),
            ].join(" ")}
            title={label}
        >
      {label}
    </span>
    );
}
