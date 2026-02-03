export default function PageHeader({
                                       title,
                                       subtitle,
                                   }: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="bg-ambient">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
                <h1 className="font-heading text-3xl sm:text-5xl leading-[1.05] tracking-tight whitespace-normal break-words">
                    {title}
                </h1>
                {subtitle ? (
                    <p className="mt-4 text-lg text-muted max-w-3xl">{subtitle}</p>
                ) : null}
                <div className="mt-10 border-t border-border" />
            </div>
        </div>
    );
}
