import type { Metadata } from "next";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-body",
});

const sora = Sora({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-heading",
});

export const metadata: Metadata = {
    title: "BOX18 Naija — African Football, Beyond the Pitch",
    description:
        "Premium editorial coverage of African football culture, music, fashion, community and business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${sora.variable} bg-paper text-ink font-body antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
