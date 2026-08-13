import Image from 'next/image'
import { GraduationCap, Languages, Rocket } from 'lucide-react'
import { Reveal } from '@/components/portfolio/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'

const highlights = [
  {
    icon: Rocket,
    title: 'Full-Stack',
    text: 'API REST Spring Boot & interfaces React modernes.',
  },
  {
    icon: GraduationCap,
    title: 'Diplômé',
    text: 'Licence Pro. en Développement Web & Mobile.',
  },
  {
    icon: Languages,
    title: 'Trilingue',
    text: 'Arabe (natif), Français & Anglais courant.',
  },
]


export function About() {
  return (
      <section id="a-propos" className="relative py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="À propos" subtitle="Qui suis-je" />

          <div className="mx-auto max-w-4xl text-center">

            <div>
              <Reveal>
                <h3 className="font-heading text-2xl font-bold text-balance">
                  Développeur Web Full-Stack passionné par le back-end Java
                </h3>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Je suis un développeur Full-Stack titulaire d&apos;une Licence
                  Professionnelle en Développement Web et Applications Mobiles,
                  complétée par une formation spécialisée en Développement Web
                  Full-Stack Java Spring Boot. J&apos;aime concevoir des
                  architectures back-end propres et des expériences
                  front-end soignées.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((h, i) => (
                    <Reveal key={h.title} delay={i * 100}>
                      <div className="h-full rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/50">
                        <h.icon className="size-6 text-primary" />
                        <p className="mt-3 font-heading font-semibold">{h.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {h.text}
                        </p>
                      </div>
                    </Reveal>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}
