import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function NotFound() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="card p-8 sm:p-10 text-center">
                        <div className="text-xs tracking-widest text-muted">404</div>
                        <h1 className="mt-3 font-heading text-3xl tracking-tight">
                            Page not found
                        </h1>
                        <p className="mt-3 text-muted">
                            The page you’re looking for doesn’t exist yet — but the platform is
                            growing.
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-3">
                            <a
                                href="/"
                                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white"
                                style={{
                                    background:
                                        "linear-gradient(90deg, hsla(var(--accent) / 0.9), hsla(var(--accent2) / 0.9))",
                                }}
                            >
                                Go Home
                            </a>
                            <a
                                href="/stories"
                                className="inline-flex items-center rounded-full border border-border glass px-5 py-2 text-sm hover:opacity-95"
                            >
                                Browse Stories
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
