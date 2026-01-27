import React from "react";

export default function Section({
                                    children,
                                    className = "",
                                }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={`max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 ${className}`}>
            {children}
        </section>
    );
}
