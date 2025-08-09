import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeIcon as Certificate } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function CertificationsSection() {
  const certifications = [
    {
      name: "Software Development Certificate",
      issuer: "PLP Academy",
      year: "2023 (Example Year)", // Adjust as needed
      description: "Completed comprehensive training in software development principles and practices.",
    },
  ]

  return (
    <AnimatedSection id="certifications" className="py-16 md:py-24 bg-gray-900 rounded-xl shadow-2xl mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">Certifications</h2>
      <div className="grid gap-8 px-4 md:px-8 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <Certificate className="h-6 w-6 text-emerald-400" />
                {cert.name}
              </CardTitle>
              <p className="text-lg text-gray-300 mt-1">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mt-2">{cert.year}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
