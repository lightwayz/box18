import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import StoryCard from "@/components/StoryCard";
import { categories } from "@/lib/content";

const meta: Record<string, { title: string; subtitle: string; variant: "editorial" | "culture" }> = {
    talent: {
        title: "Talent Spotlight",
        subtitle: "Profiles, pathways, and the next wave.",
        variant: "editorial",
    },
    business: {
        title: "Business",
        subtitle: "Money flow, academies, transfers, and deals.",
        variant: "editorial",
    },
    culture: {
        title: "Culture & Lifestyle",
        subtitle: "Jerseys, streetwear, sound, and identity.",
        variant: "culture",
    },
    diaspora: {
        title: "Diaspora Roots",
        subtitle: "Football as memory, belonging, and movement.",
        variant: "culture",
    },
};

export default function CategoryPage({
                                         params,
                                     }: {
    params: { slug: string };
}) {
    const slug = params.slug;
    const cfg = meta[slug];

    if (!cfg || !(slug in categories)) {
        return (
            <>
                <Header />
                <main>
                    <PageHeader title="Category Not Found" subtitle="This category does not exist yet." />
                    <Section>
                        <div className="card p-6">
                            <p className="text-muted">Try: /category/talent, /category/business, /category/culture, /category/diaspora</p>
                        </div>
                    </Section>
                </main>
                <Footer />
            </>
        );
    }

    const list = (categories as any)[slug] as any[];

    return (
        <>
            <Header />
            <main>
                <PageHeader title={cfg.title} subtitle={cfg.subtitle} />
                <Section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {list.map((story) => (
                            <StoryCard key={story.id} story={story} variant={cfg.variant} />
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
