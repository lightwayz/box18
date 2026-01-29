import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import HeroCard from "@/components/HeroCard";
import StoryGrid from "@/components/StoryGrid";
import CategoryRow from "@/components/CategoryRow";
import EngagementPanel from "@/components/EngagementPanel";
import CultureStrip from "@/components/CultureStrip";
import VideoRail from "@/components/VideoRail";
import Footer from "@/components/Footer";

import { curate } from "@/lib/curation";
import { focusStory, topStories, categories } from "@/lib/content";
import { homeJsonLd } from "@/lib/Seo";

export default function HomePage() {
    const jsonLd = homeJsonLd();

    const curatedTopStories = curate(topStories, {
        rowSize: 4,
        maxSamePillarInRow: 2,
        aboveFoldCount: 8,
        maxSamePillarAboveFold: 3,
        minVideosAboveFold: 1,
    });

    const curated = {
        talent: curate(categories.talent, { rowSize: 2, maxSamePillarInRow: 1 }),
        business: curate(categories.business, { rowSize: 2, maxSamePillarInRow: 1 }),
        tech: curate(categories.tech, { rowSize: 2, maxSamePillarInRow: 1 }),
        culture: curate(categories.culture, { rowSize: 2, maxSamePillarInRow: 1 }),
        diaspora: curate(categories.diaspora, { rowSize: 2, maxSamePillarInRow: 1 }),
    };

    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />

            <main id="top">
                <Hero />

                <Section>
                    <div id="focus">
                        <HeroCard story={focusStory} />
                    </div>
                </Section>

                <Section>
                    <StoryGrid stories={curatedTopStories} />
                </Section>

                <Section>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        <div className="space-y-12 lg:col-span-8">
                            <CategoryRow
                                id="talent"
                                title="Talent Spotlight"
                                subtitle="Profiles, pathways, and the next wave."
                                href="/category/talent"
                                stories={curated.talent}
                                variant="editorial"
                            />

                            <CategoryRow
                                id="business"
                                title="Business"
                                subtitle="Money flow, academies, transfers, and deals."
                                href="/category/business"
                                stories={curated.business}
                                variant="editorial"
                            />

                            <CategoryRow
                                id="tech"
                                title="Technology"
                                subtitle="Platforms, data, and tools shaping the game."
                                href="/category/tech"
                                stories={curated.tech}
                                variant="editorial"
                            />

                            <CategoryRow
                                id="culture"
                                title="Culture & Lifestyle"
                                subtitle="Jerseys, streetwear, sound, and identity."
                                href="/category/culture"
                                stories={curated.culture}
                                variant="culture"
                            />

                            <CategoryRow
                                id="diaspora"
                                title="Diaspora Roots"
                                subtitle="Football as memory, belonging, and movement."
                                href="/category/diaspora"
                                stories={curated.diaspora}
                                variant="culture"
                            />
                        </div>

                        <div className="lg:col-span-4">
                            <EngagementPanel />
                        </div>
                    </div>
                </Section>

                <Section className="py-10 sm:py-12">
                    <CultureStrip />
                </Section>

                <Section>
                    <VideoRail />
                </Section>
            </main>

            <Footer />
        </>
    );
}
