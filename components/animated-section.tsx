"use client"

import { useInViewAnimation } from "@/hooks/use-in-view-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const { ref, inView } = useInViewAnimation()

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
    >
      {children}
    </section>
  )
}
