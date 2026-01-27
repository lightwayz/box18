import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "hsl(var(--bg))",
                card: "hsl(var(--card))",
                ink: "hsl(var(--ink))",
                muted: "hsl(var(--muted))",
                border: "hsl(var(--border))",
                accent: "hsl(var(--accent))",
                accent2: "hsl(var(--accent2))",
                ring: "hsl(var(--ring))",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
                body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
            },
            boxShadow: {
                soft: "0 12px 40px rgba(0,0,0,0.18)",
                glass: "0 10px 40px rgba(0,0,0,0.25)",
            },
            borderRadius: {
                xl2: "1.25rem",
                xl3: "1.75rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
