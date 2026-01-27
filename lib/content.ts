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
