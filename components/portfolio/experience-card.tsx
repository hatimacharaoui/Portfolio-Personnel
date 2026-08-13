import { Briefcase } from 'lucide-react'

interface ExperienceCardProps {
  role: string
  company: string
  period: string
  type: string
  description: string
}

export function ExperienceCard({ role, company, period, type, description }: ExperienceCardProps) {
  return (
    <article className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
            <Briefcase className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-foreground text-balance">{role}</h3>
            <p className="mt-0.5 text-sm text-primary">{company}</p>
          </div>
        </div>
        <span className="w-fit shrink-0 rounded-md border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          {period}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:pl-14">{description}</p>
      <span className="mt-3 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary md:ml-14">
        {type}
      </span>
    </article>
  )
}
