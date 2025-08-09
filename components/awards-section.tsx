import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function AwardsSection() {
  const awards = [
    {
      name: "OAU Star Award",
      year: "2024",
      description: "Recognized for outstanding contributions and achievements within Obafemi Awolowo University.",
    },
    {
      name: "OAU Star Award",
      year: "2025",
      description: "Received for continued excellence and impact at Obafemi Awolowo University.",
    },
  ]

  return (
    <AnimatedSection id="awards" className="py-16 md:py-24 bg-gray-950 mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">Awards</h2>
      <div className="grid gap-8 px-4 md:px-8 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <Card
            key={index}
            className="bg-gray-900 border-gray-800 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <Award className="h-6 w-6 text-emerald-400" />
                {award.name}
              </CardTitle>
              <p className="text-lg text-gray-300 mt-1">{award.year}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
