export default function SectionHeader({
                                          title,
                                          subtitle,
                                          href,
                                      }: {
    title: string;
    subtitle?: string;
    href?: string;
}) {
    return (
        <div className="flex items-end justify-between gap-6">
            <div>
                <h2 className="font-heading text-2xl tracking-tight whitespace-normal break-words">
                    {title}
                </h2>
                {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
            </div>

            {href ? (
                <a href={href} className="text-sm text-muted hover:text-ink">
                    View all →
                </a>
            ) : null}
        </div>
    );
}
