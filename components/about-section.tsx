import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-gray-900 rounded-xl shadow-2xl mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Code className="h-8 w-8 text-emerald-400" />
            <CardTitle className="text-xl font-semibold">Full-Stack Expertise</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-300">
              I specialize in building robust and scalable web applications from front to back. My expertise spans
              modern frontend frameworks like React/Next.js and powerful backend technologies such as Node.js, Python,
              and various databases.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Lightbulb className="h-8 w-8 text-emerald-400" />
            <CardTitle className="text-xl font-semibold">Problem Solver</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-300">
              I thrive on tackling complex challenges and transforming ideas into functional, elegant solutions. I am
              passionate about clean code, efficient algorithms, and delivering high-quality software.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]">
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Rocket className="h-8 w-8 text-emerald-400" />
            <CardTitle className="text-xl font-semibold">Continuous Learner</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-300">
              The tech landscape is ever-evolving, and I am committed to staying current with the latest trends and best
              practices. I constantly explore new technologies to enhance my skill set and build innovative products.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 text-center px-4 md:px-8">
        <p className="text-lg text-gray-300 max-w-4xl mx-auto">
          Full-stack developer with expertise in JavaScript, TypeScript, Next.js, React.js, Node.js, Python (Django &
          Flask), MongoDB, and SQL. Skilled in building scalable, high-performance web applications, with a strong focus
          on clean architecture, seamless user experience, and efficient backend systems.
        </p>
      </div>
    </AnimatedSection>
  )
}
