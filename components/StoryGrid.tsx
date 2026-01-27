import type { Story } from "@/lib/content";
import StoryCard from "./StoryCard";

export default function StoryGrid({ stories }: { stories: Story[] }) {
    return (
        <div id="stories">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="font-heading text-2xl tracking-tight">Top Stories</h2>
                    <p className="mt-1 text-sm text-ink/70">
                        A clean editorial rhythm — football, culture, business, and community.
                    </p>
                </div>
                <a href="#" className="text-sm text-ink/70 hover:text-ink">
                    View all →
                </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stories.map((s) => (
                    <StoryCard key={s.id} story={s} />
                ))}
            </div>
        </div>
    );
}
