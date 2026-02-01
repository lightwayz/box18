import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Inter, Fraunces } from "next/font/google";
import { site } from "@/lib/Seo";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-body",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-heading",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — African Football, Beyond the Pitch`, template: `%s — ${site.name}` },
    description: site.description,
    openGraph: {
        type: "website",
        url: site.url,
        title: `${site.name} — African Football, Beyond the Pitch`,
        description: site.description,
        images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: `${site.name} — African Football, Beyond the Pitch`, description: site.description, images: [site.ogImage] },
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${fraunces.variable} font-body`}>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>
    );
}
