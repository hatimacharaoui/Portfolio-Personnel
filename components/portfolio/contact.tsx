'use client'

import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { SectionTitle } from './section-title'
import { profile } from '@/lib/data'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="border-b border-border py-12 md:py-18">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Contactez-moi" subtitle="Discutons de votre projet" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <ContactItem
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              label="Téléphone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
            />
            <ContactItem
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
              value="linkedin.com"
              href={profile.linkedin}
            />
            <ContactItem
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
              value="github.com"
              href={profile.github}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-foreground">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Envoyer le message
              </button>
              {sent ? (
                <p className="text-center text-sm text-primary" role="status">
                  Merci ! Votre message a bien été pris en compte.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span className="block truncate text-sm font-medium text-foreground">{value}</span>
      </span>
    </a>
  )
}
