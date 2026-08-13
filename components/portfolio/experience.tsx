import { SectionTitle } from './section-title'
import { ExperienceCard } from './experience-card'
import { experiences } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-10 md:py-18">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Expérience" subtitle="Mon parcours professionnel" />
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.role} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
