import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="About BOX18 Naija"
                    subtitle="We cover African football as culture infrastructure — where the game shapes sound, style, identity, and the business of talent."
                />

                <Section>
                    <div className="card p-6 sm:p-8">
                        <h2 className="font-heading text-2xl tracking-tight">Our Lens</h2>
                        <p className="mt-3 text-muted">
                            BOX18 is built for premium editorial storytelling. We go beyond match results to document
                            the cultural systems around the game: community rituals, fashion codes, music, diaspora identity,
                            and economic opportunity.
                        </p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { t: "Culture", d: "Sound, style, celebration, identity." },
                                { t: "Talent", d: "Pathways, pipelines, and profiles." },
                                { t: "Business", d: "Economics, value creation, and opportunity." },
                            ].map((x) => (
                                <div key={x.t} className="rounded-3xl border border-border glass p-5">
                                    <div className="font-heading text-lg">{x.t}</div>
                                    <div className="mt-2 text-sm text-muted">{x.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
