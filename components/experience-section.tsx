import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full-stack Developer",
      company: "Various Industries",
      duration: "3+ Years Experience",
      description:
        "Full-stack developer with over 3 years of hands-on experience designing and deploying scalable web applications across diverse industries. Proficient in JavaScript, TypeScript, Next.js, React.js, Node.js, Python (Django & Flask), MongoDB, and SQL, with a track record of delivering high-quality, user-focused solutions that enhance performance, functionality, and business growth.",
    },
  ]

  return (
    <AnimatedSection id="experience" className="py-16 md:py-24 bg-gray-950 mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">Experience</h2>
      <div className="grid gap-8 px-4 md:px-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="bg-gray-900 border-gray-800 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-emerald-400" />
                {exp.title}
              </CardTitle>
              <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
              <div className="flex items-center text-gray-400 text-sm mt-2">
                <Calendar className="h-4 w-4 mr-2" />
                {exp.duration}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
