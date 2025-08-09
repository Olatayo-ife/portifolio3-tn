"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from "next/image" // Import Image component

export function SiteHeader() {
  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/hezekiah-olatayo-logo.png" // Your logo path
            alt="Hezekiah Olatayo Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="h-10 w-10 object-contain"
          />
          <span className="sr-only">Hezekiah Olatayo</span> {/* For accessibility */}
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-300 hover:text-gray-50 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Olatayo-ife" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-300 hover:text-gray-50 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/olatayo-hezekiah-love-191129327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-gray-50 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:olatayohezekiah@gmail.com">
              <Mail className="h-5 w-5 text-gray-300 hover:text-gray-50 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-50" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-950 border-gray-800 text-gray-50">
              <div className="flex flex-col items-start gap-6 p-6">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="text-xl font-medium text-gray-300 hover:text-gray-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
