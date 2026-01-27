import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FocusFeature from "@/components/FocusFeature";
import StoryGrid from "@/components/StoryGrid";
import CultureStrip from "@/components/CultureStrip";
import VideoFeature from "@/components/VideoFeature";
import Footer from "@/components/Footer";

import { focusStory, topStories } from "@/lib/content";

export default function HomePage() {
  return (
      <>
        <Header />
        <main>
          <Hero />

          <Section>
            <FocusFeature story={focusStory} />
          </Section>

          <Section>
            <StoryGrid stories={topStories} />
          </Section>

          <Section className="py-10 sm:py-12">
            <CultureStrip />
          </Section>

          <Section>
            <VideoFeature />
          </Section>
        </main>
        <Footer />
      </>
  );
}
