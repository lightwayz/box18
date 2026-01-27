import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: "var(--ink-black)",
                paper: "var(--paper-white)",
                accent: "var(--afro-green)",
                divider: "var(--divider-gray)",
                muted: "var(--muted)",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
                body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
            },
            boxShadow: {
                soft: "0 10px 30px rgba(11,15,20,0.08)",
            },
        },
    },
    plugins: [],
} satisfies Config;
