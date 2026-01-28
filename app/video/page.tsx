import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import VideoRail from "@/components/VideoRail";

export default function VideoPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="Video"
                    subtitle="Watch features, fan culture, and the stories behind the pitch."
                />

                <Section>
                    <VideoRail />
                </Section>

                <Section>
                    <div className="card p-6 sm:p-8">
                        <div className="text-xs tracking-widest text-muted">COMING NEXT</div>
                        <h2 className="mt-2 font-heading text-2xl tracking-tight">
                            Video Hub (Playlists + Series)
                        </h2>
                        <p className="mt-2 text-sm text-muted">
                            After approval, this page becomes a full library: categories, playlists, and featured series.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
