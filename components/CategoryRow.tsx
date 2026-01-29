import type { Story } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import StoryCard from "./StoryCard";

type Variant = "editorial" | "culture" | "video";

function pickVariant(story: Story): Variant {
    if (story.format === "Video") return "video";
    if (story.pillar === "Culture" || story.pillar === "Diaspora") return "culture";
    return "editorial";
}

export default function CategoryRow({
                                        id,
                                        title,
                                        subtitle,
                                        href,
                                        stories,
                                        variant, // optional override
                                    }: {
    id: string;
    title: string;
    subtitle?: string;
    href: string;
    stories: Story[];
    variant?: Variant;
}) {
    return (
        <section id={id}>
            <SectionHeader title={title} subtitle={subtitle} href={href} />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {stories.slice(0, 2).map((s) => (
                    <StoryCard key={s.id} story={s} variant={variant ?? pickVariant(s)} />
                ))}
            </div>
        </section>
    );
}
