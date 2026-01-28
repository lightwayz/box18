import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import HeroCard from "@/components/HeroCard";
import StoryGrid from "@/components/StoryGrid";
import { focusStory, topStories } from "@/lib/content";

export default function FocusPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="Focus"
                    subtitle="Long-form features and deep dives — African football as culture infrastructure."
                />

                <Section>
                    <HeroCard story={focusStory} />
                </Section>

                <Section>
                    <StoryGrid stories={topStories} />
                </Section>
            </main>
            <Footer />
        </>
    );
}
