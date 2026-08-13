import { Reveal } from '@/components/portfolio/reveal'

type SectionHeadingProps = {
    title: string
    subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <Reveal className="mx-auto mb-14 flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {subtitle ? (
                <p className="mt-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    {subtitle}
                </p>
            ) : null}
            <span className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </Reveal>
    )
}
