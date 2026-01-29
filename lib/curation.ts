import type { Story } from "./content";

type CurateOpts = {
    rowSize?: number;                 // default 4
    maxSamePillarInRow?: number;       // default 2
    aboveFoldCount?: number;           // default 8
    maxSamePillarAboveFold?: number;   // default 3
    minVideosAboveFold?: number;       // default 1 (optional)
};

export function curate(stories: Story[], opts: CurateOpts = {}) {
    const rowSize = opts.rowSize ?? 4;
    const maxSamePillarInRow = opts.maxSamePillarInRow ?? 2;
    const aboveFoldCount = opts.aboveFoldCount ?? 8;
    const maxSamePillarAboveFold = opts.maxSamePillarAboveFold ?? 3;
    const minVideosAboveFold = opts.minVideosAboveFold ?? 0;

    const pool = [...stories];
    const result: Story[] = [];
    const pillarCounts: Record<string, number> = {};

    const countVideos = (arr: Story[]) => arr.filter((s) => s.format === "Video").length;

    const canPlace = (s: Story, idx: number) => {
        // rule A: per-row pillar cap
        const rowStart = Math.floor(idx / rowSize) * rowSize;
        const row = result.slice(rowStart, idx);
        const sameInRow = row.filter((x) => x.pillar === s.pillar).length;
        if (sameInRow >= maxSamePillarInRow) return false;

        // rule B: above-the-fold pillar cap
        if (idx < aboveFoldCount) {
            const count = pillarCounts[s.pillar] ?? 0;
            if (count >= maxSamePillarAboveFold) return false;
        }

        // rule C (optional): ensure at least N videos above fold
        if (minVideosAboveFold > 0 && idx < aboveFoldCount) {
            const currentVideos = countVideos(result);
            const remainingSlots = aboveFoldCount - idx;
            const videosNeeded = minVideosAboveFold - currentVideos;

            // If we still need videos and slots are running out, prefer video
            if (videosNeeded > 0 && remainingSlots <= videosNeeded) {
                return s.format === "Video";
            }
        }

        return true;
    };

    while (pool.length) {
        const idx = pool.findIndex((s) => canPlace(s, result.length));
        const pick = idx === -1 ? pool.shift()! : pool.splice(idx, 1)[0];

        result.push(pick);
        pillarCounts[pick.pillar] = (pillarCounts[pick.pillar] ?? 0) + 1;
    }

    return result;
}
