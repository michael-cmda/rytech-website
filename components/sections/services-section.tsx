"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Network, Laptop, Lock, Code, Headphones, ArrowRight } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    {
      icon: Code,
      title: "Web & Software Development",
      description: "Custom web applications, software systems, APIs, and dashboards tailored to your business needs.",
      href: "/services/software",
      features: ["Custom Web Apps", "API Development", "Database Design", "System Integration"],
    },
    {
      icon: Shield,
      title: "CCTV Installation & Security Systems",
      description:
        "Professional installation and monitoring of security camera systems to protect your business premises.",
      href: "/services/cctv",
      features: ["HD Camera Installation", "Remote Monitoring", "Motion Detection", "Night Vision"],
    },
    {
      icon: Network,
      title: "Networking & Infrastructure Setup",
      description: "Complete network solutions including LAN, WLAN, VLAN setup and server configuration.",
      href: "/services/networking",
      features: ["Network Cabling", "WiFi Setup", "Server Configuration", "Network Security"],
    },
    {
      icon: Laptop,
      title: "Computer & Laptop Repair",
      description: "Expert repair, maintenance, and optimization services for all types of computing devices.",
      href: "/services/laptop-repair",
      features: ["Hardware Repair", "Software Optimization", "Data Recovery", "Virus Removal"],
    },
    {
      icon: Lock,
      title: "Cybersecurity & Data Protection",
      description:
        "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      href: "/services/security-devices",
      features: ["Security Audits", "Firewall Setup", "Data Encryption", "Compliance Support"],
    },
    {
      icon: Headphones,
      title: "System Optimization & IT Support",
      description:
        "Ongoing IT support, system optimization, and helpdesk services to keep your business running smoothly.",
      href: "/services/it-support",
      features: ["24/7 Support", "System Monitoring", "Performance Optimization", "Remote Assistance"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to meet your business needs and drive digital transformation
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary bg-transparent"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
