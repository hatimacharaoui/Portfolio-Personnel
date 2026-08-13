interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
      <span className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden="true" />
    </div>
  )
}
