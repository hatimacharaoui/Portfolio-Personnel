import { SectionTitle } from './section-title'
import { EducationCard } from './education-card'
import { education } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="border-b border-border py-10 md:py-18">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Éducation" subtitle="Parcours académique" />
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  )
}
