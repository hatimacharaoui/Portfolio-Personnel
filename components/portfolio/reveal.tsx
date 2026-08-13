'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
    children: React.ReactNode
    className?: string
    delay?: number
    /** direction the element travels from */
    from?: 'up' | 'down' | 'left' | 'right' | 'none'
    as?: React.ElementType
}

export function Reveal({
                           children,
                           className,
                           delay = 0,
                           from = 'up',
                           as: Tag = 'div',
                       }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        if (
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    const hiddenTransform = {
        up: 'translate-y-8',
        down: '-translate-y-8',
        left: 'translate-x-8',
        right: '-translate-x-8',
        none: '',
    }[from]

    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none',
                visible
                    ? 'translate-x-0 translate-y-0 opacity-100'
                    : `opacity-0 ${hiddenTransform}`,
                className,
            )}
        >
            {children}
        </Tag>
    )
}
