import Image from 'next/image'
import { Mail, Phone, Download } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 10%, oklch(0.62 0.19 260 / 0.22), transparent 45%), radial-gradient(circle at 85% 30%, oklch(0.65 0.2 290 / 0.16), transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Disponible pour de nouveaux projets
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-5xl">
            Salut, je suis <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-3 font-mono text-lg text-primary md:text-xl">
            {'</>'} {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="glow-primary rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Me contacter
            </a>
            <a
              href="#projets"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Voir mes projets
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              <Download className="h-4 w-4" />
              Télécharger le CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={profile.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={`tel:${profile.phone.replace(/\s/g, '')}`} label="Téléphone">
              <Phone className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bracket-frame group relative">
            <div
              className="absolute -inset-3 rounded-2xl border border-primary/30 transition-colors group-hover:border-primary/60"
              aria-hidden="true"
            />
            <div className="glow-primary relative h-64 w-64 overflow-hidden rounded-2xl border border-border md:h-80 md:w-80">
              <Image
                src="/hatim-profile.png"
                alt={`Photo de ${profile.name}`}
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      {children}
    </a>
  )
}
