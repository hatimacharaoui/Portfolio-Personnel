import Image from 'next/image'
import { Github } from './brand-icons'
import { TechBadge } from './tech-badge'

interface ProjectCardProps {
  title: string
  subtitle: string
  image: string
  description: string
  tags: string[]
  github: string
}

export function ProjectCard({ title, subtitle, image, description, tags, github }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_0_1px_oklch(0.62_0.19_260_/_25%),0_16px_36px_-16px_oklch(0.62_0.19_260_/_45%)]">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-[radial-gradient(circle_at_50%_30%,oklch(0.3_0.06_262/60%),oklch(0.16_0.03_262)_75%)] p-4">
        <Image
          src={image}
          alt={`Aperçu du projet ${title}`}
          fill
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-primary">
          {subtitle}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-foreground text-balance">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <TechBadge label={tag} />
            </li>
          ))}
        </ul>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Voir sur GitHub
        </a>
      </div>
    </article>
  )
}
