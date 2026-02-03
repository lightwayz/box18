// lib/content.ts

export type Pillar = "Football" | "Culture" | "Business" | "Tech" | "Diaspora" | "Talent";
export type Format = "Essay" | "Interview" | "Photo Essay" | "Video" | "Data Brief";

export type StoryVideo = {
    youtubeId: string;
    duration?: string; // "6:24"
};

export type Story = {
    id: string;
    title: string;

    // editorial identity
    pillar: Pillar; // 1 primary identity
    format: Format; // 1 content format
    topics: string[]; // 1–3 secondary topics (tags)

    // “real reporting” signals
    location?: string; // Lagos, Accra, Banjul, London…
    date: string;
    author: string;

    // media-first
    image: string;
    imageAlt?: string;
    caption?: string; // one strong image-led line
    video?: StoryVideo;

    href: string;
};

export type CategoryKey = "talent" | "business" | "tech" | "culture" | "diaspora";

// ✅ Section metadata (so UI labels/hrefs aren't hard-coded in components)
export const categoryMeta: Record<CategoryKey, { label: string; href: string }> = {
    talent: { label: "Talent Spotlight", href: "/category/talent" },
    business: { label: "Business", href: "/category/business" },
    tech: { label: "Tech", href: "/category/tech" },
    culture: { label: "Culture & Lifestyle", href: "/category/culture" },
    diaspora: { label: "Diaspora", href: "/category/diaspora" },
} as const;

// ✅ Focus story (hero)
export const focusStory: Story = {
    id: "focus-001",
    pillar: "Football",
    format: "Essay",
    topics: ["Fashion", "Music", "Identity"],
    location: "West Africa + Diaspora",
    title: "How African Football Inspires Fashion and Music",
    caption:
        "From matchday chants to streetwear drops, the game shapes identity, sound, and style across the continent and diaspora.",
    image: "/images/focus.jpg",
    imageAlt: "A stadium crowd with a pitch view",
    date: "Jan 26, 2026",
    author: "BOX18 Editorial",
    href: "#",
};

