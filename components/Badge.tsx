import type { StoryCategory } from "@/lib/content";

const map: Record<StoryCategory, string> = {
    Focus: "border-accent text-accent",
    Football: "border-ink/20 text-ink",
    Culture: "border-ink/20 text-ink",
    Business: "border-ink/20 text-ink",
    Video: "border-accent text-accent",
};

export default function Badge({ category }: { category: StoryCategory }) {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${map[category]}`}
        >
      {category.toUpperCase()}
    </span>
    );
}
