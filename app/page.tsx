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

import { focusStory, topStories, categories } from "@/lib/content";
import { homeJsonLd } from "@/lib/Seo";

export default function HomePage() {
    const jsonLd = homeJsonLd();

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
                    <HeroCard story={focusStory} />
                </Section>

                <Section>
                    <StoryGrid stories={topStories} />
                </Section>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-8 space-y-12">
                            <CategoryRow
                                id="talent"
                                title="Talent Spotlight"
                                subtitle="Profiles, pathways, and the next wave."
                                href="/category/talent"
                                stories={categories.talent}
                                variant="editorial"
                            />

                            <CategoryRow
                                id="business"
                                title="Business"
                                subtitle="Money flow, academies, transfers, and deals."
                                href="/category/business"
                                stories={categories.business}
                                variant="editorial"
                            />

                            <CategoryRow
                                id="culture"
                                title="Culture & Lifestyle"
                                subtitle="Jerseys, streetwear, sound, and identity."
                                href="/category/culture"
                                stories={categories.culture}
                                variant="culture"
                            />

                            <CategoryRow
                                id="diaspora"
                                title="Diaspora Roots"
                                subtitle="Football as memory, belonging, and movement."
                                href="/category/diaspora"
                                stories={categories.diaspora}
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
