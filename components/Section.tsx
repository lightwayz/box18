import React from "react";

export default function Section({
                                    children,
                                    className = "",
                                }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={`w-full min-w-0 px-4 sm:px-6 py-14 sm:py-16 ${className}`}>
            <div className="mx-auto max-w-6xl min-w-0">{children}</div>
        </section>
    );
}