// ✅ Top Stories (grid)
export const topStories: Story[] = [
    {
        id: "s1",
        pillar: "Football",
        format: "Photo Essay",
        topics: ["Fan Culture", "Community", "Atmosphere"],
        location: "Lagos",
        title: "The Stadium Is a Stage: Why African Fans Lead Global Football Culture",
        caption: "The chants, the color, the choreography — a masterclass in community expression.",
        image: "/images/story1.jpg",
        imageAlt: "Fans gathered around a local pitch",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
    {
        id: "s2",
        pillar: "Culture",
        format: "Essay",
        topics: ["Streetwear", "Jerseys", "Style Codes"],
        location: "Accra",
        title: "Jersey as Streetwear: When Club Colors Become Fashion Codes",
        caption: "Everyday style adopts football symbolism without needing a match ticket.",
        image: "/images/story2.jpg",
        imageAlt: "A player in motion on a training ground",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
    {
        id: "s3",
        pillar: "Business",
        format: "Data Brief",
        topics: ["Academies", "Agents", "Transfers"],
        location: "Nigeria • Ghana",
        title: "The Talent Pipeline Economy: Academies, Agents, and Global Demand",
        caption: "A clear look at the money flow — and how local systems can win long-term.",
        image: "/images/story3.jpg",
        imageAlt: "Two kids smiling with a football",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
    {
        id: "s4",
        pillar: "Culture",
        format: "Video",
        topics: ["Afrobeats", "Celebration", "Lyrics"],
        location: "London • Lagos",
        title: "From Street Pitches to Soundtracks: Football’s Influence on Afrobeats",
        caption: "Why the game shows up in lyrics, videos, and the rhythm of celebration.",
        image: "/images/story4.jpg",
        imageAlt: "A football-themed performance scene",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
        video: { youtubeId: "t9Hb_-PF4f4", duration: "4:58" }, // ✅ add if you treat this as a video card
    },
];

// ✅ Video Stories (rail)
export const videoStories: Story[] = [
    {
        id: "v1",
        pillar: "Culture",
        format: "Video",
        topics: ["Fan Culture", "Watch Party"],
        location: "Banjul",
        title: "The Gambia Watch Party: When Football Becomes a Choir",
        caption: "A street-side screen, a full crowd, and chants that carry past the final whistle.",
        image: "/images/video2.jpg",
        imageAlt: "Fans watching a match at night outdoors",
        date: "Jan 27, 2026",
        author: "BOX18 Field Notes",
        href: "#",
        video: { youtubeId: "Ziq9RRNyEUU", duration: "6:24" },
    },
    {
        id: "v2",
        pillar: "Culture",
        format: "Video",
        topics: ["Jersey Culture", "Streetwear"],
        location: "Lagos",
        title: "Jersey to Streetwear: The Style Codes",
        caption: "How kits become daily uniform — on buses, markets, and music sets.",
        image: "/images/video1.jpg",
        imageAlt: "People wearing jerseys in a street scene",
        date: "Jan 27, 2026",
        author: "BOX18 Visuals",
        href: "#",
        video: { youtubeId: "t9Hb_-PF4f4", duration: "4:58" },
    },
    {
        id: "v3",
        pillar: "Business",
        format: "Video",
        topics: ["Academies", "Transfers"],
        location: "Abuja",
        title: "Academies & Transfers: The Pipeline Explained",
        caption: "A simple breakdown of the pathway — and where value leaks happen.",
        image: "/images/video3.jpg",
        imageAlt: "Youth training session on a pitch",
        date: "Jan 27, 2026",
        author: "BOX18 Explainers",
        href: "#",
        video: { youtubeId: "o-mLYrERBjw", duration: "7:11" },
    },
];

// ✅ Sections (homepage grouping; not the same as pillar)
export const categories: Record<CategoryKey, Story[]> = {
    talent: [
        {
            id: "t1",
            pillar: "Talent",
            format: "Interview",
            topics: ["Pathways", "Grassroots", "Breakthrough"],
            location: "Kano",
            title: "Talent Spotlight: The Next Wave from the Streets to the World",
            caption: "Profiles of emerging players and the systems shaping their rise.",
            image: "/images/story2.jpg",
            imageAlt: "A young player training outdoors",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.talent.href, // ✅ single source of truth
        },
        {
            id: "t2",
            pillar: "Football",
            format: "Data Brief",
            topics: ["Scouting", "Academies", "Pipeline"],
            location: "Abuja",
            title: "Scouts, Academies, and the Hidden Pipeline",
            caption: "What actually creates a world-class player in African contexts.",
            image: "/images/story1.jpg",
            imageAlt: "A pitch-side scene at training",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.talent.href, // ✅ single source of truth
        },
    ],

    business: [
        {
            id: "b1",
            pillar: "Business",
            format: "Essay",
            topics: ["Sponsorship", "Transfers", "Value"],
            location: "Lagos",
            title: "The Business of African Football: Local Systems, Global Demand",
            caption: "Transfers, sponsorships, and sustainable value creation.",
            image: "/images/story3.jpg",
            imageAlt: "A stadium-wide view",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.business.href,
        },
        {
            id: "b2",
            pillar: "Business",
            format: "Photo Essay",
            topics: ["Community Clubs", "Local Economy", "Supporters"],
            location: "Banjul",
            title: "Community Clubs as Micro-Economies",
            caption: "How community football organizes resources, people, and influence.",
            image: "/images/focus.jpg",
            imageAlt: "A community football scene",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.business.href,
        },
    ],

    tech: [
        {
            id: "tech1",
            pillar: "Tech",
            format: "Data Brief",
            topics: ["Scouting Tools", "Analytics", "Platforms"],
            location: "Nairobi",
            title: "Technology Reshaping African Football",
            caption: "Data, scouting tools, media platforms, and fan engagement.",
            image: "/images/story3.jpg",
            imageAlt: "A stadium and pitch captured from above",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.tech.href,
        },
        {
            id: "tech2",
            pillar: "Tech",
            format: "Essay",
            topics: ["Distribution", "Visibility", "Creators"],
            location: "Johannesburg",
            title: "From Grassroots to Global: Platforms Powering Visibility",
            caption: "How technology amplifies talent and culture.",
            image: "/images/story2.jpg",
            imageAlt: "A player in action on a green field",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.tech.href,
        },
    ],

    culture: [
        {
            id: "c1",
            pillar: "Culture",
            format: "Photo Essay",
            topics: ["Jerseys", "Streetwear", "Identity"],
            location: "Lagos",
            title: "Culture & Lifestyle: Jerseys, Streetwear, and Identity",
            caption: "Football kits as everyday fashion language.",
            image: "/images/story4.jpg",
            imageAlt: "A jersey and fan-culture scene",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.culture.href,
        },
        {
            id: "c2",
            pillar: "Culture",
            format: "Video",
            topics: ["Chants", "Drums", "Celebration"],
            location: "Accra",
            title: "Matchday Sound: Chants, Drums, and Celebration",
            caption: "Why African football atmosphere is global culture.",
            image: "/images/culture.jpg",
            imageAlt: "A child playing football outdoors",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.culture.href,
            // (optional) add video if this is a real video card
            // video: { youtubeId: "...", duration: "..." },
        },
    ],

    diaspora: [
        {
            id: "d1",
            pillar: "Diaspora",
            format: "Essay",
            topics: ["Belonging", "Memory", "Community"],
            location: "London",
            title: "Diaspora Roots: Football as Memory and Belonging",
            caption: "How communities abroad keep identity alive through the game.",
            image: "/images/story1.jpg",
            imageAlt: "A community gathering around football",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.diaspora.href,
        },
        {
            id: "d2",
            pillar: "Diaspora",
            format: "Interview",
            topics: ["Style", "Sound", "Returns"],
            location: "Lagos ↔ London",
            title: "From Lagos to London: The Culture Loop",
            caption: "Where style, sound, and football travel — and return amplified.",
            image: "/images/story2.jpg",
            imageAlt: "A player mid-kick on a pitch",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: categoryMeta.diaspora.href,
        },
    ],
};

// ✅ Search index
export const allStories: Story[] = [
    focusStory,
    ...topStories,
    ...videoStories,
    ...Object.values(categories).flat(),
];

// ✅ Trending chips
export const trending = ["#AFCON2025", "#NigerianFootball", "#StreetToStadium", "#JerseyCulture", "#DiasporaRoots"];
