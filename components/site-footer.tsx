import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950 py-8 text-gray-400">
      <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Hezekiah Olatayo. All rights reserved.</p>
          <p className="text-sm mt-1">Built with Next.js and Tailwind CSS.</p>
        </div>
        <nav className="flex items-center space-x-6 mb-4 md:mb-0">
          <Link href="#about" className="hover:text-gray-50 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-50 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-50 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Olatayo-ife" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 hover:text-gray-50 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/olatayo-hezekiah-love-191129327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 hover:text-gray-50 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:olatayohezekiah@gmail.com">
              <Mail className="h-5 w-5 hover:text-gray-50 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
