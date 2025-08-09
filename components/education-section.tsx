import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function EducationSection() {
  const education = [
    {
      degree: "B.Sc. in Materials Science and Engineering",
      university: "Obafemi Awolowo University, Ile-Ife",
      duration: "2017 - 2022 (Example Dates)", // Adjust as needed
      description:
        "Focused on the properties, processing, and applications of materials, providing a strong analytical and problem-solving foundation.",
    },
  ]

  return (
    <AnimatedSection id="education" className="py-16 md:py-24 bg-gray-900 rounded-xl shadow-2xl mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">Education</h2>
      <div className="grid gap-8 px-4 md:px-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-emerald-400" />
                {edu.degree}
              </CardTitle>
              <p className="text-lg text-gray-300 mt-1">{edu.university}</p>
              <p className="text-gray-400 text-sm mt-2">{edu.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
