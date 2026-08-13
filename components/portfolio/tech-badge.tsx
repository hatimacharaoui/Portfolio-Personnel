import {
  Coffee,
  Leaf,
  Database,
  Container,
  Layers,
  FileJson,
  TestTube2,
  KeyRound,
  CreditCard,
  Cloud,
  GitBranch,
  Braces,
  Server,
  Palette,
  ShieldCheck,
  Send,
  Boxes,
  Code2,
  FileCode2,
  Triangle,
  Globe,
  type LucideIcon,
} from 'lucide-react'
import { Github as GithubIcon } from './brand-icons'

const techMap: Record<string, { icon: LucideIcon; color: string }> = {
  'java 21': { icon: Coffee, color: '#f89820' },
  java: { icon: Coffee, color: '#f89820' },
  'spring boot': { icon: Leaf, color: '#6dbf47' },
  'spring data jpa': { icon: Leaf, color: '#6dbf47' },
  'spring security': { icon: ShieldCheck, color: '#6dbf47' },
  mysql: { icon: Database, color: '#4479a1' },
  sql: { icon: Database, color: '#4479a1' },
  mongodb: { icon: Database, color: '#47a248' },
  docker: { icon: Container, color: '#2496ed' },
  mapstruct: { icon: Layers, color: '#7c8ba1' },
  'mvc pattern': { icon: Boxes, color: '#8aa0c2' },
  swagger: { icon: FileJson, color: '#85ea2d' },
  postman: { icon: Send, color: '#ff6c37' },
  junit: { icon: TestTube2, color: '#e13a3a' },
  jwt: { icon: KeyRound, color: '#a855f7' },
  stripe: { icon: CreditCard, color: '#635bff' },
  cloudinary: { icon: Cloud, color: '#3448c5' },
  git: { icon: GitBranch, color: '#f05032' },
  github: { icon: GithubIcon, color: '#e5edf9' },
  'next.js': { icon: Braces, color: '#e5edf9' },
  nextjs: { icon: Braces, color: '#e5edf9' },
  'node.js': { icon: Server, color: '#68a063' },
  nodejs: { icon: Server, color: '#68a063' },
  express: { icon: Server, color: '#b0b8c4' },
  'tailwind css': { icon: Palette, color: '#38bdf8' },
  tailwind: { icon: Palette, color: '#38bdf8' },
  figma: { icon: Palette, color: '#f24e1e' },
  react: { icon: Code2, color: '#61dafb' },
  'react js': { icon: Code2, color: '#61dafb' },
  reactjs: { icon: Code2, color: '#61dafb' },
  javascript: { icon: FileCode2, color: '#f0db4f' },
  html: { icon: FileCode2, color: '#e34f26' },
  css: { icon: FileCode2, color: '#264de4' },
  vercel: { icon: Triangle, color: '#e5edf9' },
  netlify: { icon: Globe, color: '#00c7b7' },
  render: { icon: Globe, color: '#46e3b7' },
  'api rest': { icon: Server, color: '#8aa0c2' },
}

export function TechBadge({ label }: { label: string }) {
  const match = techMap[label.toLowerCase()] ?? { icon: Braces, color: '#8aa0c2' }
  const Icon = match.icon
  return (
    <span className="group/badge inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/60">
      <Icon
        className="h-3.5 w-3.5 transition-transform group-hover/badge:scale-110"
        style={{ color: match.color }}
        aria-hidden="true"
      />
      {label}
    </span>
  )
}
