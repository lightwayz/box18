import type { StoryCategory } from "@/lib/content";

const styleMap: Record<StoryCategory, string> = {
    Focus: "border-[hsla(var(--accent)/0.5)] text-[hsl(var(--accent))] bg-[hsla(var(--accent)/0.08)]",
    Video: "border-[hsla(var(--accent2)/0.55)] text-[hsl(var(--accent2))] bg-[hsla(var(--accent2)/0.08)]",
    Football: "border-border text-muted bg-transparent",
    Culture: "border-border text-muted bg-transparent",
    Business: "border-border text-muted bg-transparent",
};

export default function Badge({ category }: { category: StoryCategory }) {
    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styleMap[category]}`}>
      {category.toUpperCase()}
    </span>
    );
}
