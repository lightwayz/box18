import { Skeleton } from "./Skeleton";

export default function StoryGridSkeleton() {
    return (
        <div>
            <div className="flex items-end justify-between gap-6">
                <div className="w-full max-w-sm">
                    <Skeleton className="h-6 w-44" />
                    <Skeleton className="mt-2 h-4 w-full" />
                </div>
                <Skeleton className="h-4 w-20" />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="card overflow-hidden">
                        <Skeleton className="h-44 w-full rounded-none" />
                        <div className="p-5">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="mt-3 h-5 w-full" />
                            <Skeleton className="mt-2 h-4 w-5/6" />
                            <Skeleton className="mt-4 h-3 w-24" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
