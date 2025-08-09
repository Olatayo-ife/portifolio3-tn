import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDownCircle } from "lucide-react"
import { TypewriterEffect } from "./typewriter-effect" // Import TypewriterEffect

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center py-20 md:py-32 lg:py-40 text-center min-h-[calc(100vh-64px)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-800 opacity-70 z-0" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg mb-6 animate-fade-in">
          <Image
            src="/hezekiah-olatayo-avatar.png"
            alt="Hezekiah Olatayo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-50 leading-tight mb-4 animate-fade-in-up">
          Hi, I&apos;m <span className="text-emerald-400">Hezekiah Olatayo</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 animate-fade-in-up delay-200">
          <TypewriterEffect
            text="I'm a Full stack developer with Javascript, Typescript, Next. JS, React js, Node js, Python with Django and Flask, MongoDB and SQL."
            speed={1} // Significantly increased writing speed (1ms per character)
            delay={500}
          />
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
          <Button
            asChild
            className="px-8 py-3 text-lg bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="px-8 py-3 text-lg border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="px-8 py-3 text-lg border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <Link
              href="https://docs.google.com/document/d/11cQ1wYRISjSluSfQEoE9AA0uZMjpveZE/edit?usp=drivesdk&ouid=102378979035702086435&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce z-10">
        <Link href="#about" className="text-gray-400 hover:text-gray-50 transition-colors">
          <ArrowDownCircle className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  )
}
