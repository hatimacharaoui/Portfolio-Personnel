import {
  Braces,
  Layout,
  Server,
  Database,
  GitBranch,
  Rocket,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionTitle } from './section-title'
import { SkillCard } from './skill-card'
import { skillGroups } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Braces,
  Layout,
  Server,
  Database,
  GitBranch,
  Rocket,
  Wrench,
}

export function Skills() {
  return (
    <section id="competences" className="border-b border-border py-10 md:py-18">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Compétences" subtitle="Mon expertise technique" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              icon={iconMap[group.icon]}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
