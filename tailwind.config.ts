import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Base surfaces
                bg: "hsl(var(--bg))",
                surface: "hsl(var(--surface))",
                card: "hsl(var(--card))",

                // Text + borders
                ink: "hsl(var(--ink))",
                muted: "hsl(var(--muted))",
                border: "hsl(var(--border))",

                // Foxiz Focus brand system
                primary: "hsl(var(--primary))", // navy header
                primaryFg: "hsl(var(--primary-fg))", // text on navy (usually white)

                accent: "hsl(var(--accent))", // yellow
                accentFg: "hsl(var(--accent-fg))", // text on yellow (usually navy/black)

                danger: "hsl(var(--danger))", // red
                info: "hsl(var(--info))", // cyan/blue

                ring: "hsl(var(--ring))",
            },

            fontFamily: {
                heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
                body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
            },

            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.12)",
                glass: "0 10px 40px rgba(0,0,0,0.18)",
            },

            borderRadius: {
                xl2: "1.25rem",
                xl3: "1.75rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
