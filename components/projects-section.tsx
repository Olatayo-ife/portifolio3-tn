import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce application with product listings, shopping cart, checkout, and admin panel.",
      image: "/e-commerce-dashboard.png",
      techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe"],
      githubLink: "https://github.com/Olatayo-ife",
      liveLink: "https://glow-vibe-olatayo.vercel.app/",
    },
    {
      title: "Education Website",
      description:
        "An educational platform featuring course listings, student resources, and interactive learning materials.",
      image: "/chat-application-interface.png",
      techStack: ["React", "JavaScript", "CSS3", "HTML5"],
      githubLink: "https://github.com/Olatayo-ife",
      liveLink: "https://superb-youtiao-5f8d0b.netlify.app",
    },
    {
      title: "Task Management API",
      description:
        "A robust RESTful API for managing tasks, users, and projects with authentication and authorization.",
      image: "/api-development.png",
      techStack: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/Olatayo-ife",
      liveLink: "https://materiallab-modern-m-w7fd.bolt.host",
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website, showcasing my skills and projects.",
      image: "/portfolio-website-showcase.png",
      techStack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
      githubLink: "https://github.com/Olatayo-ife",
      liveLink: "https://olatayo-portifolio.vercel.app/",
    },
  ]

  return (
    <AnimatedSection id="projects" className="py-16 md:py-24 bg-gray-900 rounded-xl shadow-2xl mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 text-gray-50 flex flex-col hover:shadow-emerald-500/30 transition-shadow duration-300 hover:scale-[1.02]"
          >
            <CardHeader className="p-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-semibold mb-2">{project.title}</CardTitle>
              <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 p-6 pt-0">
              {project.liveLink && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-600 text-gray-950"
                >
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubLink && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-gray-600 text-gray-50 hover:bg-gray-700 hover:border-gray-500 bg-transparent"
                >
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  )
}
