import Image from 'next/image'
import { Building2, Calendar, MapPin } from 'lucide-react'

interface EducationCardProps {
  degree: string
  school: string
  period: string
  location: string
  image: string
}

export function EducationCard({ degree, school, period, location, image }: EducationCardProps) {
  return (
    <article className="group grid overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_0_1px_oklch(0.62_0.19_260_/_25%),0_16px_36px_-16px_oklch(0.62_0.19_260_/_45%)] sm:grid-cols-[220px_1fr]">
      <div className="relative h-44 w-full overflow-hidden bg-white p-6 sm:h-full">
        <Image
          src={image}
          alt={school}
          fill
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 p-6">
        <h3 className="text-lg font-semibold text-foreground text-balance">{degree}</h3>
        <p className="flex items-center gap-2 text-sm text-primary">
          <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          {school}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {location}
          </span>
        </div>
      </div>
    </article>
  )
}
