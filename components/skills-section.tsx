import { Card, CardContent } from "@/components/ui/card"
import {
  Database,
  Cloud,
  GitBranch,
  Server,
  Code,
  Palette,
  ShieldCheck,
  Network,
  LayoutDashboard,
  Globe,
} from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function SkillsSection() {
  const skills = [
    { name: "JavaScript (ES6+)", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "TypeScript", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "React.js", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "Next.js", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "HTML5", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "CSS3", icon: <Palette className="h-6 w-6 text-emerald-400" /> },
    { name: "Tailwind CSS", icon: <Palette className="h-6 w-6 text-emerald-400" /> },
    { name: "Responsive Design", icon: <LayoutDashboard className="h-6 w-6 text-emerald-400" /> },
    { name: "Node.js", icon: <Server className="h-6 w-6 text-emerald-400" /> },
    { name: "Express.js", icon: <Server className="h-6 w-6 text-emerald-400" /> },
    { name: "Python", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "Django", icon: <Server className="h-6 w-6 text-emerald-400" /> },
    { name: "Flask", icon: <Server className="h-6 w-6 text-emerald-400" /> },
    { name: "MongoDB", icon: <Database className="h-6 w-6 text-emerald-400" /> },
    { name: "MySQL", icon: <Database className="h-6 w-6 text-emerald-400" /> },
    { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-emerald-400" /> },
    { name: "SQL", icon: <Database className="h-6 w-6 text-emerald-400" /> },
    { name: "REST APIs", icon: <Network className="h-6 w-6 text-emerald-400" /> },
    { name: "Git/GitHub", icon: <GitBranch className="h-6 w-6 text-emerald-400" /> },
    { name: "JSON", icon: <Code className="h-6 w-6 text-emerald-400" /> },
    { name: "JWT Authentication", icon: <ShieldCheck className="h-6 w-6 text-emerald-400" /> },
    { name: "Cloud Deployment (Vercel, Heroku)", icon: <Cloud className="h-6 w-6 text-emerald-400" /> },
    { name: "English (Fluent)", icon: <Globe className="h-6 w-6 text-emerald-400" /> },
  ]

  return (
    <AnimatedSection id="skills" className="py-16 md:py-24 bg-gray-950 mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-8">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 text-gray-50 flex flex-col items-center justify-center p-4 text-center hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]"
          >
            <CardContent className="flex flex-col items-center justify-center p-0">
              {skill.icon}
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
