"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { AnimatedSection } from "./animated-section"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <AnimatedSection id="contact" className="py-16 md:py-24 bg-gray-900 rounded-xl shadow-2xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12 px-4 md:px-8">
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            Have a project in mind or just want to say hello? Feel free to reach out! I&apos;m always open to new
            opportunities and collaborations.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="h-6 w-6 text-emerald-400" />
              <a href="mailto:olatayohezekiah@gmail.com" className="hover:text-gray-50 transition-colors">
                olatayohezekiah@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="h-6 w-6 text-emerald-400" />
              <a href="tel:+2349037897265" className="hover:text-gray-50 transition-colors">
                +2349037897265
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="h-6 w-6 text-emerald-400" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-50 mb-2 block">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-50 mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-gray-50 mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold py-3 text-lg"
          >
            Send Message
          </Button>
        </form>
      </div>
    </AnimatedSection>
  )
}
