import { SectionTitle } from './section-title'
import { ProjectCard } from './project-card'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projets" className="border-b border-border py-10 md:py-18">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Projets" subtitle="Travaux techniques réalisés" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
