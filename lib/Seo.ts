export const site = {
    name: "BOX18 Naija",
    url: "https://box18naija.com",
    description:
        "Premium editorial stories on African football culture—music, fashion, community, and the business shaping the game.",
    ogImage: "/images/og.jpg", // put any image in public/images/og.jpg
};

export function homeJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
        potentialAction: {
            "@type": "SearchAction",
            target: `${site.url}/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };
}
