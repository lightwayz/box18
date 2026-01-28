import type { Story } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import StoryCard from "./StoryCard";

export default function CategoryRow({
                                        id,
                                        title,
                                        subtitle,
                                        href,
                                        stories,
                                        variant = "editorial",
                                    }: {
    id: string;
    title: string;
    subtitle?: string;
    href: string;
    stories: Story[];
    variant?: "editorial" | "culture" | "video";
}) {
    return (
        <section id={id}>
            <SectionHeader title={title} subtitle={subtitle} href={href} />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {stories.slice(0, 2).map((s) => (
                    <StoryCard key={s.id} story={s} variant={variant} />
                ))}
            </div>
        </section>
    );
}
