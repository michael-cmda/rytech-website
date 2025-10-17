"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Network, Code, Lock, Laptop, Building, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  const categories = ["All", "Security", "Networking", "Software", "Cybersecurity", "Repair"]

  const projects = [
    {
      id: 1,
      title: "Enterprise Security System",
      category: "Security",
      client: "Manufacturing Company",
      description:
        "Complete CCTV installation and monitoring system for a 50-employee manufacturing facility with 24/7 surveillance coverage.",
      image: "/modern-security-camera-system-installation.jpg",
      icon: Shield,
      technologies: ["HD Cameras", "Motion Detection", "Remote Monitoring", "Cloud Storage"],
      duration: "3 weeks",
      year: "2024",
      results: [
        "100% premises coverage achieved",
        "50% reduction in security incidents",
        "24/7 remote monitoring capability",
        "Integrated mobile app access",
      ],
    },
    {
      id: 2,
      title: "Corporate Network Infrastructure",
      category: "Networking",
      client: "Growing Business",
      description:
        "Full network setup including LAN, WLAN, and server configuration for a rapidly expanding 30-person office.",
      image: "/modern-office-network-infrastructure-setup.jpg",
      icon: Network,
      technologies: ["Fiber Optic", "WiFi 6", "Network Security", "Server Setup"],
      duration: "2 weeks",
      year: "2024",
      results: [
        "300% increase in network speed",
        "99.9% uptime achieved",
        "Scalable infrastructure for growth",
        "Enhanced security protocols",
      ],
    },
    {
      id: 3,
      title: "Custom Business Dashboard",
      category: "Software",
      client: "Retail Chain",
      description:
        "Web-based management dashboard with real-time analytics, inventory tracking, and reporting capabilities.",
      image: "/modern-business-dashboard.png",
      icon: Code,
      technologies: ["React", "Node.js", "Database", "API Integration"],
      duration: "6 weeks",
      year: "2024",
      results: [
        "Real-time business insights",
        "40% improvement in decision making",
        "Automated reporting system",
        "Mobile-responsive design",
      ],
    },
    {
      id: 4,
      title: "Cybersecurity Audit & Implementation",
      category: "Cybersecurity",
      client: "Financial Services",
      description:
        "Comprehensive security assessment and implementation of advanced cybersecurity measures for a financial firm.",
      image: "/cybersecurity-professional-monitoring-security-sys.jpg",
      icon: Lock,
      technologies: ["Security Audit", "Firewall Setup", "Data Encryption", "Compliance"],
      duration: "4 weeks",
      year: "2023",
      results: [
        "Zero security breaches post-implementation",
        "100% compliance with regulations",
        "Advanced threat detection",
        "Staff security training completed",
      ],
    },
    {
      id: 5,
      title: "Office Computer Fleet Optimization",
      category: "Repair",
      client: "Law Firm",
      description:
        "Complete optimization and repair of 25 workstations including hardware upgrades and software optimization.",
      image: "/computer-repair-technician-working-on-laptop.jpg",
      icon: Laptop,
      technologies: ["Hardware Upgrade", "Software Optimization", "Data Migration", "Performance Tuning"],
      duration: "1 week",
      year: "2023",
      results: [
        "60% improvement in system performance",
        "Extended hardware lifespan",
        "Reduced downtime by 80%",
        "Standardized software environment",
      ],
    },
    {
      id: 6,
      title: "Multi-Location Network Integration",
      category: "Networking",
      client: "Restaurant Chain",
      description:
        "Integrated network solution connecting 5 restaurant locations with centralized management and POS systems.",
      image: "/restaurant-network-integration-system.jpg",
      icon: Building,
      technologies: ["VPN Setup", "POS Integration", "Centralized Management", "Backup Systems"],
      duration: "5 weeks",
      year: "2023",
      results: [
        "Seamless multi-location connectivity",
        "Centralized data management",
        "Improved operational efficiency",
        "Real-time sales reporting",
      ],
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section ref={sectionRef} className="py-20 bg-card/30">
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
              Detailed case studies showcasing our successful implementations and the impact we've made for our clients
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? ""
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project image */}
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
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-card-foreground" />
                      <span className="text-card-foreground text-sm">{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-sm text-primary mb-2">{project.client}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Duration:</span> {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
