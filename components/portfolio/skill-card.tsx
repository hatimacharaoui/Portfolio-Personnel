import type { LucideIcon } from 'lucide-react'
import { TechBadge } from './tech-badge'

interface SkillCardProps {
  icon: LucideIcon
  title: string
  skills: string[]
}

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_0_1px_oklch(0.62_0.19_260_/_25%),0_16px_36px_-16px_oklch(0.62_0.19_260_/_45%)]">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <TechBadge label={skill} />
          </li>
        ))}
      </ul>
    </div>
  )
}
