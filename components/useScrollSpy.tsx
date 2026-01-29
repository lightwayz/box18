"use client";

import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[], offset = 120) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handler = () => {
            let current = "";
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= offset) current = id;
            }
            setActiveId(current);
        };

        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, [ids, offset]);

    return activeId;
}
