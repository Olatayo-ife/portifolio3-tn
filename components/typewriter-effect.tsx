"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
}

export function TypewriterEffect({ text, delay = 0, speed = 50 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      if (index < text.length) {
        const timeout2 = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index))
          setIndex((prev) => prev + 1)
        }, speed)
        return () => clearTimeout(timeout2)
      }
    }, delay)
    return () => clearTimeout(timeout1)
  }, [index, text, speed, delay])

  return <>{displayedText}</>
}
