export type StoryCategory = "Football" | "Culture" | "Business" | "Focus" | "Video";

export type Story = {
    id: string;
    category: StoryCategory;
    title: string;
    excerpt: string;
    image: string; // use local /public or remote
    date: string;
    author: string;
    href: string;
};

export const focusStory: Story = {
    id: "focus-001",
    category: "Focus",
    title: "How African Football Inspires Fashion and Music",
    excerpt:
        "From matchday chants to streetwear drops, the game shapes identity, sound, and style across the continent and diaspora.",
    image: "/images/focus.jpg", // put any image at public/images/focus.jpg
    date: "Jan 26, 2026",
    author: "BOX18 Editorial",
    href: "#",
};

export const topStories: Story[] = [
    {
        id: "s1",
        category: "Football",
        title: "The Stadium Is a Stage: Why African Fans Lead Global Football Culture",
        excerpt: "The chants, the color, the choreography — a masterclass in community expression.",
        image: "/images/story1.jpg",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
    {
        id: "s2",
        category: "Culture",
        title: "Jersey as Streetwear: When Club Colors Become Fashion Codes",
        excerpt: "How everyday style adopts football symbolism without needing a match ticket.",
        image: "/images/story2.jpg",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
    {
        id: "s3",
        category: "Business",
        title: "The Talent Pipeline Economy: Academies, Agents, and Global Demand",
        excerpt: "A clear look at the money flow — and how local systems can win long-term.",
        image: "/images/story3.jpg",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
    {
        id: "s4",
        category: "Culture",
        title: "From Street Pitches to Soundtracks: Football’s Influence on Afrobeats",
        excerpt: "Why the game shows up in lyrics, videos, and the rhythm of celebration.",
        image: "/images/story4.jpg",
        date: "Jan 26, 2026",
        author: "BOX18 Editorial",
        href: "#",
    },
];

export const categories: Record<"talent" | "business" | "culture" | "diaspora", Story[]> = {
    talent: [
        {
            id: "t1",
            category: "Football",
            title: "Talent Spotlight: The Next Wave from the Streets to the World",
            excerpt: "Profiles of emerging players and the systems shaping their rise.",
            image: "/images/story2.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/talent",
        },
        {
            id: "t2",
            category: "Football",
            title: "Scouts, Academies, and the Hidden Pipeline",
            excerpt: "What actually creates a world-class player in African contexts.",
            image: "/images/story1.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/talent",
        },
    ],
    business: [
        {
            id: "b1",
            category: "Business",
            title: "The Business of African Football: Local Systems, Global Demand",
            excerpt: "Transfers, sponsorships, and sustainable value creation.",
            image: "/images/story3.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/business",
        },
        {
            id: "b2",
            category: "Business",
            title: "Community Clubs as Micro-Economies",
            excerpt: "How community football organizes resources, people, and influence.",
            image: "/images/focus.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/business",
        },
    ],
    culture: [
        {
            id: "c1",
            category: "Culture",
            title: "Culture & Lifestyle: Jerseys, Streetwear, and Identity",
            excerpt: "Football kits as everyday fashion language.",
            image: "/images/story4.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/culture",
        },
        {
            id: "c2",
            category: "Culture",
            title: "Matchday Sound: Chants, Drums, and Celebration",
            excerpt: "Why African football atmosphere is global culture.",
            image: "/images/culture.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/culture",
        },
    ],
    diaspora: [
        {
            id: "d1",
            category: "Culture",
            title: "Diaspora Roots: Football as Memory and Belonging",
            excerpt: "How communities abroad keep identity alive through the game.",
            image: "/images/story1.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/diaspora",
        },
        {
            id: "d2",
            category: "Culture",
            title: "From Lagos to London: The Culture Loop",
            excerpt: "Where style, sound, and football travel — and return amplified.",
            image: "/images/story2.jpg",
            date: "Jan 27, 2026",
            author: "BOX18 Editorial",
            href: "/category/diaspora",
        },
    ],
};


export const trending = [
    "#AFCON2025",
    "#NigerianFootball",
    "#StreetToStadium",
    "#JerseyCulture",
    "#DiasporaRoots",
];

