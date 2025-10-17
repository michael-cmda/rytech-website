"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Network, Code } from "lucide-react"

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const featuredProjects = [
    {
      title: "Enterprise Security System",
      description: "Complete CCTV installation and monitoring system for a 50-employee manufacturing company",
      category: "Security",
      icon: Shield,
      image: "/modern-security-camera-system-installation.jpg",
      technologies: ["HD Cameras", "Motion Detection", "Remote Monitoring", "Cloud Storage"],
    },
    {
      title: "Corporate Network Infrastructure",
      description: "Full network setup including LAN, WLAN, and server configuration for a growing business",
      category: "Networking",
      icon: Network,
      image: "/modern-office-network-infrastructure-setup.jpg",
      technologies: ["Fiber Optic", "WiFi 6", "Network Security", "Server Setup"],
    },
    {
      title: "Custom Business Dashboard",
      description: "Web-based management dashboard with real-time analytics and reporting capabilities",
      category: "Software",
      icon: Code,
      image: "/modern-business-dashboard.png",
      technologies: ["React", "Node.js", "Database", "API Integration"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing our successful implementations and the impact we've made for our clients
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-2">
                      <project.icon className="w-4 h-4 text-primary-foreground" />
                      <span className="text-primary-foreground text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to view all projects */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/projects">
                View All Projects
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
