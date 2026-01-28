import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import StoryGrid from "@/components/StoryGrid";
import { topStories } from "@/lib/content";

export default function StoriesPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="Stories"
                    subtitle="A premium editorial feed across football, culture, business, and diaspora."
                />
                <Section>
                    <StoryGrid stories={topStories} />
                </Section>
            </main>
            <Footer />
        </>
    );
}
