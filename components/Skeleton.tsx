export function Skeleton({ className = "" }: { className?: string }) {
    return (
        <div
            className={[
                "animate-pulse rounded-2xl bg-[hsla(var(--border)/0.55)]",
                className,
            ].join(" ")}
        />
    );
}
